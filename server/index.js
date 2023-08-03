const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const app = express()
const port = 5000;
const router = express.Router();
app.use(cors());
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
// 
app.use('/api/signup',require("./routes/signup"));
app.use('/api/login',require("./routes/login"));
app.use('/api/createdocument',require("./routes/createdocument"));
app.use('/api/documents',require("./routes/documents"));
app.use('/api/',require("./routes/updatedocument"));
app.use('/api/',require("./routes/deletedocument"));
app.use('/api/',require("./routes/getdocument"));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
module.exports=router;