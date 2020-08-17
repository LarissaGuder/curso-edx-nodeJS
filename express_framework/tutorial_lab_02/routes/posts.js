module.exports = {
    getPost(req, res) {
        res.type('application/json')
        res.send(req.store.posts)
        console.log('asdoiashdasohdoaishdoihasdoihasdoihasdoihasoidhasoidhaosihd');
    },
    addPost(req, res) {
        console.log('--------------------------------');
        req.store.posts.push(req.body)
        res.sendStatus(201)
    },
    updatePost(req, res) {
        req.store.posts[req.params.postId] = req.body
        res.sendStatus(202)
    },
    removePost(req, res) {
        req.store.posts.splice(req.params.postId, 1)
        res.sendStatus(204)
    }
}