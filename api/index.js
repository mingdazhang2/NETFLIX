const express = require("express");
const app =express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");


dotenv.config();
mongoose.connect(process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
    // useCreateIndex: true
  })
  .then(()=>console.log("DB Connection Success!"))
  .catch((err)=>console.log("Error:"+err));
//Accpet json data
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.listen(8800,()=>{
    console.log("backend server is running")
})