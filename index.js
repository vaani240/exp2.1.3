import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import connectDB from './src/config/db.js';
import categoryRoutes from './src/routes/categoryRoutes.js';
import productRoutes from './src/routes/productRoutes.js';

const app = express();

// middleware
app.use(express.json());

// mount routers
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

// basic health check
app.get('/', (req, res) => {
  res.send('E-commerce catalog API is running');
});

// use only the PORT Render provides; fallback is for local dev
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to connect to MongoDB:', err.message);
  process.exit(1);
});