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
    const freq = {}
    for(const name of names) {
        if(!freq[name]) freq[name] = 1
        else freq[name]++
    }
    const mx = Math.max(...Object.values(freq))
    for(const name of names) {
        if(freq[name] === mx) {
            return {
                author: name,
                blogs: mx
            }
        }
    }
}

module.exports = {
    dummy, totalLikes, favoriteBlog, mostBlogs
}