import { deconstructFloat } from "../utls";

export const createItemFromSearchResponse = ({
	id, 
	title = '', 
	price, 
	currency_id = '',
	thumbnail = '', 
	condition = '', 
	shipping,
	address,
}) => {
	const free_shipping = shipping && shipping.free_shipping;
	const owner_address = address && address.state_name || '';
	const [ intenger, decimal = 0 ] = deconstructFloat(price);

	return {
		id,
		title,
		price: {
			currency: currency_id,
			amount: parseInt(intenger),
			decimals: parseInt(decimal)
		},
		picture: thumbnail,
		condition,
		free_shipping,
		owner_address,
	};
};
