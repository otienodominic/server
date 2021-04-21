import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    patientNumber: { type: Number, required: true, unique: true },
    patientName: { type: String,  required: true  },
    phoneNumber: { type: Number, required: false }, 
    age: { type: Number, required: true },
    gender: { type: String, required: true }, 
    viralLoad: [{ type: String, required: true }], 
    creator: {type: String, required: true},
    createdAt:[{ type: Date, default: Date.now }],      
    appointmentDate:[{ type: Date }],
})
var PostMessage = mongoose.model('File', postSchema);

export default PostMessage;