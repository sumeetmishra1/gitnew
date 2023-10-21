//console.dir(document)
//console.log(document.URL);
//console.log(document.all)
//document.all[20].textContent='sumit';

//console.log(document.getElementById('header-title'));
var headtitle =document.getElementById('header-title');
//headtitle.textContent = "hello";
//eadtitle.innerHTML ='Goodbye';
// var header =document.getElementById('main-header');
// header.style.borderBlock='solid 3px #000';
// var items =document.getElementById('title');
// items.style.fontWeight='bold';
// items.style.color='green';
// var items =document.getElementsByClassName('list-group-item');
// console.log(items[1]);
// items[1].textContent ='hello';
// for (let index = 0; index < items.length; index++) {
//     items[index].style.backgroundColor='yellow';
//     items[index].style.fontWeight='bold';
// }
// items[2].style.backgroundColor='green';
// var li =document.getElementsByTagName('li');
// li[1].textContent ='hello';
//  for (let index = 0; index < li.length; index++) {
//     li[index].style.backgroundColor='yellow';
//     li[index].style.fontWeight='bold';
//  }
// var header = document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';
// var input =document.querySelector('input[type="submit"]');
// input.value='hello world';
// var item=document.querySelector('.list-group-item');
// item.style.color='red';
// var secitem=document.querySelector('.list-group-item:nth-child(2)');
// secitem.style.color='green';
// var thirdItem =document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display='none';
//Query selector all
var titles=document.querySelectorAll('.title');
console.log(titles);
var items=document.querySelectorAll('li');
items[1].style.color='green';
titles[0].textContent='Add more items';
var odd =document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='#ccc';
}


