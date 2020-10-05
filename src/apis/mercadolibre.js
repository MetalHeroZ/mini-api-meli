import axios from 'axios';

export const getItemInformationById = itemId => 
	axios.get(`${process.env.API_MERCADOLIBRE}/items/${itemId}`);

export const getItemDescriptionById = itemId => 
	axios.get(`${process.env.API_MERCADOLIBRE}/items/${itemId}/description`);

export const getCategoryInformationById = categoryId => 
	axios.get(`${process.env.API_MERCADOLIBRE}categories/${categoryId}`); 

export const searchItemsByQuery = query => 
	axios.get(`${process.env.API_MERCADOLIBRE}/sites/MLA/search?q=${query}`);

