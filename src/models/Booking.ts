import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: String, required: true },
  color: { type: String, required: true },
  size: { type: String },
  vehicleType: { type: String, required: true },
  selectedPackages: [{ type: String }],
});

const bookingSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  timeSlot: { type: String, required: true },
  notes: { type: String },
  vehicleLength: { type: String },
  vehicles: [vehicleSchema],
  additionalServices: [{ type: String }],
  serviceTypes: [{ type: String }],
  date: { type: Date, required: true },
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Booking = mongoose.models.Booking || mongoose.model('Booking', bookingSchema);

export default Booking;
