import { Flex, Avatar, Button, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useCreateMission from 'utils/hooks/api/useCreateMission';

const logout = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('profile');
  }
};

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

function Header({ profile }: any) {
  const router = useRouter();
  // const { mutate } = useCreateMission();
  return (
    <>
      <Flex justify='space-between' mb='2rem'>
        {profile && (
          <Flex direction='column' textAlign='center'>
            <Avatar name={profile.name} src={profile.image} size='xl' mb='1rem' />
            <Text fontSize='2xl'>{profile.name}</Text>
          </Flex>
        )}
        <Button
          colorScheme='red'
          float='right'
          onClick={() => {
            logout();
            router.push('/login');
          }}
        >
          Logout
        </Button>

        {/* <Button
          colorScheme='red'
          float='right'
          onClick={() => {
            missionsMock.forEach(mission => mutate({ ...mission }));
            console.log('acabo');
          }}
        >
          crear
        </Button> */}
      </Flex>
      <Stack spacing={4} direction='row' align='center' mb='1rem' flexWrap='wrap'>
        <Button colorScheme='blue' size='sm' onClick={() => router.push('/')} mb='1rem'>
          All
        </Button>
        <Button colorScheme='teal' size='sm' onClick={() => router.push('/mine')} mb='1rem'>
          Mine
        </Button>
        <Button colorScheme='green' size='sm' onClick={() => router.push('/complete')} mb='1rem'>
          Complete
        </Button>
        <Button colorScheme='yellow' size='sm' onClick={() => router.push('/inProgress')} mb='1rem'>
          In Progress
        </Button>
        <Button colorScheme='red' size='sm' onClick={() => router.push('/incomplete')} mb='1rem'>
          Incomplete
        </Button>
      </Stack>
    </>
  );
}

export default Header;
