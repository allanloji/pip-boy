import React from 'react';
import { Box, SimpleGrid, Skeleton } from '@chakra-ui/react';

import Header from 'components/Header';
import MissionCard from 'components/MissionCard';
import { UserMission } from 'src/API';
import useUser from 'utils/hooks/api/useUser';
import useSession from 'utils/hooks/useSession';

function InProgress() {
  const profile = useSession();
  const { data: missions, isLoading } = useUser(profile?.id, 'In Progress');

  return (
    <Box padding='1rem'>
      <Header profile={profile} />
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {isLoading && [1, 2, 3, 4, 5, 6].map(mission => <Skeleton key={mission} height='100px' />)}
        {!isLoading &&
          // @ts-ignore
          missions?.data.getUser.missions.items.map((mission: UserMission) => (
            <MissionCard
              id={mission.id}
              title={mission.mission?.title}
              link={mission.mission?.link}
              type={mission.mission?.type}
              key={mission.id}
              user={profile}
              status={mission.status}
              users={mission.mission?.users}
            />
          ))}
      </SimpleGrid>
    </Box>
  );
}

export default InProgress;
