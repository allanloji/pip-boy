import React from 'react';
import {
  Grid,
  GridItem,
  SimpleGrid,
  Box,
  Image,
  Badge,
  Wrap,
  WrapItem,
  Avatar,
} from '@chakra-ui/react';

interface MissionCardProps {
  title: string;
  link: string;
  type: string;
}

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
};

function MissionCard({ title, link, type }: MissionCardProps) {
  return (
    <a href={link}>
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Box p='6'>
          <Box d='flex' alignItems='baseline'>
            {getTag(type)}
            {/* <Badge borderRadius='full' px='2' colorScheme='red'>
              Incomplete
            </Badge> */}
          </Box>

          <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated fontSize='30px'>
            {title}
          </Box>

          <Wrap>
            <WrapItem>
              <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size='sm' />
            </WrapItem>
            <WrapItem>
              <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' size='sm' />
            </WrapItem>
            <WrapItem>
              <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' size='sm' />
            </WrapItem>
          </Wrap>
        </Box>
      </Box>
    </a>
  );
}

export default MissionCard;
