export const cleanData = <T extends { [label: string]: any }>(
	obj: T,
	optionalFields: (keyof T)[]
) => {
	const cleanedData = { ...obj };

	Object.entries(obj).forEach(([key, value]) => {
		if (
			optionalFields.includes(key as keyof T) &&
			(value === null || value === undefined || value == "")
		) {
			delete cleanedData[key];
		}
	});

	return cleanedData;
};

export const verifyQuery = <T extends { [label: string]: any }>(
	query: T,
	validFields: (keyof T)[] | { all: "true"; without: (keyof T)[] },
	invalidFields?: (keyof T)[]
) => {
	if (!Array.isArray(validFields)) {
		const newValidItems: (keyof T)[] = [];
		const newInvalidItems: (keyof T)[] = validFields.without.map(
			(item) => item as keyof T
		);

		Object.keys(query).forEach((item) => {
			if (!validFields.without.includes(item)) {
				newValidItems.push(item as keyof T);
			}
		});

		verifyQuery(query, newValidItems, newInvalidItems);
	} else {
		if (validFields.length == 0) return;

		Object.keys(query).forEach((item) => {
			if (invalidFields?.includes(item)) {
				throw new Error(
					`Fields [${invalidFields.join(
						" | "
					)}] can't be together with [${validFields.join(
						" | "
					)}] field/s`
				);
			}
		});
	}
};
