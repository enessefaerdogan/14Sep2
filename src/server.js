console.log("Hello world");// yazma
// en basitinden | node server.js |
// şeklinde çalıştırma sağlarız

// npm sitesinden expres indiriyoruz
// 1 npm init -> yes -> package.json geldi
// 2 npm install express

// Initialization | kısmı
const express = require('express');
const app = express();

// mongodb database açtık ve mongoose indiriyoruz
// 3 npm install mongoose
const mongoose = require('mongoose');
// bağlarken connect kısmından linki al paranteze yapıştır
// <password> kısmı aynen silinip şifre yazıldı
// "...mongodb.net/notesdb" notesdb olarak yazdık

const Note = require('./models/Note');// modeli adres verdik ve çağırdık, tanımladık


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// true -> Nesed
app.use(bodyParser.json());


mongoose.connect
("mongodb+srv://esefaerd:Enessefa.1@cluster0.vqfjubj.mongodb.net/notesdb")
.then(function(){

    // ilk metod get yazdık
// App Routes | kısmı
app.get("/", function(req, res){

    res.send("This is the home page");
});

const noteRouter = require('./routes/Note');
app.use("/notes", noteRouter);// /notes kısmını silicez routesden


/*app.post("/notes/list", async function(req, res){
   // metod asenkron olmalı
   // yoksa hata alınır
    var notes = await Note.find({ userid: req.body.userid });
    res.json(notes);
});*/

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
 /*app.post("/notes/list/userid", async function(req, res){
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

app.post("/notes/add", async function(req, res){
    
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


 app.post("/notes/delete", async function(req, res){

    await Note.deleteOne({ id: req.body.id });

    const response = { message: "Note Deleted" + 'id:' + req.body.id};
    res.json(response);

 });*/

});



// Starting PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
    console.log("Server started at PORT: " + PORT);
});








// Video2 - MongoDb işlemleri
// Yeni bir proje açıldı
// yeni bir database açıldı ( cloud enverionment seçilir )
// (shared -> aws-> isim ver -> )


// Video3 - Detaylar
// daha kullanışlı olduğu için nodemon indirildi
// detaylar anlık olarak sitede değişiyor çünkü
// npm install -g nodemon
// nodemon server.js şeklinde çalıştırma yapılır
// package içine girilip "scripts" içine "dev" : "nodemon server.js" eklendi
// npm run dev yaptı ve çalıştırdı
// src adlı dosya açtık
// içine server.js ekledik
// scripts içindeki start kısmına "node src/server.js" yazdık
// scripts içindeki nodemon kısmına "nodemon src/server.js" yazdık
// src içine models açıldı , "Note.js" açıldı


// postmanda dönen body'yi parse etmek için body parser kuruyoruz!
// "npm install body-parser" ile kurduk

// metodlar postlaştırılıp , postmande denenip paramslar body ile değiştirildikten sonra
// clean code yazmak adına metodlar routes dosyası içerisine alınıyor 
// yeni dosyada express tanımlandı
// router express içinden çekilip tanımlandı
// metod başlarındaki "app" "router" ile değiştirildi
// dışarda yani burada da kullılabilsin diye exportlandı
// note modeli importlandıki aşşada demesin bu Note.find() ws nerde bu Note


// Video4
// gite yükleme aşamasındayız
// git init yazılır
// .gitignore adlı yeni dosya açıldı
// içine node_modules yazıldı
// git add .

