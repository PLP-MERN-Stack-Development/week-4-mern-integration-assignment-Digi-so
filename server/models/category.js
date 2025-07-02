import mongoose from 'mongoose';
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a category name'],
    trim: true,
    maxlength: [50, 'Category name cannot be more than 50 characters'],
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  }
});

const Category = mongoose.model('Category', categorySchema);
export default Category;