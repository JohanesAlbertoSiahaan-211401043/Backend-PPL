import express from "express";
import{
    getPatients,
    addPatient
} from "../controller/patientController.js"

const router = express.Router()


router.get("/patients",getPatients)
router.post("/add-patient",addPatient)

export default router