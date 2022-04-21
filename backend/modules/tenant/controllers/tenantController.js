const rentDetailsModel = require('../../../models/rentDetails')


exports.getAllRentDetailsTenent= (req,res)=>{
         rentDetailsModel.find({},(err,doc)=>{
             if(err){
                    res.send(err)
             }else{
                 res.status(200).json({doc})
             }
         })
}