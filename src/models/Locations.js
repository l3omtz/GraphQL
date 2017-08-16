import mongoose, { Schema } from 'mongoose';

const LocationSchema = new Schema({
     location: String
})

export default mongoose.model('Location', LocationSchema);