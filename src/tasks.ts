import { v4 as uuidv4 } from 'uuid';
uuidv4();

export const tasks = [
	{
		id: uuidv4(),
		title: 'delectus aut autem',
		completed: false,
	},
	{
		id: uuidv4(),
		title: 'quis ut nam facilis et officia qui',
		completed: false,
	},
	{
		id: 4,
		title: 'et porro tempora',
		completed: true,
	},
	{
		id: 5,
		title: 'laboriosam mollitia et enim quasi',
		completed: false,
	},
];
