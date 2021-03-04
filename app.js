 document.getElementById('button').addEventListener('click',getData);

document.getElementById('button1').addEventListener('click',getJsonData);

document.getElementById('button2').addEventListener('click',getJsonArray);

document.getElementById('button3').addEventListener('click',getDataFromApi);

//  using fetch api 
//  function getData(){

//     fetch('data.txt').then(function(res){
//         return (res.text());
//     })
//     .then(function(data){

//      document.getElementById('output').innerHTML=data;
//     })
//  }
// // using xml Object


// function getJsonData(){

//     fetch('js.json').then(function(ele){
        
//    return ele.json();

//     })
//     .then (function(data){

//         console.log(data);



//     })
   
// }
function getData(){

    const xml = new XMLHttpRequest();

    xml.open('GET','data.txt',true);

    xml.onload = function(){

        if(this.status===200){
            console.log(this.responseText);
            document.getElementById('output').innerHTML=this.responseText;
        }
    }

    xml.send();


}

function getJsonData(e){

    const xml = new XMLHttpRequest();

    xml.open('GET','customer.json',true);

     xml.onload = function(){

        if(this.status===200){
            const data = JSON.parse(this.responseText);

            console.log(data);

            const out= `
            <ul>
            <li>Title: ${data.title}</li>
            
            </ul>`;
            document.getElementById('output').innerHTML=out;
        }

        
     }

    xml.send();


}

function getJsonArray(){

    const xml = new XMLHttpRequest();

    xml.open('GET','customers.json',true);

    xml.onload=function(){
        if(this.status===200){

            const data = JSON.parse(this.responseText);

            console.log(data);

            let  output='';

            data.forEach(function(data){
                output +=`
                <ul>
                <li>ID:${data.id}</li>
                <li>Name:${data.Name}</li>
                <li>age:${data.age}</li>
                </ul>
                `


                
            });

            document.getElementById('output').innerHTML=output;
        }


}

    xml.send();
}

function getDataFromApi(){

 const xml = new XMLHttpRequest();

 xml.open('GET','https://api.github.com/users',true);

 xml.onload=function(){

    if(this.status===200){

        

        const users= JSON.parse(this.responseText);
        console.log(users);
            let output ='';
        users.forEach(function(user){

            output+= `
            <ul>
            <li>User:${user.login}</li>
            
            
            </ul>`


        })
        document.getElementById('output').innerHTML=output;
    }
 }


 xml.send();


}