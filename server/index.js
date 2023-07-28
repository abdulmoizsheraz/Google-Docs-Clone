const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 5000
app.use(express.json())
mongoose.connect("mongodb://localhost:27017",{
  dbName:"GoogleDocsClone"
})
.then(()=>(
  console.log("Database Connected Successfully")
)).catch((e)=>{console.log(e)})

// All routes
app.get('/', (req, res) => {
  res.send('Hello World1!')
})

app.use('/api/signup',require("./routes/signup"));
app.use('/api/login',require("./routes/login"));
app.use('/api/createdocument',require("./routes/createdocument"));
app.use('/api/documents',require("./routes/documents"));
app.use('/api/updatedocument/:id',require("./routes/updatedocument"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})