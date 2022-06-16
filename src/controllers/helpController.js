const helpDetails = (req,res)=>{
     return res.status(200).send({
        message:"Succesfully hitting the help API",
        success:true,
        data:{
            contact:"+91XXXXXXXX"
        }
     })
}
module.exports={
    helpDetails
}