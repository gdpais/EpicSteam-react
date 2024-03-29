import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { axios } from '../../services/apis/axios';
import { Row, Col, Container, Modal } from 'react-bootstrap';
import Image from '../images/Image';
import { toast } from 'react-toastify';
import handleError from '../../utils/errorHandling';
import './Game.css';
import { FaAngleRight } from 'react-icons/fa';
import DidPlayBtn from '../Games/DidPlayBtn';
import VotesSection from '../Games/VotesSection';
import Comments from '../Games/Comments';
import DeleteGame from '../Games/DeleteGame/DeleteGame';
import { useAccessToken } from '../../services/hooks/useAccessToken';

/**
 * Game page component
 * @returns
 */
export default function Game() {
	const { gameId } = useParams();
	const navigate = useNavigate();
	//Variables
	const [game, setGame] = useState({});
	const [players, setPlayers] = useState([]);
	const [likes, setLikes] = useState(0);
	const [dislikes, setDislikes] = useState(0);
	const [showPlayers, setShowPlayers] = useState(false);
	//Verification
	const verifyRoles = useAccessToken();
	const [canDelete, setCanDelete] = useState(false);

	/**
	 * Gets game data
	 */
	useEffect(() => {
		const getData = async () => {
			try {
				let res = await axios(`/games/game/${gameId}`);
				setGame(res?.data);
				setLikes(res?.data?.upVotes);
				setDislikes(res?.data?.downVotes);

				res = await axios(`/games/game/players/${gameId}`);
				setPlayers(res?.data);
			} catch (err) {
				if (err.response?.status === 404) return navigate('/notfound');

				toast.error(handleError(err, `Game content couldn't be loaded.`));
			}
		};

		getData();
	}, [gameId, navigate]);

	/**
	 * Checks if the user has permissions to delete this game
	 */
	useEffect(() => {
		if (game.username) {
			setCanDelete(verifyRoles([1899, 5204], game.username));
		}
	}, [game, verifyRoles]);

	return (
		<Container fluid className="mt-3">
			<Row>
				<Col className="ps-0">
					<Row>
						<Image
							src={game.cover}
							alt={`${game.title} cover`}
							style={{
								width: '95%',
								height: '420px',
								objectFit: 'cover',
								borderRadius: '35px',
							}}
						/>
					</Row>
					<Row
						style={{
							width: '100%',
							textAlign: 'center',
						}}
					>
						<p className="gameTitle mt-1 mb-2">{game.title}</p>
					</Row>
					<Row className="mt-0 me-0 pe-0 ms-0 gameDescriptionRow">
						<Col
							lg={8}
							className="ps-0 gameDescription"
							style={{ color: '#fff' }}
						>
							{game.description}
						</Col>
						<Col className="pe-0 mb-2 gameAttribute">
							{game.price ? `€ ${game.price}` : 'Free'}
						</Col>
					</Row>
					<Row className="mt-2  me-0 pe-0 ms-0 gameAttributesRow">
						<Col className="ps-0 gameAttributeName">Likes</Col>
						<Col className="pe-0 mb-2 gameAttribute">{likes}</Col>
					</Row>
					<Row className="mt-2 me-0 pe-0 ms-0 gameAttributesRow">
						<Col className="ps-0 gameAttributeName">Dislikes</Col>
						<Col className="pe-0 mb-2 gameAttribute">{dislikes}</Col>
					</Row>
					<Row className="mt-2 ms-0 gameAttributesRow">
						<Col className="ps-0 gameAttributeName">Publish by</Col>
						<Col className="pe-0 mb-2 gameAttribute">{game.username}</Col>
					</Row>
					<Row className="mt-2 ms-0 gameAttributesRow">
						<Col className="ps-0 gameAttributeName">Publish Date</Col>
						<Col className="pe-0 mb-2 gameAttribute">
							{game.postDate?.split('T')[0].replaceAll('-', '/')}
						</Col>
					</Row>
					<Row
						className={`mt-2 ms-0  ${
							canDelete ? 'gameAttributesRow' : 'gameDescriptionRow'
						} `}
					>
						<DidPlayBtn
							players={players}
							gameId={gameId}
							setPlayers={setPlayers}
						/>
						<Col
							className="pe-0 mb-2 gameAttribute playersListBtn"
							onClick={() => {
								setShowPlayers(true);
							}}
						>
							See who played it
						</Col>
					</Row>
					{canDelete && (
						<Row className={`mt-2 ms-0 gameDescriptionRow`}>
							<DeleteGame gameId={gameId} owner={game.username} />
						</Row>
					)}
				</Col>
				{/* Column 2 */}
				<Col md={9} lg={9} className="ps-0">
					{/* Banner */}
					<Row>
						<Image
							src={game.banner}
							alt={`${game.title} banner`}
							style={{
								width: '100%',
								height: '600px',
								objectFit: 'cover',
								borderRadius: '35px',
							}}
						/>
					</Row>
					{/* UpVote/DownVote section */}
					<VotesSection
						game={game?.id}
						title={game?.title}
						setLikes={setLikes}
						setDislikes={setDislikes}
					/>
					{/* Comments section */}
					<Comments />
				</Col>
			</Row>
			{/* Players Modal */}
			<Modal
				className="my-modal"
				show={showPlayers}
				onHide={() => setShowPlayers(false)}
			>
				<Modal.Body>
					<h2 className="auth-title">{game.title}</h2>
					<div className="loginContainer">
						{players.length > 0 ? (
							<>
								<h4 className="text-center mb-4">Players</h4>
								{players.map((player, idx) => (
									<div key={idx}>
										<p>
											<FaAngleRight /> {player}
										</p>
									</div>
								))}
							</>
						) : (
							<div className="text-center">
								<p style={{ fontSize: '22px' }}>
									No user played this game yet. Be the first!
								</p>
							</div>
						)}
					</div>
				</Modal.Body>
			</Modal>
		</Container>
	);
}
