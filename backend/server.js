import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import multer from "multer";
import cartRouter from './routes/CartRouter.js';
import path from 'path'
import orderRouter from './routes/orderRoute.js';

//App Config
const app = express();
const port = process.env.PORT || 5000
app.use(cors());
connectDB();

const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})



const upload = multer({ storage: storage });


//endpoint for uploading images
app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})


//middlewares
app.use(express.json());
app.use(cors());


// api endpoints

app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)


// creating API 

app.get("/", (req, res) => {
    res.send("Express is on")
})


app.listen(port, (error) => {
    if (!error) {
        console.log("Server running on port:" + port)
    }
    else {
        console.log("Error:" + error)
    }
})
