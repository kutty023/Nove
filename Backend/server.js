const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Server is running successfully")
})
app.get('/home', (req, res) => {
    res.send("Hey there, it's me Arthi ")
})

if (require.main === module){
    app.listen(port, () => {
        console.log("Server is running on port 3000")
    })
}