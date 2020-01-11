let addTaskBtn = document.getElementById('add-task');
let searchBtn = document.getElementById('search-btn');
let searchField = document.getElementById('search-field');
let taskList = document.getElementById('tasklist');
let tasks = [
	{
		title: 'Налить кофе',
		done: false,
	},
	{
		title: 'Помыть посуду',
		done: true,
	}
];
let taskCount = tasks.length;
let deleteBtnList;

showTaskList();

// Сделать отображение списка дел
function showTaskList() {
	if (taskList.firstChild) {
		tasklist.removeChild(taskList.firstChild);
	}

	for (let i = 0; i < tasks.length; i++) {
		createListItem(tasks[i].title);
	}

	deleteBtnList = document.getElementsByClassName('btn-delete');
	clickDeleteBtn();
}

// Создать элемент списка дел
function createListItem(title) {
	let taskItem = document.createElement('div');
	let deleteBtn = document.createElement('div');
	let editBtn = document.createElement('div');
	let taskTitle = document.createElement('p');
	let check = document.createElement('input');

	taskItem.className = 'list-item card';
	check.className = 'list-item__check';
	check.type = 'checkbox';
	taskTitle.className = 'list-item__title';
	deleteBtn.className = 'btn btn--md btn--trans btn-delete';
	editBtn.className = 'btn btn--md btn--trans btn-edit';
	
	taskItem.appendChild(check);
	taskItem.appendChild(taskTitle);
	taskItem.appendChild(deleteBtn);
	taskItem.appendChild(editBtn);

	deleteBtn.innerHTML = 'Удалить';
	editBtn.innerHTML = 'Изменить';
	taskTitle.innerHTML = title;
	taskList.append(taskItem);
}

// Очистить список задач
function clearTaskList() {
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}
}

// Добавить задачу
function addTask() {
	let taskTitle = prompt('Введите название','');
	if (taskTitle != null) {
		let task = {title: taskTitle, done: false};
		tasks.push(task);
	
		createListItem(taskTitle);
		taskCount = tasks.length;
		clickDeleteBtn();
	}
}

// Удалить задачу из списка
function removeTask(id) {
	tasks.splice(id, 1);
	taskCount = tasks.length;
	clearTaskList();
	showTaskList();
}

// Обработчик события - нажатие на кнопку Удалить
function clickDeleteBtn() {
	for (let i = 0; i < deleteBtnList.length; i++) {
		deleteBtnList[i].addEventListener('click', removeTask, false);
	}
}

// Обработчик события - нажатие на кнопку Добавить дело
addTaskBtn.addEventListener('click', addTask, false);