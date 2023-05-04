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

dotenv.config()

dbConnect();

// TODO: search what is express
const app = express()
//bodyParser
app.use(bodyParser.json());
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