const express = require("express")
const PORT = process.env.PORT || 3000
const app = express()
const data = [{
    username: "test",
    email: "test@gmail.com",
    password: "@2378^*!@",
    role: "user",
    id: 1
},
{
    username: "test",
    email: "test@gmail.com",
    password: "@2378^*!@",
    role: "user",
    id: 2
},
{
    username: "test",
    email: "test@gmail.com",
    password: "@2378^*!@",
    role: "user",
    id: 3
}]
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        data
    })
})


app.get("/getsingle/:id", (req, res) => {
    const { id } = req.params

    const find = data.find((item) => id == item.id)

    res.status(200).json({
        succces: true,
        data: find
    })
})

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})