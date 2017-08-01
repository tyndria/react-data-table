export function reduceByKey(entry, items) {
	const resultObject = {};

	entry.forEach((key) => {
		resultObject[key] = [];
	});

	items.forEach((item) => {
		entry.forEach((key) => {
			const property = item[key];
			if (resultObject[key].indexOf(property) === -1) {
				resultObject[key].push(property);
			}
		})
	});

	return resultObject;
}

export function transformData(data, filters, pagination, sort) {
	if (sort) {
		data.sort((prev, curr) => {
			const order = sort.sort === 'ASC' ? -1 : 1;
			return prev[sort.key] > curr[sort.key] ? (-order) : order;
		});
	}

	let maxPageNumber;
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

		maxPageNumber  = Math.ceil(data.length / pagination.dataChunk);
	}

	if (pagination) {
		const startIndex = (pagination.pageNumber - 1) * pagination.dataChunk;
		const endIndex = startIndex  + pagination.dataChunk;
		data = data.slice(startIndex, Math.min(data.length, endIndex));
	}

	return {data: data, maxPageNumber: maxPageNumber};
}
