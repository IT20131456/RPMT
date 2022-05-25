const express = require("express");
const router = express.Router();
const MarkingSchem = require("../models/markingSchem");
const MarkingSchemTitle = require("../models/markingSchemaTitle");

// Save Marking Schem Title

router.post("/add/markingTitle", (req, res) => {
    let newMarkingTitle = new MarkingSchemTitle(req.body);
  
    newMarkingTitle.save((err, title) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        success: "Hotel Details Created Succefully",
        saveTitle: title.id
      });
    });
  });

//save Marking Schem Details

router.post("/add/marking", (req, res) => {
  let newMarking = new MarkingSchem(req.body);

  newMarking.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Hotel Details Created Succefully",
    });
  });
});

//get Marking Schem Details

router.get("/get/markings", (req, res) => {
    MarkingSchem.find().exec((err, markingDetails) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        success: true,
        existingMarkingDetails: markingDetails,
      });
    });
  });

  //get Marking Schem Details by ID

  router.get("/markings/get/:id", (req, res) => {
    let titletID = req.params.id;
  
    MarkingSchem.find({markingSchemTitleID: titletID}, (err, markingCriteria) => {
      if (err) {
        return res.status(400).json({ success: false, err });
      }
      return res.status(200).json({
        success: true,
        existingMarkingCriteria: markingCriteria,
      });
    });
  });

  //delete Marking Criteria Details

router.delete("/criteria/delete/:id", (req, res) => {
    MarkingSchem
      .findByIdAndRemove(req.params.id)
      .exec((err, deletedCriteria) => {
        if (err)
          return res.status(400).json({
            message: "Deleted unsuccesful",
            err,
          });
  
        return res.json({
          message: "Deleted Succesfull",
          deletedCriteria,
        });
      });
  });
  
module.exports = router;