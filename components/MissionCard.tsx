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

import { User } from 'src/types';
import useAddMission from 'utils/hooks/api/useAddMission';
import useUpdateUserMission from 'utils/hooks/api/useUpdateUserMission';
import { Mission } from 'src/API';
import { profiles } from 'utils/profiles';

const tagColors: { [key: string]: string } = {
  Main: 'teal',
  Side: 'blue',
  Daily: 'cyan',
  Event: 'orange',
  Ally: 'purple',
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
  Complete: 'green',
  InProgress: 'yellow',
  Incomplete: 'red',
};

const getStatus = (status: string) => {
  const statusColor = statusColors[status.replace(/\s/g, '')];

  return (
    <Badge borderRadius='full' px='2' colorScheme={statusColor}>
      {status}
    </Badge>
  );
};

interface MissionCardProps extends Omit<Mission, '__typename'> {
  user?: User;
  status?: string | null;
}

function MissionCard({ id, title, link, type, user, status, users }: MissionCardProps) {
  const { mutate } = useAddMission();
  const { mutate: update } = useUpdateUserMission();
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

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
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
              <Avatar
                key={friendUser?.id}
                name={friendUser?.name}
                src={friendUser?.image}
                size='sm'
              />
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
                        onClick={() => changeStatus('Complete')}
                      >
                        Complete
                      </Button>
                      <Button
                        colorScheme='yellow'
                        size='xs'
                        onClick={() => changeStatus('In Progress')}
                      >
                        In Progress
                      </Button>
                      <Button
                        colorScheme='red'
                        size='xs'
                        onClick={() => changeStatus('Incomplete')}
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
    </Box>
  );
}

export default MissionCard;
