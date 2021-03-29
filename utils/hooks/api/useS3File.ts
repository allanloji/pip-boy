import { Storage } from 'aws-amplify';
import { useQuery } from 'react-query';

type QueryKey = [string];

type QueryParams = {
  queryKey: QueryKey;
};

const getSignedURL = ({ queryKey }: QueryParams) => {
  const [key] = queryKey;
  return Storage.get(key);
};

function useS3File(key?: string | null) {
  // @ts-ignore
  return useQuery(key, getSignedURL, {
    refetchOnWindowFocus: false,
    enabled: key != null && key !== '',
  });
}

export default useS3File;
