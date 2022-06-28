import {
  GlobalizeProvider,
  loadCldr,
  loadMessages,
} from 'react-native-globalize';
import React, {useContext, useState} from 'react';
import locales, {LocaleEnum} from '../../locales';

loadCldr(
  require('react-native-globalize/locale-data/en'),
  require('react-native-globalize/locale-data/pt'),
);

type LocaleContextType = {
  locale: LocaleEnum;
  setLocale: (locale: LocaleEnum) => void;
};

const initialState: LocaleContextType = {
  locale: 'pt',
  setLocale: () => {},
};

const LocaleContext = React.createContext<LocaleContextType>(initialState);

export const LocaleProvider: React.FC<{children?: React.ReactNode}> = ({
  children,
}) => {
  const [locale, setLocale] = useState<LocaleContextType['locale']>('pt');

  loadMessages(locales);

  return (
    <LocaleContext.Provider value={{locale, setLocale}}>
      <GlobalizeProvider locale={locale}>{children}</GlobalizeProvider>
    </LocaleContext.Provider>
  );
};

export const useLocaleContext = () => useContext(LocaleContext);
