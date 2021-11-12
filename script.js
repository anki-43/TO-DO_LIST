
const tdinput = document.querySelector('.tdinput');
const tdbutton = document.querySelector('.material-icons');
const tdlist = document.querySelector('.list');


tdbutton.addEventListener("click", add);

function add(e){
    e.preventDefault();
    const listBlock = document.createElement('div');
    listBlock.classList.add('listElements');
    
    const task = document.createElement('li');
    task.classList.add('taskElement');
    task.innerText = tdinput.value;
    listBlock.appendChild(task);

    const checkButton = document.createElement('button');
    checkButton.classList.add('check');
    checkButton.innerHTML = '<span class="material-icons check_icon">done</span>'
    listBlock.appendChild(checkButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.innerHTML = '<span class="material-icons delete_icon">delete</span>'
    listBlock.appendChild(deleteButton);

    tdlist.appendChild(listBlock);

    tdinput.value = '';

    checkButton.addEventListener('click', CheckItem);
    deleteButton.addEventListener('click', DeleteItem);
     let count = 0;
    function CheckItem(e){
     
      const textDiv = e.target.parentElement.parentElement;
      const taskElement = textDiv.querySelector('.taskElement');
      if(count%2 === 0){
          taskElement.classList.add('crosstext');
          count+=1;
      }else{
          taskElement.classList.remove('crosstext');
          count+=1;
      }
    }

    function DeleteItem(e){
      const textDiv = e.target.parentElement.parentElement;
      const taskElement = textDiv.querySelector('.taskElement');
      listBlock.classList.add('deleteTask');
    }
    
}

