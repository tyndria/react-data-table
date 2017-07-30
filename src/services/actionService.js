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