import amqp from "amqplib";

connect();

async function connect() {
    const queue = "bicicletas";

    try {
        const connection = await amqp.connect(
            "amqps://txubtzxt:vhv0LMQ9gDl1mokB0ed6UCCcHgazGxbE@shrimp.rmq.cloudamqp.com/txubtzxt"
        );
        console.log("Connected to RabbitMQ");

        const channel = await connection.createChannel();
        console.log("Channel created");

        const result = await channel.assertQueue(queue);
        console.log("Queue created");
    } catch (error) {
        console.error(`Error -> ${error}`);
    }
}
