import React, { useState } from 'react';
import { Box, Flex, Select, SimpleGrid, Skeleton } from '@chakra-ui/react';

import MissionCard from 'components/MissionCard';
import Header from 'components/Header';
import { UserMission } from 'src/API';
import useUser from 'utils/hooks/api/useUser';
import useSession from 'utils/hooks/useSession';

function Mine() {
  const profile = useSession();

  const [filterParams, setFilterParams] = useState<string>('');
  const { data: missions, isLoading } = useUser(profile?.id, filterParams);

  return (
    <Box padding='1rem'>
      <Header profile={profile} />
      <Flex mb='2rem'>
        <Select
          placeholder='All'
          onChange={e => {
            const value = e.target.value;
            setFilterParams(value);
          }}
          width='200px'
        >
          <option value='COMPLETE'>Complete</option>
          <option value='IN_PROGRESS'>In Progress</option>
          <option value='INCOMPLETE'>Incomplete</option>
        </Select>
      </Flex>
      <SimpleGrid minChildWidth='300px' spacing={10}>
        {isLoading && [1, 2, 3, 4, 5, 6].map(mission => <Skeleton key={mission} height='100px' />)}
        {!isLoading &&
          // @ts-ignore
          missions?.data.getUser.missions.items.map((mission: UserMission) => (
            <MissionCard
              id={mission.id}
              image={mission.mission?.image}
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

export default Mine;
