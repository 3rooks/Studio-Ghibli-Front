const URI = import.meta.env.VITE_LOCAL_HOST;

export const API_FETCH = {
	USER_LOGIN: URI + 'api/login',
	USER_REGISTER: URI + 'api/register',
	GET_USER: URI + 'api/user',
	GET_USER_PROFILE: URI + 'api/profile',
	USER_CART: URI + 'api/carts',
	GET_ALL_PRODUCTS: URI + 'api/products',
	GET_PRODUCT: URI + 'api/products',
	PATCH_IMG: URI + 'api/update-image',
	PATCH_USERNAME: URI + 'api/update-username',
	PATCH_EMAIL: URI + 'api/update-email',
	PATCH_PASS: URI + 'api/update-password',
	DELETE_USER: URI + 'api/unregister'
};
