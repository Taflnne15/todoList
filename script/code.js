// document.querySelector('#add').onclick = function(){
// if (document.querySelector('#main-input').value.length == 0){
// alert('Insert a task please!')

// }};

// else{
// document.querySelector('#newTask()').innerHTML += 
// ${ document.querySelector ('#type').value}

// }
let add = document.querySelector('#add')
add.addEventListener('click',  function(){
let array = []
  let type = document.querySelector('#type').value 

  array.push(type)
  console.log(array)
  //targeting output
  let list = document.createElement('h2')
  let li = document.querySelector('#list')
  li.appendChild(list).innerHTML = type
  type.value = ""
  console.log(li);
})
