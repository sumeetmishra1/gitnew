//console.dir(document)
//console.log(document.URL);
//console.log(document.all)
//document.all[20].textContent='sumit';

//console.log(document.getElementById('header-title'));
//var headtitle =document.getElementById('header-title');
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
// var titles=document.querySelectorAll('.title');
// console.log(titles);
// var items=document.querySelectorAll('li');
// items[1].style.color='green';
// titles[0].textContent='Add more items';
// var odd =document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='#ccc';
// }
//var itemList =document.querySelector('#items');
//parent node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode);
//parent element
//console.log(itemList.parentElement);
//itemList.parentNode.style.backgroundColor='#f4f4f4';
//console.log(itemList.parentNode.parentNode);
//Child node
//console.log(itemList.childNodes);
//console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='hello';
// itemList.lastElementChild.textContent='hello4';
//nextsibling
//console.log(itemList.nextElementSibling);
//previoussiblin
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.fontWeight='bold';
//create ddiv
//var newdiv=document.createElement('div');
//newdiv.className='hello';
//newdiv.id='hello1';
//newdiv.textContent='helloooooooooooo';
// var newdivtext=document.createTextNode('Hello word');
// newdiv.appendChild(newdivtext);
// newdiv.setAttribute('title','test')
// console.log(newdiv);
// var contain= document.querySelector('header .container');
// var h1=document.querySelector('#header-title');
// contain.insertBefore(newdiv, h1);
// newdiv.style.fontSize='30px';
// var newdiv2=document.createElement('div');
// var newdivtext2=document.createTextNode('Hello word');
// newdiv2.appendChild(newdivtext2);
// var list= document.querySelector('#items');
// var l1=document.querySelector('.list-group-item');
// list.insertAdjacentElement('afterbegin',newdiv2);
var form =document.querySelector('#addForm');
var itemList=document.querySelector('#items');
var filter=document.getElementById('filter');
filter.addEventListener('keyup',filterItem)
itemList.addEventListener('click',deleteItem);
form.addEventListener('submit',addItem);
function addItem(e){
    e.preventDefault();
    //get input
    var input=document.querySelector('#item');
    var delbutton=document.createElement('button');
    delbutton.className='btn btn-danger btn-sm float-right delete';
    delbutton.appendChild(document.createTextNode('X'));
    var editbutton=document.createElement('button');
    editbutton.className='btn btn-success float-right mr-2';
    editbutton.appendChild(document.createTextNode('Edit'));
    var li=document.createElement('li');
    li.className='list-group-item';
    var text=document.createTextNode(input.value);
    li.appendChild(text);
    li.appendChild(delbutton);
    li.appendChild(editbutton);
   itemList.appendChild(li);

}
function deleteItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
    var item=e.target.parentElement;
    itemList.removeChild(item);
        }
    }
}
function filterItem(e){
    var text=e.target.value.toLowerCase();
    var items=itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })
}