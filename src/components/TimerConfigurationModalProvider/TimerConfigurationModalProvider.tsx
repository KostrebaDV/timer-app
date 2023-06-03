import { createContext, FC, PropsWithChildren, useCallback, useState } from 'react';
import { TimerConfigurationModalContextProps } from './types';
import { TimerConfigurationModal } from './TimerConfigurationModal';

export const  TimerConfigurationModalContext = createContext<TimerConfigurationModalContextProps>({
  handelModalOpen: () => null,
  handelModalClose: () => null,
});

export const TimerConfigurationModalProvider: FC<PropsWithChildren> = (
  {
    children
  }
) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handelModalOpen = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handelModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <TimerConfigurationModalContext.Provider value={{
      handelModalOpen,
      handelModalClose
    }}>
      {children}
      <TimerConfigurationModal isOpen={isModalOpen} handelModalClose={handelModalClose} />
    </TimerConfigurationModalContext.Provider>
  );
};