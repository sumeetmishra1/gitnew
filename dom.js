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
var li =document.getElementsByTagName('li');
li[1].textContent ='hello';
 for (let index = 0; index < li.length; index++) {
    li[index].style.backgroundColor='yellow';
    li[index].style.fontWeight='bold';
 }
 
