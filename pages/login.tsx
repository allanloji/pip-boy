import React from 'react';
import { Center, Flex } from '@chakra-ui/react';

import AvatarProfile from 'components/AvatarProfile';

const profiles = [
  {
    name: 'Allanciano',
    image: '/assets/Allan.png',
  },
  {
    name: 'Cedapai',
    image: '/assets/Cesar.png',
  },
  {
    name: 'Lalo001',
    image: '/assets/Lalo.png',
  },
  {
    name: 'Pacurrio',
    image: '/assets/Paco.png',
  },
];

function Home() {
  return (
    <Center h='100vh' w='100vw'>
      <Flex justify='space-between' w='60%'>
        {profiles.map(profile => (
          <AvatarProfile {...profile} />
        ))}
      </Flex>
    </Center>
  );
}

export default Home;
