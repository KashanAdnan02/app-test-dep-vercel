const express = require("express")
const PORT = process.env.PORT || 3000
const app = express()

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        data: [{
            username: "test",
            email: "test@gmail.com",
            password: "@2378^*!@",
            role: "user"
        },
        {
            username: "test",
            email: "test@gmail.com",
            password: "@2378^*!@",
            role: "user"
        },
        {
            username: "test",
            email: "test@gmail.com",
            password: "@2378^*!@",
            role: "user"
        }]
    })
})

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})