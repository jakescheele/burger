var express = require('express');

// 4. Create the `router` for the app, 
var router = express.Router();

var burger = require('../models/burger');

// Routes

router.get('/', function(req, res){
    burger.all(function(data){
        res.render('index', {burgers: data})
    })
});

router.post('/', function(req,res){
    burger.create([
        req.body.burger_name
    ], function(result) {
        res.json({id:result.insertId})
    })
});

router.put('/', function(req, res){

});

router.delete('/api/burgers/:id', function(req, res) {

});


// and export the `router` at the end of your file.
module.exports = router;