
var MongoClient = require('mongodb').MongoClient;
var Url = 'mongodb+srv://Arifdemo:Ez1LWKiC5THVSzFF@cluster0.ldypdcb.mongodb.net/?retryWrites=true&w=majority';

MongoClient.connect(Url,function(error,insertdata){
   if(error){
       console.log('server not connected ');
   }else{
       console.log('server  connected serccess ');
       //Mongodbdatsindert (insertdata)
       findData (insertdata)
   }
})


function findData(insertdata){
    var databse = insertdata.db('School');
    var collection=databse.collection('Students');
    var projec={};
    var projectionData={projection:{name:""}}
    collection.find(projec,projectionData).toArray(function(err,res){
        console.log(res);
    })
}










// function findWithoutcondition (insertdata){
//     var databse = insertdata.db('School');
//     var collection = databse.collection('Students');
//    var  projec= {};
//     var findprojection = {projection:{name: ""}};
//     collection.find(projec,findprojection).toArray(function(err,res){
//         console.log(res);
//     });

// }