import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import MainContainer from './components/MainContainer';
import { API_URL } from './constants/urlApi';

const App = () => {
	const [data, setData] = useState();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.json())
			.then((res) => setData(res))
			.catch((error) => console.log(error))
			.finally(() => setLoading(true));
	}, []);

	if (!loading) return <Loading />;
	return <MainContainer data={data} />;
};

export default App;
