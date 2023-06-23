import express from 'express'
import dotenv from 'dotenv'
import dbConnect from './config/db.js'
import bodyParser from 'body-parser'
import productRoutes from './routes/productRoutes.js'
import categoryRoutes from './routes/categoryRoute.js'
import subCategoryRoute from './routes/subCategoryRoute.js'
import practicalRoute from './routes/practicalRoute.js'
import imageRoute from './routes/imageRoute.js'
import stockRoute from './routes/stuckRoute.js'
import productpracticalRoute from './routes/productpracticalRoute.js'
import basketRoute from './routes/basketRoute.js'
import userRoute from './routes/userRoute.js'
//import fileUpload from 'express-fileupload'
//import cors from 'cors'
dotenv.config()

dbConnect();
//express.json() is a built express middleware that convert request body to JSON.
//express.urlencoded() just like express.json() converts request body to JSON,
// it also carries out some other functionalities like: converting form-data to JSON etc.

const app = express()
//bodyParser
app.use(bodyParser.json());
//app.use(fileUpload());
// برای اینکه سرور  توسط منابع دیگر  قابل دسترسی باشد.
//app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.send('API is running...')
})
//category route
app.use('/api/category', categoryRoutes)

//subcategory route
app.use('/api/subcategory',subCategoryRoute)

//practical route
app.use('/api/practical',practicalRoute)

//image route
app.use('/api/image',imageRoute)

//make the image publicly
//app.use('/a',express.static('/b'));
// Above line would serve all files/folders inside of the 'b' directory
// And make them accessible through http://localhost:3000/a.
app.use("/image",express.static("uploads"));
//stock route
app.use('/api/stock',stockRoute)

//product rouste
app.use('/api/products', productRoutes)

//product-practical rouste
app.use('/api/productpractical', productpracticalRoute)

//basket route
app.use('/api/basket',basketRoute)

//user route
app.use('/api/users',userRoute)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)