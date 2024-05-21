import express from 'express';
import cors from 'cors';
import dataRouter from './routers/data.router.js'
import mongoose from 'mongoose';


const app = express();

mongoose
    .connect("mongodb+srv://mariselvamcm:9443470871@cluster0.dor8n93.mongodb.net/", {

        useNewUrlParser: true,

        useUnifiedTopology: true,

    })

    .then(() => {

        console.log("Connected to MongoDB");

    });


app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000'],
})
);

app.use("/", dataRouter);

const PORT = 5000;

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})