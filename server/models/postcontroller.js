import Post from'../models/.js';
export const createPost = async (req, res) => {
  try {const posts = await
    post.find().populate('category');
    res.json(posts);
  }catch (error) {next(error);
  } 
};
export const getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).populate('category');
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    next(error);
  }
};
export const createCategory = async (req, res, next) => {
  try {
    const category = new Category(req,body);
const save= await newcategory.save();
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
}