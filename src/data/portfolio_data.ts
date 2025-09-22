// Use public paths for portfolio images (project_successfull_1.jpg not present)
interface PortfolioDataType {
	id: number;
	img: string;
	title: string;
	des: string;
}

const portfolio_data: PortfolioDataType[] = [
	{
		id: 1,
		img: '/assets/img/project_successfull_2.jpg',
		title: 'Project Task Management',
		des: 'Digital Services / App Design',
	},
	{
		id: 2,
		img: '/assets/img/project_successfull_3.jpg',
		title: 'Project Task Management',
		des: 'Digital Services / App Design',
	},
	{
		id: 3,
		img: '/assets/img/project_successfull_4.jpg',
		title: 'Project Task Management',
		des: 'Digital Services / App Design',
	},
	{
		id: 4,
		img: '/assets/img/project_successfull_5.jpg',
		title: 'Project Task Management',
		des: 'Digital Services / App Design',
	},
	{
		id: 5,
		img: '/assets/img/project_successfull_2.jpg',
		title: 'Project Task Management',
		des: 'Digital Services / App Design',
	},
];

export default portfolio_data;
