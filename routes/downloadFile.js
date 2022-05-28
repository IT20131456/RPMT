const express = require("express");
const router = express.Router();

router.post('/file/download', (req,res)=>{

    const filename = req.body.fileName;
    //console.log(filename);

    res.download(`./frontend/public/uploads/${filename}`);

});

module.exports = router;
 
