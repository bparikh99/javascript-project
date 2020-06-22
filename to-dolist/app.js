// Selector

const input = document.querySelector(".todo-input");
const button = document.querySelector(".todo-button");
const list = document.querySelector(".todo-list");

//Event Listner
button.addEventListener("click",add);
list.addEventListener("click",deleteCheck)


//Function
function add(event)
{	
	event.preventDefault();
	const todoDiv=document.createElement("div");
	todoDiv.classList.add("todo");
	const newTodo=document.createElement("li");
	newTodo.innerText=document.getElementById('userInput').value;
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);

	const completedButton=document.createElement('button');
	completedButton.innerHTML='<i class="fas fa-check"></i>';
	completedButton.classList.add('completed-button');
	todoDiv.appendChild(completedButton);

	const deletedButton=document.createElement('button');
	deletedButton.innerHTML='<i class="fas fa-trash"></i>';
	deletedButton.classList.add('deleted-button');
	todoDiv.appendChild(deletedButton);

	list.appendChild(todoDiv)

	//Clear Input
	userInput.value="";
}
function deleteCheck(e){
	const item=e.target;
	if(item.classList[0]==='deleted-button')
	{
		const todo=item.parentElement;
		todo.classList.add('fall');
		todo.addEventListener('transitionend',function(){
		todo.remove();})

	}
	if(item.classList[0]==='completed-button')
	{
		const todo=item.parentElement;
		todo.classList.toggle('completed');
	}
}
