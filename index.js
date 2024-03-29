const express=require("express")
const app=express()
const multer=require("multer")
const cors=require("cors")
app.use(express.json())
require("./mongoose")
app.use(cors())
app.use(express.static("public"))
const ImageModel=require("./ecomSchema")
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null,"public/uploads/" );
    },
    filename: (req, file, cb) => {
      cb(null,file.originalname);
    }
  });
  const upload = multer({ storage: storage }).single("pimage");
 app.post("/",(req,resp)=>
 {
    upload(req,resp,(err)=>{
        if(err)
        {
          console.log(err)
        }
        else{
            const newImage=new ImageModel({
                pid:req.body.pid,
                pname:req.body.pname,
                pdesc:req.body.pdesc,
                pprice:req.body.pprice,
                pcat:req.body.pcat,
                pimage:"http://localhost:4000/uploads/"+req.file.filename
            })
             newImage.save()
             resp.send("File Uploaded")
        }
    })
 })
 app.listen(4000)