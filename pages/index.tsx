import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  SimpleGrid,
  Skeleton,
} from '@chakra-ui/react';
import debounce from 'lodash.debounce';
import { DataStore } from 'aws-amplify';

import MissionCard from 'components/MissionCard';
import Header from 'components/Header';
import { Mission, ModelMissionFilterInput } from 'src/API';
import useSession from 'utils/hooks/useSession';
import useMissions from 'utils/hooks/api/useMissions';
import { SearchIcon } from '@chakra-ui/icons';
import { Mission as MissionDS } from 'src/models';

function Home() {
  const profile = useSession();
  const [filterParams, setFilterParams] = useState<ModelMissionFilterInput>({});
  const { data: missions, isLoading } = useMissions({ filter: filterParams });
  // const { mutate } = useCreateMission();

  const searchDebouncedUpdate = debounce(
    (value: string) =>
      setFilterParams(prevState => {
        return { ...prevState, title: { beginsWith: value } };
      }),
    500,
  );

  // useEffect(async () => {
  //   try {
  //     const posts = await DataStore.query(MissionDS);
  //     console.log('Posts retrieved successfully!', JSON.stringify(posts, null, 2));
  //   } catch (error) {
  //     console.log('Error retrieving posts', error);
  //   }
  // }, []);

  return (
    <Box padding='1rem'>
      <Header profile={profile} />
      <Flex mb='2rem'>
        <InputGroup width='500px'>
          <InputLeftElement pointerEvents='none' children={<SearchIcon color='gray.300' />} />
          <Input
            type='text'
            placeholder='Search'
            onChange={e => searchDebouncedUpdate(e.target.value)}
          />
        </InputGroup>

        <Select
          placeholder='All'
          onChange={e =>
            setFilterParams((prevState: any) => {
              const value = e.target.value;

              if (value === '') {
                const { type, ...newState } = prevState;
                return { ...newState };
              }
              return { ...prevState, type: { eq: e.target.value } };
            })
          }
          width='200px'
        >
          <option value='MAIN'>Main</option>
          <option value='SIDE'>Side</option>
          <option value='ALLY'>Ally</option>
          <option value='DAILY'>Daily</option>
          <option value='EVENT'>Event</option>
        </Select>
      </Flex>

      <SimpleGrid minChildWidth='300px' spacing={10}>
        {isLoading && [1, 2, 3, 4, 5, 6].map(mission => <Skeleton key={mission} height='100px' />)}
        {!isLoading &&
          // @ts-ignore
          missions?.data.listMissions.items.map((mission: Mission) => (
            <MissionCard {...mission} key={mission.id} user={profile} />
          ))}
      </SimpleGrid>
    </Box>
  );
}

export default Home;
