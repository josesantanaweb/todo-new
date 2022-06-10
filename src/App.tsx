import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BiCheck, BiEdit, BiTrash } from 'react-icons/bi';
import { tasks }from './tasks';
import { Task }from './interfaces';

uuidv4();

const App = () => {
	const [todos, setTodos] = useState<Task[]>(tasks);
	const [title, setTitle] = useState('');
	const [editTitle, setEditTitle] = useState('');
	const [task, setTask] = useState<Task>();
	const [isEdit, setIsEdit] = useState(false);

	const addTodo = (e: any) => {
		e.preventDefault();
		const data = {
			id: uuidv4(),
			title: title,
			completed: false
		};
		const newTodos = [...todos, data];
		setTodos(newTodos);
		setTitle('');
	};

	const orderTodos = todos.sort((a: any, b: any) => {
		return b.completed - a.completed;
	});

	const updateTodo = (e: any) => {
		e.preventDefault();
		const updatedTodos = todos.map(item =>
			item.id === task?.id
				? { ...item, title: editTitle }
				: item
		);
		setTodos(updatedTodos);
		setIsEdit(false);
	};

	const editTask = (task: Task) => {
		setIsEdit(true);
		setTask(task);
		setEditTitle(task.title);
	};

	const completeTask = (index: number) => {
		const newTodos = [...todos];
		newTodos[index].completed = true;
		setTodos(newTodos);
	};

	const removeTodo = (index: number) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};


	return (
		<div className="todo">
			<div className="todo-title">
				<h3>Lista de Tareas</h3>
			</div>
			<form className="todo-form" onSubmit={addTodo}>
				<input
					type="text"
					value={title}
					name={title}
					onChange={e => setTitle(e.target.value)}
					placeholder="Que quieres hacer hoy?"
				/>
				<button type="submit">Agregar</button>
			</form>
			<div className="todo-task">
				{
					orderTodos.map((task: Task, index: number) => (
						<div
							className={`todo-item ${task.completed ? 'is-completed' : ''}`}
							key={index}
						>
							<p>{task.title}</p>
							<div className="todo-controls">
								{
									!task.completed &&
                  <span className="todo-mark" onClick={() => completeTask(index)}>
                  	<BiCheck />
                  </span>
								}
								{
									!task.completed &&
                  <span className="todo-edit" onClick={() => editTask(task)}>
                  	<BiEdit />
                  </span>
								}
								<span className="todo-delete" onClick={() => removeTodo(index)}>
									<BiTrash />
								</span>
							</div>
						</div>
					))
				}
				{
					isEdit &&
          <form className="todo-form" onSubmit={updateTodo}>
          	<input
          		type="text"
          		value={editTitle}
          		name={editTitle}
          		onChange={e => setEditTitle(e.target.value)}
          		placeholder="Que quieres hacer hoy?"
          	/>
          	<button type="submit">Editar</button>
          </form>
				}
			</div>
		</div>
	);
};

export default App;
