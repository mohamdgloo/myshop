import mongoose from "mongoose"
import {} from 'dotenv/config' 


// const connectDB=async()=>{
//     try{
//         const conn=await mongoose.connect(process.env.MONGO_URL,{
//             useUnifiedTopology:true,
//             useNewUrlParser:true,
            
//              //   these are options to ensure that the connection is done properly
//         })
//         console.log(process.env.MONGO_URL);
//         console.log(`MongoDB connected :${conn.connection.host}`)
//     }catch(error){
//         console.error(`Error:${error.message}`);
//         process.exit(1)
//     }
// }
// external imports

// if (process.env.NODE_ENV === 'development') {
//     require('dotenv').config();
//   }
// import {} from 'dotenv/config' // module
async function dbConnect() {
  // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
  mongoose
    .connect(
        process.env.MONGO_URL,
      {
        //   these are options to ensure that the connection is done properly
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
      }
    )
    .then(() => {
      console.log("Successfully connected to MongoDB!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB!");
      console.error(error);
    });
}

export default dbConnect