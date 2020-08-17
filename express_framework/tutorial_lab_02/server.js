const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const errorHandler = require('errorhandler')
const app = express()
const { posts, comments } = require('./routes')

let store = {
    posts: [{
      name: "",
      url: "",
      text: "",
      comments: [{
        text: ""
      }]
    }]
  }
  

app.use(bodyParser.json(), logger('dev'), errorHandler())
app.use((req, resp, next) => {
    req.store = store
    next()
})

app.get('/posts', (req, res) => {
    posts.getPost(req, res)
})

app.post('/posts', (req, res) => {
    posts.addPost(req, res)
})

app.put('/posts/:postId', (req, res) => {
    posts.updatePost(req, res)
})

app.delete('/posts/:postId', (req, res) => {
    posts.removePost(req, res)
})

app.get('/posts/:postId/comments', (req, res) => {
    comments.getComments(req, res)
})

app.post('/posts/:postId/comments', (req, res) => {
    comments.addComment(req, res)
})

app.put('/posts/:postId/comments/:commentsId', (req, res) => {
    comments.updateComment(req, res)
})

app.delete('/posts/:postId/comments/:commentsId', (req, res) => {
    comments.removeComment(req, res)
})

app.listen(3000 , () => console.log(`Server running at port ${3000}`));
