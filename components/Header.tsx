import React from 'react';
import { Flex, Avatar, Button, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { User } from 'src/types';

const logout = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('profile');
  }
};

interface HeaderProps {
  profile?: User;
}

function Header({ profile }: HeaderProps) {
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
