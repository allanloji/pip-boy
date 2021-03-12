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
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {missions.map(mission => (
          <MissionCard {...mission} key={mission.id} user={profile} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Home;
