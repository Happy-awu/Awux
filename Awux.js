/*
This is Awux.js
By Awu
-------
Awu Awu Awu Awu Awu Awu Awu Awu !
*/
function makeurl(url, data){
    if(!data){
        return url;
    }
    return url+"?"+data;
}

//xhr request & send
function Xget(url, data=null){
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

    xhr.open("GET", makeurl(url, data), true);
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

function Xhead(url, data=null){
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

    xhr.open("Head", makeurl(url, data), true);
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

function Fget(url, data=null, type="text"){
    var ctrler = new AbortController();
    var signal=ctrler.signal;
    fetch(makeurl(url, data), {signal})
        .then((res) => {
            if(!res.ok){
                throw new Error("Network response is not ok");
            }
            console.log(judge(type, res))
        })
        .catch((err) => {
            console.error("Fetch Error:", err);
        })
    setTimeout(() => ctrler.abort(), 3000);
}

function Fpost(url, data, type="text"){
    var ctrler = new AbortController();
    var signal=ctrler.signal;
    fetch(url, {
        signal,
        body: data,
        method: "POST",
        headers:{
            'Contenet-Type' : "application/x-www-form-urlencoded"
        }
    })
        .then((res) => {
            if(!res.ok){
                throw new Error("Network response is not ok");
            }
            console.log(judge(type, res))
        })
        .catch((err) => {
            console.error("Fetch Error:", err);
        })
    setTimeout(() => ctrler.abort(), 3000);
}