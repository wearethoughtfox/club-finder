// The list of clubs. Add, remove or change clubs here.
// "category" is used for the filter buttons on the Clubs page, and the
// colours for each category are set in src/routes/clubs/+page.svelte.
// These are EXAMPLE clubs: swap them for the real ones.
export const clubs = [
  {
    name: 'Goal Getters FC',
    category: 'Football',
    when: 'Saturdays, 10:00am',
    where: 'Riverside Park',
    ages: '7 to 11',
    description: 'Friendly football for all levels. No experience needed, just bring trainers.'
  },
  {
    name: 'Swim Squad',
    category: 'Swimming',
    when: 'Fridays, 5:00pm',
    where: 'Leisure Centre Pool',
    ages: '6 to 11',
    description: 'Build confidence in the water with fun games and proper coaching.'
  },
  {
    name: 'Fast Feet Juniors',
    category: 'Running',
    when: 'Wednesdays, 4:30pm',
    where: 'Athletics Track',
    ages: '8 to 13',
    description: 'Sprints, relays and cross country. Run for fun or train for race day.'
  },
  {
    name: 'Peak Explorers',
    category: 'Hiking',
    when: 'Sundays, 9:30am',
    where: 'Meet at the Car Park',
    ages: '8 to 14',
    description: 'Monthly family-friendly walks with snacks, maps and plenty of puddles.'
  },
  {
    name: 'Boulder Buddies',
    category: 'Climbing',
    when: 'Thursdays, 4:00pm',
    where: 'The Climbing Wall',
    ages: '7 to 13',
    description: 'Learn to climb safely with expert coaches. All kit provided.'
  },
  {
    name: 'Park Rangers FC',
    category: 'Football',
    when: 'Tuesdays, 4:00pm',
    where: 'Memorial Playing Field',
    ages: '9 to 12',
    description: 'Mid-week training sessions and a friendly match at the end of each month.'
  },
  {
    name: 'Trail Blazers',
    category: 'Running',
    when: 'Saturdays, 8:30am',
    where: 'Woodland Park',
    ages: '8 to 14',
    description: 'A relaxed junior parkrun group. Walk, jog or run, everyone is welcome.'
  }
];

export const categories = ['All', ...new Set(clubs.map((c) => c.category))];
