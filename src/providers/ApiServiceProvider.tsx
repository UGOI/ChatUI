import React, { ReactNode, useContext, createContext } from 'react';
import { MockAPIService } from '../api/MockAPIService';

const ApiServiceContext = createContext<MockAPIService | null>(null);

interface ApiServiceProviderProps {
    children: ReactNode;
    serviceFactory: () => MockAPIService;
  }
  
  export const ApiServiceProvider: React.FC<ApiServiceProviderProps> = ({ serviceFactory, children }) => {
    const apiService = serviceFactory();
  
    return (
      <ApiServiceContext.Provider value={apiService}>
        {children}
      </ApiServiceContext.Provider>
    );
  }
  

export const useApiService = () => {
  const context = useContext(ApiServiceContext);

  if (context === null) {
    throw new Error('useApiService must be used within an ApiServiceProvider');
  }

  return context;
}