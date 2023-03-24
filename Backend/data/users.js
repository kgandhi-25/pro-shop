import bcrypt from "bcryptjs"

const users =[
    {
        name: "admin user",
        email: "test@test.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true

    },
    {
        name: "john doe",
        email: "pavan@gmail.com",
        password: bcrypt.hashSync("123456", 10)
    },
    {
        name: "jack doe",
        email: "kalyan@gmail.com",
        password: bcrypt.hashSync("123456", 10)
    }
]


export default users