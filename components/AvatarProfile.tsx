import React from 'react';
import { Avatar, Flex, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const selectProfile = (profile: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('profile', profile);
  }
};

interface AvatarProfileProps {
  name: string;
  image: string;
}

function AvatarProfile({ name, image }: AvatarProfileProps) {
  const router = useRouter();
  return (
    <Flex
      direction='column'
      textAlign='center'
      alignItems='center'
      _hover={{
        cursor: 'pointer',
      }}
      onClick={() => {
        selectProfile(name);
        router.push('/');
      }}
    >
      <Avatar name={name} src={image} size='2xl' mb='1rem' />
      <Text fontSize='2xl'>{name}</Text>
    </Flex>
  );
}

export default AvatarProfile;
