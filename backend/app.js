const express = require('express');
var request = require('request');
const app = express();
const port = 5000;


app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api', (req, res) =>{
    request('http://medata.gov.co/api/action/datastore/search.json?resource_id=70fe42d2-ac37-4a41-b7a7-e43804a5ca14&limit=50',
    function(error,response,body ){
        if (!error && response.statusCode == 200){
           var parsedBody = JSON.parse(body);
         //  var valor = parsedBody["records"]["valor"];
           
            res.send({body});
        }
    })

});

app.listen(port, ()=> console.log(`Example app listening on port ${port}`));
