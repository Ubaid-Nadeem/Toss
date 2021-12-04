var tail = document.getElementById('tail');
var head = document.getElementById('head');
var arry = [tail,head]

var btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
    btn.style.display='none'
  var toss = document.getElementById('toss');
  toss.style.display='block'  
  
setTimeout(starttoss,1500)
})

var starttoss = ()=>{
    var randomnumber = Math.floor( Math.random()*2);
    console.log(randomnumber)
arry[randomnumber].style.display='inline-block'
var toss = document.getElementById('toss');
toss.style.display='none'

var ribin = document.getElementById('ribin');
ribin.style.display='inline-block'
var toosagain = document.getElementById('toosagain');
toosagain.style.display='block'
}
var again = document.getElementById('again');
again.addEventListener('click',()=>{
location.reload()
})