import useSWR from 'swr';

export const useGetUser = () => {
  const { data, error } = useSWR('/user', fetcher);

  return { data, error };
};
