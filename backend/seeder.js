// // import mongoose from 'mongoose';
// // import dotenv from 'dotenv';
// // import users from './data/User.js';
// // import Products  from './data/Products.js';
// // import User from './models/UserModel.js';
// // import Product from './models/productModel.js';
// // import connectDB from './config/db.js'

// // dotenv.config()

// //  connectDB()

// // const importData = async () => {
// //   try {
// //     await Product.deleteMany()
// //     await User.deleteMany()

// //     const createdUsers = await User.insertMany(users)

// //     const adminUser = createdUsers[0]._id

// //     const sampleProducts = Products.map((product) => {
// //       return { ...product, user: adminUser }
// //     })

// //     await Product.insertMany(sampleProducts)

// //     console.log('Data Imported!')
// //     process.exit()
// //   } catch (error) {
// //     console.error(`${error}`)
// //     process.exit(1)
// //   }
// // }

// // const destroyData = async () => {
// //   try {
// //     await Product.deleteMany()
// //     await User.deleteMany()

// //     console.log('Data Destroyed!')
// //     process.exit()
// //   } catch (error) {
// //     console.error(`${error}`)
// //     process.exit(1)
// //   }
// // }

// // if (process.argv[2] === '-d') {
// //   destroyData()
// // } else {
// //   importData()
// // }


// //*****************************************************8 */

// import Products from "./data/Products";
// import mongoose from 'mongoose';
// import Prod from './models/ProductModel.js';

// import connectDB from './config/db.js'
// let resultData;
// let saveCounter = 0;
// await connectDB();
// const response = await fetch(Products);
// const json = await response.json();
// resultData = [...json];

// Products.map(async Product => {
// try{
//   console.log("1111");
//    for (let i = 0; i < resultData.length; i++) {
//       let product = new Prod({
//          user: resultData[i]. user,
//          subcategory: resultData[i]. subcategory,
//          textile: resultData[i]. textile,
//          description: resultData[i]. description,
//          gender: resultData[i].gender ,
//          stationary: resultData[i].stationary ,
//          thickness: resultData[i]. thickness,
//          price: resultData[i].price ,
//          width: resultData[i]. width,
//          images: resultData[i]. images,
//          timestamps:resultData[i].timestamps ,
//            })
//    product.save(() => {
//       console.log("saved" + product)
      
//       saveCounter++;
  
//       if (saveCounter === resultData.length) {
//          mongoose.disconnect()
//          .then(() => console.log("saved succesfully and mongodb   disconnected"))
//          .catch(error => console.log(error));
//          }
//       });
//    }
//    console.log("2222");

// } catch (error) {
//    console.log(error);
// }
// })