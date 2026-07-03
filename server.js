const expres = require('express');
const app = expres();
const PORT = 3002;

//web server

app.use(expres.static("frontend"))
app.listen(PORT, function() {
  console.log("successfully running at http://localhost:" + PORT)
})