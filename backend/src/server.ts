import express from "express"
import auth from "./auth/route.js"

const app = express()

app.use(express.json())
app.use(auth)

const port = process.env.PORT || 3000

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
})