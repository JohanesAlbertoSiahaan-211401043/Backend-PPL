import mongoose from "mongoose";

const Patient = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    enroll_number:{
        type:String,
        required:true
    },
    admission_date:{
        type:String,
        required:true
    }
})

export default mongoose.model("Patient", Patient)
