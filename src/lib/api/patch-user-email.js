import { API_FETCH } from '../../constants/urls';
import emitEvent from '../events/alertEvent';
import getUserProfile from './get-user-profile';

const pathEmail = async (token, user, setUser) => {
	try {
		const res = await fetch(API_FETCH.PATCH_EMAIL, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${token}`
			},
			body: JSON.stringify(user)
		});

		if (res.status === 202) {
			await getUserProfile(token, setUser);
			emitEvent('email updated');
		} else if (res.status === 400) {
			emitEvent('invalid inputs');
		} else if (res.status === 401) {
			emitEvent('unauthorized');
		} else {
			emitEvent('error');
		}
	} catch (error) {
		console.log(error);
	}
};

export default pathEmail;
