import { useState } from 'react';
import CardTemplate from './CardTemplate';
import InputSearch from './InputSearch';
import style from './MainContainer.module.scss';

const MainContainer = ({ data }) => {
	const [search, setSearch] = useState('');
	const filtered = filter(data, search);

	return (
		<>
			<InputSearch
				placeholder='Search...'
				value={search}
				onChange={(ev) => {
					setSearch(ev.target.value);
				}}
			/>
			<main className={style.wrapper}>
				{filtered.length > 0 ? (
					filtered.map((item) => {
						return <CardTemplate item={item} key={item.id} />;
					})
				) : (
					<h1 style={{ textAlign: 'center' }}>Not Found...</h1>
				)}
			</main>
		</>
	);
};

const filter = (data, search) => {
	if (!search) return [...data];
	const lowerCaseSearch = search.toLowerCase();

	const keys = ['title', 'original_title_romanised', 'director', 'producer'];
	// const keys = Object.keys(data[0]);
	return data.filter(
		(items) =>
			keys.some((key) => items[key].toLowerCase().includes(lowerCaseSearch))
		// items.title.toLowerCase().includes(lowerCaseSearch) ||
		// items.director.toLowerCase().includes(lowerCaseSearch) ||
		// items.release_date.toLowerCase().includes(lowerCaseSearch) ||
		// items.producer.toLowerCase().includes(lowerCaseSearch)
	);
};

export default MainContainer;
