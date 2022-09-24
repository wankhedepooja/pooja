
const fs=require('fs');


var counter=1;
function write(){
    counter++;
    var message="welcome"+ counter;
    fs.writeFile("hello.txt",message,()=>{
        console.log('conent is written in file successfully')
    });
}

function read(){
    fs.readFile("hello.txt",
                (err, data)=>{
                            var str=data.toString();
                            console.log(data)
    });
}
setInterval(write,5000);
setInterval(read,10000);