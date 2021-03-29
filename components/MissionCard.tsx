import React, { useState } from 'react';
import {
  Button,
  Flex,
  Box,
  IconButton,
  Badge,
  Avatar,
  Spacer,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverHeader,
  ButtonGroup,
  useToast,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useQueryClient } from 'react-query';
import styled from '@emotion/styled';

import { User } from 'src/types';
import useAddMission from 'utils/hooks/api/useAddMission';
import useUpdateUserMission from 'utils/hooks/api/useUpdateUserMission';
import { Mission } from 'src/API';
import { profiles } from 'utils/profiles';
import useS3File from 'utils/hooks/api/useS3File';

const tagColors: { [key: string]: string } = {
  MAIN: 'teal',
  SIDE: 'blue',
  DAILY: 'cyan',
  EVENT: 'orange',
  ALLY: 'purple',
};

const getTag = (type: string) => {
  const tagColor = tagColors[type];

  return (
    <Badge borderRadius='full' px='2' colorScheme={tagColor}>
      {type}
    </Badge>
  );
};

const statusColors: { [key: string]: string } = {
  COMPLETE: 'green',
  IN_PROGRESS: 'yellow',
  INCOMPLETE: 'red',
};

const getStatus = (status: string) => {
  const statusColor = statusColors[status.replace('', '')];

  return (
    <Badge borderRadius='full' px='2' colorScheme={statusColor}>
      {status.replace('_', ' ')}
    </Badge>
  );
};

const Container = styled.div`
  width: 300px;
  height: 320px;
  border-radius: 10%;
  background-color: white;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(166, 173, 201, 0.2);
  overflow: hidden;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

type ImageProps = {
  image: string;
};

const ImageContainer = styled.div<ImageProps>`
  position: relative;
  width: 100%;
  height: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: ${({ image }: ImageProps) =>
    `url(${image || 'https://www.pngkey.com/png/full/353-3534671_muy-bien-png-vault-boy.png'})`};
`;

interface MissionCardProps extends Omit<Mission, '__typename'> {
  user?: User;
  status?: string | null;
}

function MissionCard({ id, image, title, link, type, user, status, users }: MissionCardProps) {
  const queryClient = useQueryClient();
  const mutateConfig = {
    onSettled: () => {
      queryClient.invalidateQueries('missions');
    },
  };
  const { mutate } = useAddMission(mutateConfig);
  const updateConfig = {
    onSettled: () => {
      queryClient.invalidateQueries('user');
    },
  };
  const { data: imageURL } = useS3File(image);
  const { mutate: update } = useUpdateUserMission(updateConfig);
  const toast = useToast();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const isTracked = users?.items?.find(friend => friend?.userID === user?.id) !== undefined;

  const changeStatus = (newStatus: string) => {
    if (status) {
      // @ts-ignore
      update({ id, status: newStatus });
    } else {
      // @ts-ignore
      mutate({ userID: user.id, missionID: id, status: newStatus });
    }

    toast({
      title: `Added to ${newStatus}`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    setIsOpen(false);
  };

  console.log(imageURL);

  const getImage = () => {
    if (image === '' || image?.includes('http')) {
      return image;
    }

    return imageURL;
  };

  return (
    <Container>
      {/* @ts-ignore */}
      <ImageContainer image={getImage()} />
      <Box p='6'>
        <Box d='flex' alignItems='baseline'>
          {type && getTag(type)}
          {status && getStatus(status)}
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
          fontSize={['20px', '30px']}
        >
          <a href={link} target='_blank'>
            {title}
          </a>
        </Box>

        <Flex>
          {users?.items?.map(friend => {
            const friendUser = profiles.find(profile => profile.id === friend?.userID);
            return (
              <Popover key={friendUser?.id}>
                <PopoverTrigger>
                  <Avatar name={friendUser?.name} src={friendUser?.image} size='sm' />
                </PopoverTrigger>
                {friend?.status && (
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>{friendUser?.name}</PopoverHeader>
                    <PopoverBody>{getStatus(friend.status)}</PopoverBody>
                  </PopoverContent>
                )}
              </Popover>
            );
          })}

          <Spacer />
          {(!isTracked || status) && (
            <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
              <PopoverTrigger>
                <IconButton
                  colorScheme='blue'
                  aria-label='Search database'
                  icon={<AddIcon />}
                  onClick={() => setIsOpen(true)}
                />
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>Add to</PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>
                    <ButtonGroup variant='outline' spacing='6'>
                      <Button
                        colorScheme='green'
                        size='xs'
                        onClick={() => changeStatus('COMPLETE')}
                      >
                        Complete
                      </Button>
                      <Button
                        colorScheme='yellow'
                        size='xs'
                        onClick={() => changeStatus('IN_PROGRESS')}
                      >
                        In Progress
                      </Button>
                      <Button
                        colorScheme='red'
                        size='xs'
                        onClick={() => changeStatus('INCOMPLETE')}
                      >
                        Incomplete
                      </Button>
                    </ButtonGroup>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          )}
        </Flex>
      </Box>
    </Container>
  );
}

export default MissionCard;
