import bcrypt from 'bcryptjs'
const users=[
    {
        firstName:'admin',
        lastName:'ادمین زاده',
        phone:'09106614387',
        email:'m.sokhango7@gmail.com',
        password:bcrypt.hashSync('123456,10'),
        isAdmin:true
    },
    {
        firstName:'علی',
        lastName:'سخنگو',
        phone:'09172351234',
        email:'alisokhan7@gmail.com',
        password:bcrypt.hashSync('123456,10'),
    },
    {
        firstName:'مجتبی',
        lastName:'پرور',
        phone:'09173679403',
        email:'moj@gmail.com',
        password:bcrypt.hashSync('123456,10'),
    },
]
export default users