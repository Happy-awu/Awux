/*
This is Awux.js
By Awu
-------
Allow Xhr(GET, POST HEAD(maybe it can't run)), Fetch(GET, POST)(allow password, add new Promise)
-------
Awu Awu Awu Awu Awu Awu Awu Awu !
*/

//xhr request & send
function Xget(url){
    var xhr = new XMLHttpRequest();
    var T=3000;

    xhr.timeout = T;

    xhr.ontimeout = function(){
        console.log("Timeout "+T+"ms");
    }

    xhr.onerror = function(err){
        console.log("Error: "+err);
    }

    xhr.onreadystatechange = function(){
        console.log("From onreadystatechange: "+xhr.readyState);
        console.log("From onreadystatechange: "+xhr.status);
        if (xhr.status === 4 && xhr.readyState === 200){
            console.log("Request text: "+xhr.responseText);
        }else{
            console.log("Request status: "+xhr.statusText);
        }
    }

    xhr.open("GET", url, true);
    xhr.send();
}

function Xpost(url, data){
    var xhr = new XMLHttpRequest();
    var T=3000;

    xhr.timeout = T;

    xhr.ontimeout = function(){
        console.log("Timeout "+T+"ms");
    }

    xhr.onerror = function(err){
        console.log("Error: "+err);
    }

    xhr.onreadystatechange = function(){
        console.log("From onreadystatechange: "+xhr.readyState);
        console.log("From onreadystatechange: "+xhr.status);
        if (xhr.status === 4 && xhr.readyState === 200){
            console.log("Request text: "+xhr.responseText);
        }else{
            console.log("Request status: "+xhr.statusText);
        }
    }

    xhr.open("POST", url, true);
    xhr.setRequestHeader('Conten-Type', 'application/x-www-form-urlencoded');
    xhr.send(data);
}

function Xhead(url){
    var xhr = new XMLHttpRequest();
    var T=3000;

    xhr.timeout = T;

    xhr.ontimeout = function(){
        console.log("Timeout "+T+"ms");
    }

    xhr.onerror = function(err){
        console.log("Error: "+err);
    }

    xhr.onreadystatechange = function(){
        console.log("From onreadystatechange: "+xhr.readyState);
        console.log("From onreadystatechange: "+xhr.status);
        if (xhr.status === 4 && xhr.readyState === 200){
            console.log("Request text: "+xhr.responseText);
        }else{
            console.log("Request status: "+xhr.statusText);
        }
    }

    xhr.open("Head", url, true);
    xhr.send();
}

//fetch request & send
function judge(type, res){
    if(type === "text"){
        return res.text();
    }
    else if(type === "json"){
        return res.json();
    }
    else if(type === "blob"){
        return res.blob();
    }
    else if(type === "arryBuffer"){
        return res.arrayBuffer();
    }
    else if(type === "formData"){
        return res.formData();
    }
    else{
        return res.text()
    }
}

async function Fget(url, type="text", auth=null){
    var result=await fetch(url, {
    		method : "GET",
         header : {
         	"authorization" : auth
         }
    })
        .then((res) => {
            if(!res.ok){
                throw new Error("Network response is not ok");
            }
            return judge(type, res);
        })
        .catch((err) => {
            console.error("Fetch Error:", err);
        })
     return result;
}

async function Fpost(url, data, type="text", auth=null){
    var result=await fetch(url, {
        body: data,
        method: "POST",
        headers:{
            'Content-Type' : "application/x-www-form-urlencoded",
            "authorization" : auth
        }
    })
        .then((res) => {
            if(!res.ok){
                throw new Error("Network response is not ok");
            }
            return judge(type, res);
        })
        .catch((err) => {
            console.error("Fetch Error:", err);
        })
    return result;
}
