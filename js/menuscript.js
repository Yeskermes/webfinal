let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}
function saveData()
{
let number,food,addr;
number=document.getElementById("number").value;
food=document.getElementById("food").value;
addr=document.getElementById("addr").value;

let order_records=new Array();
order_records=JSON.parse(localStorage.getItem("orders"))?JSON.parse(localStorage.getItem("orders")):[]
{
  order_records.push({
  "number":number,
  "food":food,
  "addr":addr
})
  alert("Your order was accepted. Wait for us!!!");
localStorage.setItem("orders",JSON.stringify(order_records));
}

}