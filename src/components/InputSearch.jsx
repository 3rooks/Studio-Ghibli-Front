import style from './InputSearch.module.scss';
import SearchIcon from './SearchIcon';

const InputSearch = ({ ...props }) => {
	return (
		<div className={style.wrapper}>
			<h1 className={style.title}>Studio Ghibli</h1>
			<div className={style.container}>
				<SearchIcon className={style.icon} />
				<input {...props} type='text' className={style.input} />
			</div>
		</div>
	);
};

export default InputSearch;
