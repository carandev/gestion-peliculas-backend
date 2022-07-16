import app from '../index.js'

app.get('/posts', (req, res) => {
  return res.send({message: "Hola"});
});
