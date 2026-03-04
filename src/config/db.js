import mongoose from 'mongoose';

// Configuration layer: handles database connectivity.
const connectDB = async () => {
  try {
    // Use the correct environment variable name
    const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce';
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

export default connectDB;