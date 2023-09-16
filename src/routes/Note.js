const express = require('express');
const router = express.Router();

const Note = require('./../models/Note');// note modeli importlandıki
// aşşada demesin bu Note.find() ws nerde bu Note

// normalde "/notes/list" artık "/list"
router.post("/list", async function(req, res){
    // metod asenkron olmalı
    // yoksa hata alınır
     var notes = await Note.find();
     res.json(notes);
 });
 
 //website bazlı arama
 // userid bazlı arama
 /*app.get("/notes/list/:userid", async function(req, res){
     // metod asenkron olmalı
     // yoksa hata alınır
      var notes = await Note.find(
         {
             userid: req.params.userid
         }
      );
      res.json(notes);
      // dönen notesleri json yap göster
  });*/
  router.post("/list/userid", async function(req, res){
     // metod asenkron olmalı
     // yoksa hata alınır
      var notes = await Note.find(
         {
             userid: req.body.userid
             // postman veya genel bazlı arama
         }
      );
      res.json(notes);
      // dönen notesleri json yap göster
  });
 
  router.post("/add", async function(req, res){
     
     // silmek içinse
     // await Note.deleteOne({ id: req.params.id eğer metoddan geliyorsa yoksa elleyse req.body.id });
 
      const newNote = new Note({
         // id: "0001", elle girerken
         id: req.body.id,
         userid: req.body.userid,
         title: req.body.title,
         content: req.body.content// işte bunlar postmanden ws gelicek
      });
      await newNote.save();
      
      const response = { message: "New Note Created!"};
 
      res.json(response);
  });
 
 
  router.post("/delete", async function(req, res){
 
     await Note.deleteOne({ id: req.body.id });
 
     const response = { message: "Note Deleted" + 'id:' + req.body.id};
     res.json(response);
 
  });

  module.exports = router;