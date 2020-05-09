const express = require("express");
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const accessToken = req.body.jwt;
  console.log(accessToken);
  if (!accessToken) {
    return res.status(401).send({ message: "No token" });
  }

  jwt.verify(accessToken, process.env.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Invalid token" });
    }
    console.log(decoded);
    req.user = decoded.user;
    next();
  });
};

module.exports = auth;
