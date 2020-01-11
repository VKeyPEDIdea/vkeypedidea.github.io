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
let editBtnList;
let checkboxList;

// Изменить задачу
let editTask = function (id) {
	tasks[id].title = prompt('Измените задачу', '');
	clearTaskList();
	showTaskList();
}

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
	editBtnList = document.getElementsByClassName('btn-edit');
	checkboxList = document.getElementsByClassName('list-item__check');
	clickDeleteBtn();
	clickEditBtn();
	clickCheckbox();
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
		clickEditBtn();
		clickCheckbox();
	}
}

// Удалить задачу из списка
function removeTask() {
	tasks.splice('', 1);
	taskCount = tasks.length;
	clearTaskList();
	showTaskList();
}

// Отметить задачу выполненной
function checkTask(id) {
	let title = document.getElementsByClassName('list-item__title');

	if (checkboxList[id].checked == true) {
		title[id].style.textDecoration = 'line-through';
	} else if (checkboxList[id].checked == false) {
		title[id].style.textDecoration = 'none';
	}
}

// Обработчик события - нажатие на кнопку Удалить
function clickDeleteBtn() {
	for (let i = 0; i < deleteBtnList.length; i++) {
		deleteBtnList[i].addEventListener('click', removeTask, false);
	}
}

// Обработчик события - нажатие на кнопку Изменить
function clickEditBtn() {
	for (let i = 0; i < editBtnList.length; i++) {
		editBtnList[i].addEventListener('click', editTask.bind(null, i), true);
	}
}

// Обработчик события - нажатие на чек-бокс
function clickCheckbox() {
	for (let i = 0; i < checkboxList.length; i++) {
		checkboxList[i].addEventListener('click', checkTask.bind(null, i), false);
	}
}
let checkbox = document.getElementsByClassName('list-item__check')[0];

// Обработчик события - нажатие на кнопку Добавить дело
addTaskBtn.addEventListener('click', addTask, false);