import express from "express";
import{
    getPatients,
    addPatient,
    deletePatient,
    updatePatient
} from "../controller/patientController.js"

const router = express.Router()


router.get("/patients",getPatients)
router.post("/add-patient",addPatient)
router.patch("/users/:id", updatePatient)
router.delete("/users/:id", deletePatient)

export default router