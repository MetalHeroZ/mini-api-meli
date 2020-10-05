export const createCategories = (category) => {
	return category.path_from_root.map(categoryRelated => categoryRelated.name);
};