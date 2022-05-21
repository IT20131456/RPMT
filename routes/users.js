const express = require("express");
const mongoose = require("mongoose");
const Users = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

process.env.SECRET_KEY = "secret2022";

//user registration with password encryption
router.post("/user/registration", (req, res) => {
  const current = new Date();
  const grpId = "";
  let userData = {
    idNumber: req.body.idNumber,
    name: req.body.name,
    email: req.body.email,
    groupId: grpId,
    type: req.body.type,
    password: req.body.password,
    dateRegistered: current,
  };

  Users.findOne({
    idNumber: req.body.idNumber,
  })
    .then((user) => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          // console.log("bcrypt")
          Users.create(userData)
            .then((res) => {
              // console.log("then")

              res
                .status(200)
                .json({
                  success: "Registered successfully",
                })
                .end();
            })
            .catch((err) => {
              // console.log("catch")
              res
                .status(400)
                .send("error" + err)
                .end();
            });
        });
      } else {
        res
          .status(400)
          .json({
            error: "Your ID number is already registered",
          })
          .end();
      }
    })
    .catch((err) => {
      res.send("error" + err);
    });
});

//user login with jsonwebtoken
router.post("/user/login", (req, res) => {
  Users.findOne({
    idNumber: req.body.idNumber,
  })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const payload = {
            _id: user._id,
            idNumber: user.idNumber,
            name: user.name,
            email: user.email,
            groupId: user.groupId,
            type: user.type,
            dateRegistered: user.dateRegistered,
          };
          const userToken = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440,
          });
          res.send(userToken);
        } else {
          res.json({ error: "Please check your password and try again" });
        }
      } else {
        res.json({ error: "ID number is not registered in the system" });
      }
    })
    .catch((err) => {
      res.send("error" + err);
    });
});

//user profile
router.get("/user/profile", (req, res) => {
  var decodedToken = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );

  Users.findOne({
    _id: decodedToken._id,
  })
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.send("User does not exist");
      }
    })
    .catch((err) => {
      res.send("Error" + err);
    });
});

// --------------------------------for admin-------------------------------------------------
//get a specific user
router.get("/user/:id", (req, res) => {
  let userId = req.params.id;

  Users.findById(userId, (err, user) => {
    if (err) {
      return res.status(404).json({
        success: false,
        err,
      });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  });
});

//get users
router.get("/users", (req, res) => {
  Users.find().exec((err, users) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingUsers: users,
    });
  });
});

//update user
router.put("/user/update/:id", (req, res) => {
  Users.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        success: "Updated successfully",
      });
    }
  );
});

//delete user
router.delete("/user/delete/:id", (req, res) => {
  Users.findByIdAndDelete(req.params.id).exec((err, deletedUser) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    return res.json({
      message: "Deleted succesfully",
      deletedUser,
    });
  });
});

module.exports = router;
