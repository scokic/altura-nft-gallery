import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  const queryClient = new QueryClient();

  // we can add more providers here for other libraries
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default Providers;
