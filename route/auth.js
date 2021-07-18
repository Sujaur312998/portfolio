const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const authenticate = require("../middleware/authenticate")
const cookieParser = require('cookie-parser')


require('../db/connection')
const User = require('../model/userSchema')

router.use(cookieParser())


router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body


    try {
        if (!name || !email || !phone || !work || !password || !cpassword) {
            return res.status(422).json({ message: "please fillup the all fileds!!!" })
        }
        const userExist = await User.findOne({ email })
        if (userExist !== null) {
            return res.status(422).json({ message: "User already exist!!!" })
        }
        const user = new User({ name, email, phone, work, password, cpassword })

        //heshing password

        await user.save()
        res.status(201).json({ message: " User Registration successfull" })
    } catch (err) {
        console.log(err);
    }
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(422).json({ message: "please fillup the all fileds!!!" })
    } else {
        const userlogin = await User.findOne({ email })

        try {
            if (userlogin !== null) {
                const isMatch = await bcrypt.compare(password, userlogin.password)
                if (isMatch) {
                    const token = await userlogin.generateToken()

                    res.cookie("userLogin", token, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true, secure: true })

                    return res.status(200).json({ message: "User login successful!!!" })
                }
            } return res.status(422).json({ message: "Invaild Action!!!" })

        } catch (err) {
            console.log(err);
        }
    }
})



router.get('/getdata', authenticate, (req, res) => {
    res.send(req.rootUser)
})

router.post('/contact', authenticate, async (req, res) => {
    try {
        const { name, email, phone, message } = req.body
        //console.log(name,email,phone,message);
        if (!name || !email || !phone || !message) {
            return res.status(401).send({ message: "Please filled your message..." })
        }
        const userContact = await User.findOne({ _id: req.userId })

        if (userContact) {
            await userContact.addMessage( {name, email, phone, message} )
            await userContact.save()
            res.status(201).send({message: "Message send!!!"})
        } 

    } catch (error) {
        console.log(error);
    }
})

router.get('/logout',(req, res)=>{
    res.clearCookie("userLogin",{path:"/"})
    res.send({message: "User Logout!!!"})
})



module.exports = router

