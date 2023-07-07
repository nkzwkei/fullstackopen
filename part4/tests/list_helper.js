const _ = require('lodash')

const dummy = (_) => {
    return 1
}

const totalLikes = (blogs) => {
    if(blogs.length === 0) return 0
    return blogs.map(blog => blog.likes).reduce((a, b) => a+b)
}

const favoriteBlog = (blogs) => {
    const maxLikes = Math.max(...blogs.map(blog => blog.likes))
    for(let i=0; i<blogs.length; ++i) {
        if(blogs[i].likes === maxLikes) {
            const { title, author, likes } = blogs[i]
            return { title, author, likes }
        }
    }
}

const mostBlogs = (blogs) => {
    const names = blogs.map(blog => blog.author)
    const freq = _.frequencies
}

module.exports = {
    dummy, totalLikes, favoriteBlog
}