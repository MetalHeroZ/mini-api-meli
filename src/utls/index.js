export const asyncWrapper = () => (fn) => (req, res, next) => {
	return Promise.resolve(fn(req))
		.then((result) => res.send(result))
		.catch((err) => next(err));
};

export const deconstructFloat = number => {
	const stringed = number.toString();
	return stringed.split('.');
};

export const signObj = obj => {
	const { AUTHOR_NAME = '', AUTHOR_LASTNAME = ''} = process.env; 
	const autor = {
		name: AUTHOR_NAME,
		lastname: AUTHOR_LASTNAME,
	};

	return { ...obj, autor };
}