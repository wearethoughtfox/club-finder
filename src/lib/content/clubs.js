// The list of clubs. Add, remove or change clubs here.
// "category" is used for the filter buttons on the Clubs page.
// These are EXAMPLE clubs: swap them for the real ones.
export const clubs = [
  {
    name: 'Robo Builders',
    category: 'Tech',
    when: 'Tuesdays, 4:00pm',
    where: 'Library Hall',
    ages: '8 to 12',
    description: 'Build and program little robots, then race them against your friends.'
  },
  {
    name: 'Goal Getters FC',
    category: 'Sport',
    when: 'Saturdays, 10:00am',
    where: 'Riverside Park',
    ages: '7 to 11',
    description: 'Friendly football for all levels. No experience needed, just bring trainers.'
  },
  {
    name: 'Splash Art Studio',
    category: 'Creative',
    when: 'Wednesdays, 3:45pm',
    where: 'Community Centre',
    ages: '6 to 12',
    description: 'Painting, clay and collage. Take home something new every week.'
  },
  {
    name: 'Code Cats',
    category: 'Tech',
    when: 'Thursdays, 4:30pm',
    where: 'School Computer Room',
    ages: '9 to 13',
    description: 'Learn to make your own games and websites with real code.'
  },
  {
    name: 'Chess Champions',
    category: 'Games',
    when: 'Mondays, 3:30pm',
    where: 'Library Hall',
    ages: '7 to 14',
    description: 'Learn the tricks, play friendly matches and enter the end of term tournament.'
  },
  {
    name: 'Swim Squad',
    category: 'Sport',
    when: 'Fridays, 5:00pm',
    where: 'Leisure Centre Pool',
    ages: '6 to 11',
    description: 'Build confidence in the water with fun games and proper coaching.'
  },
  {
    name: 'Little Stage',
    category: 'Creative',
    when: 'Sundays, 11:00am',
    where: 'Town Theatre',
    ages: '8 to 13',
    description: 'Drama, music and dance, with a show for family and friends at the end of term.'
  }
];

export const categories = ['All', ...new Set(clubs.map((c) => c.category))];
