const bcrypt = require('bcrypt');

const dummyData = async () => {
	const passwd = await bcrypt.hash('Admin123', 10);
	const manPasswd = await bcrypt.hash('Manager123', 10);
	return [
		[
			'Users',
			'Users',
			'Categories',
			'Categories',
			'Categories',
			'Categories',
			'Categories',
			'Posts',
			'Posts',
			'Posts',
			'Posts',
			'Posts',
			'Posts',
			'Comments',
			'Roles',
			'Roles',
			'Roles',
			'User_Roles',
			'User_Roles',
			'User_Roles',
			'Users_Posts',
			'Users_Posts',
			'Users_Posts',
			'Users_Posts',
			'Users_Posts',
			'Users_Posts',
			'Posts_Categories',
			'Posts_Categories',
			'Posts_Categories',
			'Posts_Categories',
			'Posts_Categories',
			'Posts_Categories',
			'Posts_Categories',
			'Posts_Categories',
			'Posts_Categories',
		],
		[
			{
				id: 'Adminarino',
				username: 'SrAdministrador',
				email: 'admin@epicsteam.com',
				password: passwd,
				joinDate: '2022-07-30',
				picture: '',
			},
			{
				id: 'ContentManager',
				username: 'Manager',
				email: 'manager@epicsteam.com',
				password: manPasswd,
				joinDate: '2022-07-30',
				picture: '',
			},
			{
				id: 1,
				name: 'Adventure',
				icon: 'adventure.jpg',
			},
			{
				id: 2,
				name: 'Multiplayer',
				icon: 'multiplayer.jpg',
			},
			{
				id: 3,
				name: 'Racing',
				icon: 'racing.jpg',
			},
			{
				id: 4,
				name: 'Simulation',
				icon: 'simulation.jpg',
			},
			{
				id: 5,
				name: 'First-Person Shooter',
				icon: 'fps.jpg',
			},
			{
				id: 1,
				title: "Uncharted: A Thief's End",
				cover: 'uncharted4.png',
				banner: 'uncharted4Banner.jpg',
				description: 'Naughty Dog - 2016',
				price: 39.99,
				postDate: '2022-07-20',
				owner: 'Adminarino',
			},
			{
				id: 2,
				title: 'CS: Global Offensive',
				cover: 'csgo.jpg',
				banner: 'csgoBanner.jpg',
				description: 'Valve - 2012',
				price: 0.0,
				postDate: '2022-07-25',
				owner: 'Adminarino',
			},
			{
				id: 3,
				title: 'Rainbow Six Siege',
				cover: 'r6.jpg',
				banner: 'r6Banner.jpg',
				description: 'Ubisoft - 2015',
				price: 19.99,
				postDate: '2022-07-26',
				owner: 'Adminarino',
			},
			{
				id: 4,
				title: 'Forza Horizon 5',
				cover: 'forzaHorizon5.jpg',
				banner: 'forzaHorizon5Banner.jpg',
				description: ' Xbox Game Studios - 2021',
				price: 59.99,
				postDate: '2022-07-28',
				owner: 'Adminarino',
			},
			{
				id: 5,
				title: 'Flight Simulator',
				cover: 'flightSimulator.jpg',
				banner: 'flightSimulatorBanner.jpg',
				description: 'Xbox Game Studios - 2020',
				price: 69.99,
				postDate: '2022-07-27',
				owner: 'Adminarino',
			},
			{
				id: 6,
				title: 'Red Dead Redemption 2',
				cover: 'rdr2.jpg',
				banner: 'rdr2banner.jpg',
				description: 'Rockstar Games - 2018',
				price: 59.99,
				postDate: '2022-07-27',
				owner: 'Adminarino',
			},
			{
				id: 1,
				description: 'Excelente',
				userId: 'Adminarino',
				postId: 1,
			},
			{
				role: 1899,
			},
			{
				role: 5204,
			},
			{
				role: 666,
			},
			{
				role: 1899,
				userId: 'Adminarino',
			},
			{
				role: 5204,
				userId: 'Adminarino',
			},
			{
				role: 5204,
				userId: 'ContentManager',
			},
			{
				userId: 'Adminarino',
				postId: 1,
				didPlay: true,
				vote: 1,
			},
			{
				userId: 'Adminarino',
				postId: 2,
				didPlay: true,
				vote: 2,
			},
			{
				userId: 'Adminarino',
				postId: 3,
				didPlay: true,
				vote: 1,
			},
			{
				userId: 'Adminarino',
				postId: 4,
				didPlay: true,
				vote: 1,
			},
			{
				userId: 'Adminarino',
				postId: 5,
				didPlay: false,
				vote: 1,
			},
			{
				userId: 'Adminarino',
				postId: 6,
				didPlay: true,
				vote: 1,
			},
			{
				postId: 1,
				categoryId: 1,
			},
			{
				postId: 2,
				categoryId: 2,
			},
			{
				postId: 2,
				categoryId: 5,
			},
			{
				postId: 3,
				categoryId: 2,
			},
			{
				postId: 3,
				categoryId: 5,
			},
			{
				postId: 4,
				categoryId: 2,
			},
			{
				postId: 4,
				categoryId: 3,
			},
			{
				postId: 5,
				categoryId: 4,
			},
			{
				postId: 6,
				categoryId: 1,
			},
		],
	];
};
module.exports = dummyData;
