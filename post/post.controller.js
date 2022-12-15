import { Post } from "./post.model.js"

const getAll = async (req, res) => {
    const posts = await Post.find()
    res.status(200).json(posts)
}

export {
    getAll as getPosts
}