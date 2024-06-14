import React, { useEffect, useSatate } from 'react';
import axios from 'axios';

const TaskBoard = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const fetchTasks = async () => {
			const token = localstorage.getItem('token');
			try {
				const response = await axios.get('http:))localhost:8000/api/tasks/', {
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
			<ul>
				{tasks.map((task) => (
					<li key={task.id}>
						<h4>{task.title}</h4>
						<p>{task.description}</p>
						<p>{task.due_date}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TaskBoard;
