const mongoose=require("mongoose")
const ImageSchema=mongoose.Schema({
    pid:Number,
    pname:String,
    pdesc:String,
    pprice:Number,
    pcat:String,
    pimage:String
})
module.exports=mongoose.model("products",ImageSchema)
