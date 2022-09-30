require('dotenv').config();
const amqp = require('amqplib');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

const PORT = process.env.PORT ?? 5001;

let channel, connection;

connect();

async function connect() {
  try {
    connection = await amqp.connect(process.env.RABBITMQ_URI);
    console.log('Connected to RabbitMQ');

    channel = await connection.createChannel();
    console.log('Channel created');

    await channel.assertQueue('bicicletas');
    console.log('Queue created');
  } catch (error) {
    console.error(`Error -> ${error}`);
  }
}

mongoose.connect(
  process.env.MONGODB_URI,

  (err, res) => {
    if (err) throw err;
    console.log('BD online');
  }
);

let Bicicleta = require('./models/bicicleta');

app.post('/bicicletas', (req, res) => {
  const { id, color, modelo, ubicacion, accion } = req.body;
  if (!color || !modelo || !ubicacion || !accion) {
    return res.status(400).json({ ok: false, message: 'Bad request' });
  }

  if (!id && accion === 'actualizar') {
    return res.status(400).json({ ok: false, message: 'Bad request' });
  }

  if (!id && accion === 'eliminar') {
    return res.status(400).json({ ok: false, message: 'Bad request' });
  }

  if (id && accion === 'crear') {
    return res.status(400).json({ ok: false, message: 'Bad request' });
  }

  channel.sendToQueue('bicicletas', Buffer.from(JSON.stringify(req.body)));
  console.log('Message sent');

  res.json({ ok: true, message: 'Message sent' });
});

app.get('/bicicletas', (req, res) => {
  Bicicleta.find({}, (err, bicicletas) => {
    if (err)
      return res
        .status(500)
        .json({ ok: false, message: 'Internal server error' });
    res.json({ ok: true, bicicletas });
  });
});

app.get('*', (req, res) => {
  res.status(404).send('Not found');
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
