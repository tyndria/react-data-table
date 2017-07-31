import data from '../data/index';

export function transformData(data, filters, pagination, sort) {
	if (sort) {
		data.sort((prev, curr) => {
			const order = sort.sort === 'ASC' ? 1 : -1;
			return (prev[sort.key] > curr[sort.key]) * order;
		});
	}

	if (pagination) {
		const startIndex = (pagination.pageNumber - 1) * pagination.dataChunk;
		const endIndex = startIndex  + pagination.dataChunk;
		data = data.slice(startIndex, Math.min(data.length, endIndex));
	}

	if (filters) {
		data = data.filter((item) => {
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

export function getData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data);
		}, 1000);
	})
}