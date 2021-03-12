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
}

function MissionCard({ id, title, link, type, user, status }: MissionCardProps) {
  const { mutate } = useAddMission();
  const toast = useToast();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <a>
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
            {title}
          </Box>

          <Flex>
            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size='sm' />

            <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' size='sm' />

            <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' size='sm' />
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
                          mutate({ userID: user.id, missionID: id, status: 'Complete' });
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
                          mutate({ userID: user.id, missionID: id, status: 'In Progress' });
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
                          mutate({ userID: user.id, missionID: id, status: 'Incomplete' });
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
    </a>
  );
}

export default MissionCard;
