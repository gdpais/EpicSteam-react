const bcrypt = require('bcrypt');

const dummyData = async () => {
	const passwd = await bcrypt.hash('Dummy100', 10);
	return [
		[
			'Users',
			'Categories',
			'Categories',
			'Categories',
			'Categories',
			'Categories',
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
			'Posts_Categories',
			'Posts_Categories',
			'Posts_Categories',
			'Posts_Categories',
			'Posts_Categories',
		],
		[
			{
				id: 'Dummy1',
				username: 'SrBatatinha',
				email: 'srBatats@batata.com',
				password: passwd,
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
				upVotes: 1,
				downVotes: 0,
				owner: 'Dummy1',
			},
			{
				id: 2,
				title: 'CSGO',
				cover: 'csgo.jpg',
				banner: 'csgoBanner.jpg',
				description: 'Valve - 2012',
				price: 0.0,
				postDate: '2022-07-30',
				upVotes: 0,
				downVotes: 1,
				owner: 'Dummy1',
			},
			{
				id: 3,
				title: 'Rainbow Six Siege',
				cover: 'r6.jpg',
				banner: 'r6Banner.jpg',
				description: 'Ubisoft - 2015',
				price: 19.99,
				postDate: '2022-07-30',
				upVotes: 1,
				downVotes: 0,
				owner: 'Dummy1',
			},
			{
				id: 1,
				description: 'Excelente',
				userId: 'Dummy1',
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
				userId: 'Dummy1',
			},
			{
				role: 5204,
				userId: 'Dummy1',
			},
			{
				role: 666,
				userId: 'Dummy1',
			},
			{
				userId: 'Dummy1',
				postId: 1,
				didPlay: true,
			},
			{
				userId: 'Dummy1',
				postId: 2,
				didPlay: true,
			},
			{
				userId: 'Dummy1',
				postId: 3,
				didPlay: true,
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
		],
	];
};
module.exports = dummyData;
