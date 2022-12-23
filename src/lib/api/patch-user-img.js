import emitEvent from '../events/alertEvent';
import getUserProfile from './get-user-profile';

const pathUserImg = async (token, user, setUser) => {
	try {
		const res = await fetch(
			'https://desafios-backend-production.up.railway.app/api/update-image',
			{
				method: 'PATCH',
				headers: {
					authorization: `Bearer ${token}`
				},
				body: user
			}
		);

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
