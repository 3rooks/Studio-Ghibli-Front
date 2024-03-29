import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
	const { _id, title, image, director, releaseYear } = product;

	return (
		<article className='shadow-md rounded-md overflow-hidden relative pb-7'>
			<img src={image} />
			<div className='px-4 py-2'>
				<p className='text-ellipsis whitespace-nowrap overflow-hidden text-center'>
					<b>{title}</b>
				</p>
				<p className='text-center'>
					<b>{director}</b>
				</p>
				<p className='text-center'>
					<b> {releaseYear}</b>
				</p>
			</div>
			<Link
				className='block w-full bg-slate-900 text-white rounded-md absolute bottom-0 text-center p-1 hover:bg-slate-700'
				to={`/products/${_id}`}
			>
				<i>See more...</i>
			</Link>
		</article>
	);
};

export default ProductCard;
