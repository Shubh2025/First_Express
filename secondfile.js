
function logResponseBody(jsonbody){

    console.log(jsonbody);
}

function callbackFcn(result){
    result.json().then(logResponseBody);
}

var sendObj={
    method: "GET"
}

fetch("http://localhost:3000/api?counter=7",sendObj).then(callbackFcn);