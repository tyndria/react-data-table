import data from '../data/index';

export function filterData(data, filters) {
	if (filters) {
		return data.filter((item) => {
			const keys = Object.keys(filters).filter(key => filters[key] !== '');
			for (let i = 0; i < keys.length; i ++) {
				const key = keys[i];
				if (item[key] !== filters[key]) {
					return false;
				}
			}
			return true;
		});
	}
	return data;
}

export function getData(filters) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data);
		}, 1000);
	})
}