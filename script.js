
let formSection = document.getElementById("form-section");
let src = "https://zo1lu.github.io/home/data.json";
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);


// fetch(src)
//   .then(function(response){
//   //console.log(response)
//   return response.json;
// })
//   .then(function(result){
//   console.log("data:",result);
//   let data
//   for(i=0;i<result.length;i++){
//     const question = data[i].question;
//     const answer = data[i].content;
//     const div = document.createElement("div");
//     div.className = "form";
//     const h3 = document.createElement("h3");
//     h3.className = "question";
//     const p = document.createElement("p");
//     p.className = "answer";
//     h3.innerText = question;
//     p.innerText = answer;
    
//     div.appendChild(h3);
//     div.appendChild(p);
//     formSection.appendChild(div);
// }
// })
