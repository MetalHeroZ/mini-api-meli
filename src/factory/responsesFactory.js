import { deconstructFloat, signObj } from '../utls';
import { createCategories } from './categoriesFactory';
import { createItemFromSearchResponse } from './itemsFactory';

export const createSearchItemResponse = ({ results = [], filters }) => {
	let categories = [];
	const categoryFilter = filters.find(filter => filter.id === "category");
	
	if (categoryFilter) {
		const { values = [] } = categoryFilter;
		values.forEach(category => {
			categories = categories.concat(createCategories(category));
		});
	}

	const items = results.map(item => createItemFromSearchResponse(item)) 
	
	return signObj({
		categories,
		items
	});
};

export const createGetItemInformationResponse = (itemInformation, itemDescription, category) => {
	const { 
		id, 
		title, 
		currency_id, 
		price, 
		thumbnail, 
		condition, 
		shipping, 
		sold_quantity
	} = itemInformation;
	const free_shipping = shipping && shipping.free_shipping || false;
	const { plain_text: description } = itemDescription;
	const [ intenger, decimal = 0 ] = deconstructFloat(price);
	const categories = createCategories(category);

	return signObj({
		id,
		title,
		price: {
			currency: currency_id,
			amount: parseInt(intenger),
			decimals: parseInt(decimal),
		},
		picture: thumbnail,
		condition,
		free_shipping,
		sold_quantity,
		description,
		categories
	});
};