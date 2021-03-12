import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { withSSRContext } from 'aws-amplify';

import MissionCard from 'components/MissionCard';
import Header from 'components/Header';

const listMissions = /* GraphQL */ `
  query ListMissions($filter: ModelMissionFilterInput, $limit: Int, $nextToken: String) {
    listMissions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        link
        type
        users {
          items {
            userID
          }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export async function getServerSideProps({ req }) {
  const SSR = withSSRContext({ req });
  const response = await SSR.API.graphql({ query: listMissions });

  return {
    props: {
      missions: response.data.listMissions.items,
    },
  };
}

const profiles = [
  {
    name: 'Allanciano',
    image: '/assets/Allan.png',
    id: '05c2bb9a-4b4a-4665-a4e4-41536a902be9',
  },
  {
    name: 'Cedapai',
    image: '/assets/Cesar.png',
    id: 'c65afc41-959b-41c6-8b07-75b6254996a6',
  },
  {
    name: 'Lalo001',
    image: '/assets/Lalo.png',
    id: 'aa3985f1-0103-421e-a0b2-c38071dffae0',
  },
  {
    name: 'Pacurrio',
    image: '/assets/Paco.png',
    id: '6975d5c6-b9f2-4a61-8308-a5fab15435d3',
  },
];

const missionsMock = [
  {
    type: 'Main',
    title: 'Reclamation Day',
    link: 'https://fallout.fandom.com/wiki/Reclamation_Day',
  },
  {
    type: 'Main',
    title: 'First Contact',
    link: 'https://fallout.fandom.com/wiki/First_Contact',
  },
  {
    type: 'Main',
    title: 'Thirst Things First',
    link: 'https://fallout.fandom.com/wiki/Thirst_Things_First',
  },
  {
    type: 'Main',
    title: 'Second Helpings',
    link: 'https://fallout.fandom.com/wiki/Second_Helpings',
  },
  {
    type: 'Main',
    title: 'Final Departure',
    link: 'https://fallout.fandom.com/wiki/Final_Departure',
  },
  {
    type: 'Main',
    title: 'An Ounce of Prevention',
    link: 'https://fallout.fandom.com/wiki/An_Ounce_of_Prevention',
  },
  {
    type: 'Main',
    title: "Into the Fire\n• Runner's High",
    link: '',
  },
  {
    type: 'Main',
    title: 'The Missing Link',
    link: 'https://fallout.fandom.com/wiki/The_Missing_Link',
  },
  {
    type: 'Main',
    title: 'Signal Strength',
    link: 'https://fallout.fandom.com/wiki/Signal_Strength',
  },
  {
    type: 'Main',
    title: 'Flavors of Mayhem',
    link: 'https://fallout.fandom.com/wiki/Flavors_of_Mayhem',
  },
  {
    type: 'Main',
    title: 'Key to the Past',
    link: 'https://fallout.fandom.com/wiki/Key_to_the_Past',
  },
  {
    type: 'Main',
    title: 'Early Warnings',
    link: 'https://fallout.fandom.com/wiki/Early_Warnings',
  },
  {
    type: 'Main',
    title: 'Reassembly Required',
    link: 'https://fallout.fandom.com/wiki/Reassembly_Required',
  },
  {
    type: 'Main',
    title: 'Coming to Fruition',
    link: 'https://fallout.fandom.com/wiki/Coming_to_Fruition',
  },
  {
    type: 'Main',
    title: 'Defiance Has Fallen',
    link: 'https://fallout.fandom.com/wiki/Defiance_Has_Fallen',
  },
  {
    type: 'Main',
    title: 'Recruitment Blues',
    link: 'https://fallout.fandom.com/wiki/Recruitment_Blues',
  },
  {
    type: 'Main',
    title:
      'Back to Basic\n• Marksmanship Course\n• Agility Course\n• Patriotism Training\n• Live Fire Training Exercise',
    link: '',
  },
  {
    type: 'Main',
    title: 'Belly of the Beast',
    link: 'https://fallout.fandom.com/wiki/Belly_of_the_Beast',
  },
  {
    type: 'Main',
    title: 'Uncle Sam',
    link: 'https://fallout.fandom.com/wiki/Uncle_Sam',
  },
  {
    type: 'Main',
    title: 'Bunker Buster',
    link: 'https://fallout.fandom.com/wiki/Bunker_Buster',
  },
  {
    type: 'Main',
    title: 'One of Us',
    link: 'https://fallout.fandom.com/wiki/One_of_Us',
  },
  {
    type: 'Main',
    title: 'Officer on Deck',
    link: 'https://fallout.fandom.com/wiki/Officer_on_Deck',
  },
  {
    type: 'Main',
    title: 'I Am Become Death\n• Hide and Seek and Destroy\n• Mission: Countdown (silo site)',
    link: '',
  },
  {
    type: 'Side',
    title: 'Into the Mystery',
    link: 'https://fallout.fandom.com/wiki/Into_the_Mystery',
  },
  {
    type: 'Side',
    title: 'Initiate of Mysteries',
    link: 'https://fallout.fandom.com/wiki/Initiate_of_Mysteries',
  },
  {
    type: 'Side',
    title: 'Novice of Mysteries\n• Chasing Shadows\n• Forging a Legend\n• Prototypical Problems',
    link: '',
  },
  {
    type: 'Side',
    title: 'Seeker of Mysteries',
    link: 'https://fallout.fandom.com/wiki/Seeker_of_Mysteries',
  },
  {
    type: 'Side',
    title: 'The Mistress of Mystery',
    link: 'https://fallout.fandom.com/wiki/The_Mistress_of_Mystery',
  },
  {
    type: 'Side',
    title: 'Tentative Plans',
    link: 'https://fallout.fandom.com/wiki/Tentative_Plans',
  },
  {
    type: 'Side',
    title: 'Safe for Work',
    link: 'https://fallout.fandom.com/wiki/Safe_for_Work',
  },
  {
    type: 'Side',
    title: 'An Organic Solution',
    link: 'https://fallout.fandom.com/wiki/An_Organic_Solution',
  },
  {
    type: 'Side',
    title: 'Bureau of Tourism',
    link: 'https://fallout.fandom.com/wiki/Bureau_of_Tourism',
  },
  {
    type: 'Side',
    title: 'Claim Workshop at (location)',
    link: 'https://fallout.fandom.com/wiki/Claim_Workshop',
  },
  {
    type: 'Side',
    title: 'Cold Case',
    link: 'https://fallout.fandom.com/wiki/Cold_Case',
  },
  {
    type: 'Side',
    title: 'Death from Above!',
    link: 'https://fallout.fandom.com/wiki/Death_from_Above!',
  },
  {
    type: 'Side',
    title: 'Earth Mover',
    link: 'https://fallout.fandom.com/wiki/Earth_Mover',
  },
];

function Home({ missions = [] }) {
  const router = useRouter();
  const [profile, setProfile] = useState<any>(null);
  // const { mutate } = useCreateMission();

  useEffect(() => {
    const user = typeof window !== 'undefined' && localStorage.getItem('profile');
    if (!user) {
      router.push('/login');
    } else {
      const currentUser = profiles.find(profile => profile.name === user);
      setProfile(currentUser);
    }
  }, []);

  return (
    <Box padding='1rem'>
      <Header profile={profile} />
      <SimpleGrid columns={3} spacing={10}>
        {missions.map(mission => (
          <MissionCard {...mission} key={mission.id} user={profile} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Home;
