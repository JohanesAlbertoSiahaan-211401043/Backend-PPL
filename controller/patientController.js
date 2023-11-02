import Patient from "../models/patientModel.js"
export const getPatients = async (req,res) =>{
    try {
        const patients = await Patient.find()
        
        if(patients.length === 0){

            res.json({
                "msg":"no patients yet"
            })

            return

        }
        
        res.json(patients)
    } catch (error) {
        console.log(error)
    }
}

export const addPatient = async (req,res)=>{
    try {
        const requestPayload = {
            "name":req.body.name,
            "email":req.body.email,
            "phone":req.body.phone,
            "enroll_number":req.body.enroll_number,
            "admission_date":req.body.admission_date
        }

        const newPatient = new Patient(requestPayload)

        const insertedPatient = await newPatient.save() 
        res.status(200).json(insertedPatient)
        
    } catch (error) {
        console.log(error)
    }
}

export const updatePatient = async (req, res) => {
    try {
        const updatedPatient = await Patient.updateOne({_id: req.params.id}, {$set: req.body})
        res.status(200).json(updatedPatient)
    } catch (error) {
        console.log(error)
    }
}

export const deletePatient = async (req, res) => {
    try {
        const deletedPatient = await User.deleteOne({_id: req.params.id})
        res.status(200).json(deletedPatient)
    } catch (error) {
        console.log(error)
    }
}

export const tryPatients = async (req,res) =>{
    console.log('someone is calling')
    res.json({
        "msg":"someone is calling"
    })
}