const listHelper = require('./list_helper')
const { listOfBlogs, listWithNoBlog, listWithOneBlog } = require('./mock_data')

test('dummy returns one', () => {
    const result = listHelper.dummy(listWithNoBlog)
    expect(result).toBe(1)
})

describe('total likes', () => {
    test('of empty list is zero', () => {
        const result = listHelper.totalLikes(listWithNoBlog)
        expect(result).toBe(0)
    })

    test('when list has only one blog equals the likes of that', () => {
        const result = listHelper.totalLikes(listWithOneBlog)
        expect(result).toBe(5)
    })

    test('of a bigger list is calculated right', () => {
        const result = listHelper.totalLikes(listOfBlogs)
        expect(result).toBe(36)
    })
})

describe('more complicated test', () => {
    test('favorite blog', () => {
        const result = listHelper.favoriteBlog(listOfBlogs)
        expect(result).toEqual({
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            likes: 12
        })
    })
})

// oops i mean 4.5