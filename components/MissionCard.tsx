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

function MissionCard() {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Box p='6'>
        <Box d='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            Main
          </Badge>
          <Badge borderRadius='full' px='2' colorScheme='red'>
            Incomplete
          </Badge>
        </Box>

        <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' isTruncated fontSize='40px'>
          Reclamation Day
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
  );
}

export default MissionCard;
