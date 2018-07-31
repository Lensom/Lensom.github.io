// Инкапсуляция
const main = (document => { // Модули
    // Создание элементов продвинутый уровень

    function createElement(tag, props, ...children) {
        const element = document.createElement(tag);

        Object.keys(props).forEach(key => element[key] = props[key]);

        if (children.length > 0) {
            children.forEach(child => {
                if (typeof child === 'string') {
                    child = document.createTextNode(child);
                }

                element.appendChild(child);
            });
        }

        return element;
    };

    function createTodoItem(title) {
        const checkbox = createElement('input', { type: 'checkbox', className: 'checkbox' });
        const label = createElement('label', { className: 'title' }, title);
        const editInput = createElement('input', { type: 'text', className: 'textfield' });
        const editButton = createElement('button', { className: 'edit' }, 'Изменить');
        const deleteButton = createElement('button', { className: 'delete' }, 'Удалить');
        const listItem = createElement('li', { className: 'todo-item' }, checkbox, label, editInput, editButton, deleteButton);

        bindEvents(listItem);

        return listItem;
    }

    // // Простое создание элементов

    // function createTodoItem(title) {
    //     const checkbox = document.createElement('input');
    //     checkbox.type = 'checkbox';
    //     checkbox.className = 'checkbox';

    //     const label = document.createElement('label');
    //     label.textContent = title;
    //     label.className = 'title';

    //     const editInput = document.createElement('input');
    //     editInput.type = 'text';
    //     editInput.className = 'textfield';

    //     const editButton = document.createElement('button');
    //     editButton.textContent = 'Изменить';
    //     editButton.className = 'edit';

    //     const deleteButton = document.createElement('button');
    //     deleteButton.textContent = 'Удалить';
    //     deleteButton.className = 'delete';

    //     const listItem = document.createElement('li');
    //     listItem.className = 'todo-item';

    //     listItem.appendChild(checkbox);
    //     listItem.appendChild(label);
    //     listItem.appendChild(editInput);
    //     listItem.appendChild(editButton);
    //     listItem.appendChild(deleteButton);

    //     bindEvents(listItem);

    //     return listItem;
    // }

    function bindEvents(todoItem) {
        const checkbox = todoItem.querySelector('.checkbox');
        const editButton = todoItem.querySelector('button.edit');
        const deleteButton = todoItem.querySelector('button.delete');

        checkbox.addEventListener('change', toggleTodoItem);
        editButton.addEventListener('click', editTodoItem);
        deleteButton.addEventListener('click', deleteTodoItem);
    };

    function addTodoItem(event) {
        event.preventDefault();

        if (addInput.value === '') {
            return alert('Необходимо ввести название задачи.');
        }
        const todoItem = createTodoItem(addInput.value);
        todoList.appendChild(todoItem);
        addInput.value = '';
    };


    function toggleTodoItem() {
        const listItem = this.parentNode;
        listItem.classList.toggle('completed');
    };

    function editTodoItem() {
        const listItem = this.parentNode;
        const title = listItem.querySelector('.title');
        const editInput = listItem.querySelector('.textfield');
        const isEditing = listItem.classList.contains('editing');

        if (isEditing) {
            title.textContent = editInput.value;
            this.textContent = 'Изменить';
        } else {
            editInput.value = title.textContent;
            this.textContent = 'Сохранить';
        }

        listItem.classList.toggle('editing');
    }

    function deleteTodoItem() {
        const listItem = this.parentNode;
        todoList.removeChild(listItem);
    }

    // Сохранение и загрузка элементов
    // Не используем из-за логики, все сохраняется и передается через DOM

    // function load() {
    //     const data = JSON.parse(localStorage.getItem('todos'))
    //     return data;
    // }

    // function save() {
    //     const string = JSON.stringify(data);
    //     localStorage.setItem('todos', string)
    // }


    const todoForm = document.getElementById('todo-form'),
        addInput = document.getElementById('add-input'),
        todoList = document.getElementById('todo-list'),
        todoItems = document.querySelectorAll('.todo-item');

    function main() {
        todoForm.addEventListener('submit', addTodoItem);
        todoItems.forEach(item => bindEvents(item));
    };

    return main;
})(document);

main();