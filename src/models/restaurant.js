import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  name: String,
});

export default mongoose.model('Restaurant', restaurantSchema);
