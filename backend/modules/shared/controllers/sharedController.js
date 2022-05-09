const UserModel = require('../../../models/User')

exports.changePassword =(req,res)=>{
    UserModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,doc)=>{
        if(err){
            res.json(err)
        }else{
            res.status(200).json(doc)
        }
    })

}

exports.getProfileDetails = (req, res) => {
    UserModel.find({ _id: req.params.id }, (err, doc) => {
        if (err) {
            res.status(409).json(err)
        } else {
            res.status(200).json(doc)
        }
    })



}

exports.editUser = (req,res)=> {
    UserModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,doc)=>{
        if(err){
            res.json(err)
        }else{
            res.status(200).json(doc)
        }
    })
}