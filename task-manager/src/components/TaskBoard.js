import React, { useEffect, useSatate } from 'react';
import axios from 'axios';
import TaskList from './TaskList';

const TaskBoard = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const fetchTasks = async () => {
			const token = localstorage.getItem('token');
			try {
				const response = await axios.get('http://localhost:8000/api/tasks/', {
					headers: { Authorization: `Bearer ${token}` },
				});
				setTasks(response.data);
			} catch (error) {
				console.error('Error fetching tasks', error);
			}
		};

		fetchTasks();
	}, []);

	return (
		<div>
			<h2>Task Board</h2>
			<TaskList tasks={tasks} />
		</div>
	);
};


export default TaskBoard;
