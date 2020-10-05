import { 
	getItemInformationById, 
	getItemDescriptionById, 
	searchItemsByQuery, 
	getCategoryInformationById 
} from '../apis/mercadolibre';
import { createGetItemInformationResponse, createSearchItemResponse} from '../factory/responsesFactory';

export const getItemInformation = async (req, res) => {
	const { id } = req.params;
	try {
		const information = await getItemInformationById(id);
		const description = await getItemDescriptionById(id);
		const { data } = information;
		const category = await getCategoryInformationById(data.category_id);
		const response = createGetItemInformationResponse(data, description.data, category.data)
		
		return res.send(response);
	} catch (err) {
		console.log('err', err)
		return res.status(500).send(err);
	}
} 

export const searchItems = async (req, res) => {
	const { q } = req.query;
	try {
		const results = await searchItemsByQuery(q);
		const response = createSearchItemResponse(results.data);
		
		return res.send(response);
	} catch (err) {
		console.log('err', err)
		return res.status(500).send(err);
	}
}