import React from 'react';
import { Box, SimpleGrid, Skeleton } from '@chakra-ui/react';

import MissionCard from 'components/MissionCard';
import Header from 'components/Header';
import { Mission } from 'src/API';
import useSession from 'utils/hooks/useSession';
import useMissions from 'utils/hooks/api/useMissions';

function Home() {
  const profile = useSession();
  const { data: missions, isLoading } = useMissions();
  // const { mutate } = useCreateMission();

  return (
    <Box padding='1rem'>
      <Header profile={profile} />
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {isLoading && [1, 2, 3, 4, 5, 6].map(mission => <Skeleton key={mission} height='100px' />)}
        {!isLoading &&
          missions?.data.listMissions.items.map((mission: Mission) => (
            <MissionCard {...mission} key={mission.id} user={profile} />
          ))}
      </SimpleGrid>
    </Box>
  );
}

export default Home;
