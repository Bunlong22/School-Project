const body= document.body;
// body.append("Hello world");
var h3 =document.createElement("h3");
// h3.innerText="Hi bro";
// how to manipulate html tag in js but it is not secure
// h3.innerHTML="<li>List</li>";
// body.append(h3);
// textContent= in console it print everything including spaces, 
// innerText= print like it display on browser
const hi =document.querySelector("#hello");
const bye= document.querySelector("#bye");
hi.removeChild(bye);