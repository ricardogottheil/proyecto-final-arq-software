require("dotenv").config();
const amqp = require("amqplib");
const mongoose = require("mongoose");

let Bicicleta = require("./models/bicicleta");
mongoDBconnect();
connect();

async function connect() {
    try {
        const connection = await amqp.connect(process.env.RABBITMQ_URI);
        console.log("Connected to RabbitMQ");

        const channel = await connection.createChannel();
        console.log("Channel created");

        const result = await channel.assertQueue("bicicletas");
        console.log("Queue created");

        channel.consume("bicicletas", async (message) => {
            let bicicleta = JSON.parse(message.content);

            switch (bicicleta.accion) {
                case "crear":
                    await Bicicleta.create(bicicleta);
                    break;
                case "actualizar":
                    await Bicicleta.findByIdAndUpdate(bicicleta.id, bicicleta);
                    break;
                case "eliminar":
                    const eliminar = await Bicicleta.findByIdAndDelete(
                        bicicleta.id
                    );
                    break;
            }
            channel.ack(message);
        });
    } catch (error) {
        console.error(`Error -> ${error}`);
    }
}
async function mongoDBconnect() {
    try {
        mongoose.connect(
            process.env.MONGODB_URI ??
                `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:27017/bicicletas`,

            (err, res) => {
                if (err) throw err;
                console.log("BD online");
            }
        );
    } catch (error) {
        console.log(error);
    }
}
