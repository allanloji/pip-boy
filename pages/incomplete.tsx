import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Skeleton } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import Header from 'components/Header';
import MissionCard from 'components/MissionCard';
import useUser from 'utils/hooks/api/useUser';
import { User } from 'src/types';
import { UserMission } from 'src/API';

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

function Incomplete() {
  const router = useRouter();
  const [profile, setProfile] = useState<User | undefined>(undefined);
  const { data: missions, isLoading } = useUser(profile?.id, 'Incomplete');

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
        {isLoading && [1, 2, 3, 4, 5, 6].map(mission => <Skeleton key={mission} height='100px' />)}
        {!isLoading &&
          // @ts-ignore
          missions?.data?.getUser.missions.items.map((mission: UserMission) => (
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

export default Incomplete;
