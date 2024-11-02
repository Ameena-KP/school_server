const multer=require('multer')

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,`image-${Date.now()}-${file.originalname}`)
    }
})

const filefilter=(req,file,cb)=>{
    if(file.mimetype=='image/jpg' || file.mimetype=='image/png' || file.mimetype=='image/jpeg'){
        cb(null,true)
    }
    else{
        cb(null,false)
        cb(new Error("invalid file format...file should be (jpg.png.jpeg"))
    }
}
module.exports=multer({
    storage,filefilter
})
