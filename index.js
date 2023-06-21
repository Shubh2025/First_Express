const express = require('express')
//var bodyParser = require('body-parser')
const app = express()
const port = 3000


//app.use(bodyParser.json());

function calculateSumOf(num){

    var sum=0;

    for(let i=0;i<num;i++){
        sum=sum+i;
    }
    return sum;
}

function calculateMul(num){
    var cal=1;

    for(let i=1;i<=num;i++){
        cal=cal*i;
    }

    return cal;
}

function handleCalculation(req,res){
    console.log(req.query);
   var counter=req.query.counter;

   var sumva=calculateSumOf(counter);
   var mulva=calculateMul(counter);

   var ansObj={
    sum:sumva,
    mul:mulva
   }

   res.send(ansObj);
}

app.get('/api',handleCalculation)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



// var ans=calculateSumOf(100);
// console.log(ans);