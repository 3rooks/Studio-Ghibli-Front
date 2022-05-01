import style from './CardTemplate.module.scss';

const CardTemplate = ({ item }) => {
	const { title, director, image, producer } = item;

	const PROPS = {
		originalTitle: item.original_title,
		originalTitleRomanised: item.original_title_romanised,
		movieBanner: item.movie_banner,
		releaseDate: item.release_date,
		rtScore: item.rt_score,
		runningTime: item.running_time
	};

	return (
		<section className={style.card}>
			<img src={image} className={style.cardImg}/>
			<div className={style.cardInfo}>
				<p><span className={style.cardDescription}>Title:</span> {title}</p>
				<p><span className={style.cardDescription}>Original Title:</span> {PROPS.originalTitle}</p>
				<p><span className={style.cardDescription}>Original Title Romanized:</span> {PROPS.originalTitleRomanised}</p>
				<p><span className={style.cardDescription}>Director:</span> {director}</p>
				<p><span className={style.cardDescription}>Producer:</span> {producer}</p>
				<p><span className={style.cardDescription}>Release Date:</span> {PROPS.releaseDate}</p>
				<p><span className={style.cardDescription}>Duration:</span> {PROPS.runningTime}min</p>
			</div>
		</section>
	);
};

export default CardTemplate;
