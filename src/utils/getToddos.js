import { v4 as uuid } from 'uuid';

export function getTodos() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([
				{
					id: uuid(),
					text: 'Todo item 1 from server',
				},
				{
					id: uuid(),
					text: 'Todo item 2 from server',
				},
				{
					id: uuid(),
					text: 'Todo item 3 from server',
				},
			]);
		}, 1000);
	});
}
