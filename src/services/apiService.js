import data from '../data/index';

export function getData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data);
		}, 500);
	})
}