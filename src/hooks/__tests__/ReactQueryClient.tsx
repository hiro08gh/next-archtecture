import { QueryClient, QueryClientProvider } from 'react-query';

type Props = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();
export const wrapper: React.VFC<Props> = ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
