import { useQuery } from 'react-query';

export const useCustomHook = () => {
  return useQuery('customHook', () => 'Hello');
};
