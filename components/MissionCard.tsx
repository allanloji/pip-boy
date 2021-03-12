import React, { useState } from 'react';
import {
  Button,
  Grid,
  GridItem,
  SimpleGrid,
  Flex,
  Box,
  Image,
  IconButton,
  Badge,
  Wrap,
  WrapItem,
  Avatar,
  Spacer,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverFooter,
  PopoverHeader,
  ButtonGroup,
  useToast,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import useAddMission from 'utils/hooks/api/useAddMission';
import useUpdateUserMission from 'utils/hooks/api/useUpdateUserMission';

const getTag = (type: string) => {
  if (type === 'Main') {
    return (
      <Badge borderRadius='full' px='2' colorScheme='teal'>
        {type}
      </Badge>
    );
  }
  if (type === 'Side') {
    return (
      <Badge borderRadius='full' px='2' colorScheme='blue'>
        {type}
      </Badge>
    );
  }
  if (type === 'Daily') {
    return (
      <Badge borderRadius='full' px='2' colorScheme='blue'>
        {type}
      </Badge>
    );
  }
  if (type === 'Event') {
    return (
      <Badge borderRadius='full' px='2' colorScheme='blue'>
        {type}
      </Badge>
    );
  }
  if (type === 'Ally') {
    return (
      <Badge borderRadius='full' px='2' colorScheme='blue'>
        {type}
      </Badge>
    );
  }
};

const getStatus = (status: string) => {
  if (status === 'Complete') {
    return (
      <Badge borderRadius='full' px='2' colorScheme='green'>
        {status}
      </Badge>
    );
  }

  if (status === 'In Progress') {
    return (
      <Badge borderRadius='full' px='2' colorScheme='yellow'>
        {status}
      </Badge>
    );
  }
  if (status === 'Incomplete') {
    return (
      <Badge borderRadius='full' px='2' colorScheme='red'>
        {status}
      </Badge>
    );
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

interface MissionCardProps {
  id: string;
  title: string;
  link: string;
  type: string;
  user: {
    name: string;
    image: string;
    id: string;
  };
  status?: string;
  users: any[];
}

function MissionCard({ id, title, link, type, user, status, users }: MissionCardProps) {
  const { mutate } = useAddMission();
  const { mutate: update } = useUpdateUserMission();
  const toast = useToast();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Box p='6'>
        <Box d='flex' alignItems='baseline'>
          {getTag(type)}
          {status && getStatus(status)}
          {/* <Badge borderRadius='full' px='2' colorScheme='red'>
              Incomplete
            </Badge> */}
        </Box>

        <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated fontSize='30px'>
          <a href={link} target='_blank'>
            {title}
          </a>
        </Box>

        <Flex>
          {users.items?.map(friend => {
            const friendUser = profiles.find(profile => profile.id === friend.userID);
            return <Avatar name={friendUser.name} src={friendUser.image} size='sm' />;
          })}

          <Spacer />
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
                      onClick={() => {
                        if (status) {
                          update({ id, status: 'Complete' });
                        } else {
                          mutate({ userID: user.id, missionID: id, status: 'Complete' });
                        }

                        toast({
                          title: 'Added to Complete',
                          status: 'success',
                          duration: 5000,
                          isClosable: true,
                        });
                        setIsOpen(false);
                      }}
                    >
                      Complete
                    </Button>
                    <Button
                      colorScheme='yellow'
                      size='xs'
                      onClick={() => {
                        if (status) {
                          update({ id, status: 'In Progress' });
                        } else {
                          mutate({ userID: user.id, missionID: id, status: 'In Progress' });
                        }
                        toast({
                          title: 'Added to In Progress',
                          status: 'success',
                          duration: 5000,
                          isClosable: true,
                        });
                        setIsOpen(false);
                      }}
                    >
                      In Progress
                    </Button>
                    <Button
                      colorScheme='red'
                      size='xs'
                      onClick={() => {
                        if (status) {
                          update({ id, status: 'Incomplete' });
                        } else {
                          mutate({ userID: user.id, missionID: id, status: 'Incomplete' });
                        }
                        toast({
                          title: 'Added to Incomplete',
                          status: 'success',
                          duration: 5000,
                          isClosable: true,
                        });
                        setIsOpen(false);
                      }}
                    >
                      Incomplete
                    </Button>
                  </ButtonGroup>
                </PopoverBody>
              </PopoverContent>
            </Portal>
          </Popover>
        </Flex>
      </Box>
    </Box>
  );
}

export default MissionCard;
