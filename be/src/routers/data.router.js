import { Router } from "express";
import { Data } from "../models/datamodel.js";
import { sample_data } from "../datas.js";

const router = Router();

seedData();

router.get("/", async (req, res) => {

    try {
        
        const data = await Data.find();

        res.json(data);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }
});


export default router;

async function seedData() {
    const dataCount = await Data.countDocuments();
    if (dataCount > 0) {
        console.log("Data Seed is Already Done");
    }
    if (dataCount == 0) {
        await Data.create(sample_data);
        console.log("Data is Seed Done");
    }
}