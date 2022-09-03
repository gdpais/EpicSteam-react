import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { axios } from '../../services/api/axios';
import Image from '../images/Image';
import { toast } from 'react-toastify';
import handleError from '../../utils/errorHandling';

export default function GamesCarousel() {
	const [games, setGames] = useState([]);

	useEffect(() => {
		const getItems = async () => {
			try {
				const res = await axios('/games/mostPlayed');
				setGames(res.data.mostPlayed?.slice(0, 5));
			} catch (err) {
				toast.error(handleError(err));
			}
		};

		getItems();
	}, []);

	return (
		<>
			{games.length > 0 ? (
				<Carousel>
					{games.map(game => (
						<Carousel.Item style={{ textAlign: 'center' }} key={game.id}>
							<Image
								style={{
									width: '100%',
									height: '600px',
									objectFit: 'cover',
									borderRadius: '20px',
								}}
								src={game.cover}
								alt={game.title}
							/>
							<Carousel.Caption>
								<h3>{game.title}</h3>
								<p>{game.description}</p>
							</Carousel.Caption>
						</Carousel.Item>
					))}
				</Carousel>
			) : (
				<></>
			)}
		</>
	);
}
