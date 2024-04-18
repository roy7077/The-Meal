const express=require('express');
const authRoutes=require('./Routes/authRoutes');
const {dbConnect}=require('./Config/dbConnect');
const fileUpload=require('express-fileupload');
const cors=require('cors');
require('dotenv').config();

const app=express();

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
app.use(express.json());
app.use(cors());

app.use('/api/v1',authRoutes);


const PORT=process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log("Server is running at port ",PORT);
})

dbConnect();
