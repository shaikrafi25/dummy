// const para=document.getElementById("para");
// console.log(para);
// para.style.color="red";
const contain=document.getElementsByClassName("container");
console.log(contain);
contain[0].style.backgroundColor = "white";
contain[1].style.backgroundColor="white";
const button=document.getElementsByTagName("button");
button[0].style.color="red";
button[1].style.color="blue";

document.querySelector("h1").style.color="purple"

const container=document.querySelectorAll(".container");
container.forEach((item)=>
{
    item.style.color="red";
}
)
const textVisible=document.getElementById("textVisible");
{
    textVisible.textContent="this is hacked data"
    textVisible.style.color="gold"
}
const innertext=document.querySelector('#innertext');
{
    innertext.innerHTML=`
    <h1>this is inner text</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni cumque totam quam maiores dolorum numquam quae fugiat illo. Illum nisi suscipit qui beatae vel laboriosam distinctio eligendi quibusdam ut. Modi.</p>
    <img src="../../image/image.jpg" alt="beautiful cat">`
}
{
const mainCard=document.getElementById("mainCard")
const card=document.createElement('div')
card.setAttribute('class','carddata')

card.innerHTML="<h1>this is the append data</h1>"

mainCard.appendChild(card)
}

const alertBtn=document.getElementById("alertBtn")
addEventListener('click',()=>{
  const name="adam"
  alert(`hello,${name}`)
})
