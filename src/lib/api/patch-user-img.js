import { API_FETCH } from '../../constants/urls';
import emitEvent from '../events/alertEvent';
import getUserProfile from './get-user-profile';

const pathUserImg = async (token, user, setUser) => {
	console.log(user);
	try {
		const res = await fetch(API_FETCH.PATCH_IMG, {
			method: 'PATCH',
			headers: {
				authorization: `Bearer ${token}`
			},
			body: user
		});

		if (res.status === 202) {
			await getUserProfile(token, setUser);
			emitEvent('image updated');
		} else if (res.status === 503) {
			emitEvent('something wrong, try again');
		} else {
			emitEvent('error');
		}
	} catch (error) {
		console.log(error);
	}
};

export default pathUserImg;
