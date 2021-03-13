import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import { withSSRContext } from 'aws-amplify';

import MissionCard from 'components/MissionCard';
import Header from 'components/Header';
import { Mission } from 'src/API';
import useSession from 'utils/hooks/useSession';

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

export async function getServerSideProps({ req }: any) {
  const SSR = withSSRContext({ req });
  const response = await SSR.API.graphql({ query: listMissions });

  return {
    props: {
      missions: response.data.listMissions.items,
    },
  };
}

interface HomeProps {
  missions: Mission[];
}

function Home({ missions = [] }: HomeProps) {
  const profile = useSession();
  // const { mutate } = useCreateMission();

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
