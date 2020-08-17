module.exports = {
    getComments(req, res) {
        res.type('application/json')
        res.status(200).send(req.store.posts[req.params.postId].comments)
    },
    addComment(req, res) {
        req.store.posts[req.params.postId].comments.push(req.body)
        res.sendStatus(201)
    },
    updateComment(req, res) {
        req.store.posts[req.params.postId].comments[req.params.commentId] = req.body
        res.sendStatus(202)
    },
    removeComment(req, res) {
        req.store.posts[req.params.postId].comments.splice(req.params.commentId, 1)
        res.sendStatus(204)

    }
}