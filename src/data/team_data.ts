// Use public image paths (files in public/assets/img are .png)
interface DataType {
  id: number;
  img: string;
  avatar_name: string;
  designation: string;
}

const team_data: DataType[] = [
  {
    id: 1,
    img: '/assets/img/team/teamsimg1.png',
    avatar_name: 'Bruce Stewart',
    designation: 'PHP Developer',
  },
  {
    id: 2,
    img: '/assets/img/team/teamsimg2.png',
    avatar_name: 'Joseph Whorton',
    designation: 'UI/UX Designer',
  },
  {
    id: 3,
    img: '/assets/img/team/teamsimg3.png',
    avatar_name: 'Gregory Terrell',
    designation: 'Web Developer',
  },
  {
    id: 4,
    img: '/assets/img/team/teamsimg4.png',
    avatar_name: 'Andrew Lopenza',
    designation: 'UX Sketch Designer',
  },
  {
    id: 5,
    img: '/assets/img/team/teamsimg5.png',
    avatar_name: 'Bruce Stewart',
    designation: 'PHP Developer',
  },
  {
    id: 6,
    img: '/assets/img/team/teamsimg6.png',
    avatar_name: 'Joseph Whorton',
    designation: 'UI/UX Designer',
  },
  {
    id: 7,
    img: '/assets/img/team/teamsimg7.png',
    avatar_name: 'Gregory Terrell',
    designation: 'Web Developer',
  },
  {
    id: 8,
    img: '/assets/img/team/teamsimg8.png',
    avatar_name: 'Andrew Lopenza',
    designation: 'UX Sketch Designer',
  },
];

export default team_data;
