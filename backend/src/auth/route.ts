import express from "express"
import { loginUser, registerUser } from "./model.js"
import { createHash } from "crypto"

const router = express.Router()

function hash(input: string){
    return createHash('sha256').
           update(input,'utf8').
           digest('hex')
}

router.post('/register', async (req, res) => {
    const {name, password} = req.body
    const hashedPassword = hash(password)
    await registerUser(name, hashedPassword)
    res.send("OK")
})

router.post('/login', async (req,res) => {
    const {name, password} = req.body
    const hashedPassword = hash(password)
    const result = await loginUser(name, hashedPassword)
    
    if (result.rows.length === 0) {
        res.send("User not found");
    } else {
        res.send("Successfully login")
    }
})

export default router