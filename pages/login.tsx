import React from 'react';
import { Center, Flex } from '@chakra-ui/react';

import AvatarProfile from 'components/AvatarProfile';
import { profiles } from 'utils/profiles';

function Home() {
  return (
    <Center h={['100%', '100vh']} w='100vw'>
      <Flex justify='space-between' w='60%' direction={['column', 'row']} wrap='wrap'>
        {profiles.map(profile => (
          <AvatarProfile {...profile} />
        ))}
      </Flex>
    </Center>
  );
}

export default Home;
