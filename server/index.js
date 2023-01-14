const exp = require("express")
const app = exp()
const mongoose = require("mongoose")
const Usermodel = require("./models/User")
const Hotelmodel = require("./models/Hotel")
// const router  = require("./route/auth")
const cors = require('cors')
const bodyparser = require('body-parser')
// const Hotelmodel = require("./models/Hotel")
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
const stripe = require('stripe')("sk_test_51MBb38SAkeZelpV3HpeUfiqz28lWLOdzybl4Uj0aOxCdF2rtVVoacFWZb7oni9JJk5NhhEobml3gUBC2ozi53Juc00w3CK39IW")
const uuid =require('uuid').v4
app.use(exp.json())
app.use(cors())


mongoose.connect("mongodb://localhost:27017/mernstack"
  ).then(()=>{console.log("mongoose is connected")})
// app.use("/auth",router)
app.get("/getuser", (req , res) =>{
    Usermodel.find({}, (err,result) =>{
        if(err){
            res.json(err)
        }
        else{
            res.json(result)
        }
    });
});
app.post("/post",async (req,res) =>{
    const user = req.body
    const newUser = new Usermodel(user)
    let e = await Usermodel.findOne({Email:user.Email})
    let e1 = await Usermodel.findOne({Password:user.Password})
    if(e){
        return res.json({status:"user already"})
    }else{
        await newUser.save(); 
        res.json(user)
    }
    if(e1){
        return res.json({status:"Invalid"})
    }
    else{
        return res.json({status:"proceed"})
    }

})






app.post('/checkout',async (req,res)=>{
    hotel = new Hotelmodel(req.body)
    await hotel.save()
    return res.json({status:"success"})
})
app.get("/getlogin",async (req,res) =>{
    const user = req.body
    // const newUser = new Usermodel(user)
    // let e = await Usermodel.findOne({Email:user.Email})
    let e1 = await Usermodel.findOne({Password:user.Password})
    // if(e){
    //     return res.json({status:"user already"})
    // }else{
    //     await newUser.save(); 
    //     res.json(user)
    // }
    if(e1){
        return res.json({status:"valid"})
    }

    
})


app.listen(4000,(req,res)=>{
    console.log("server connected")
})