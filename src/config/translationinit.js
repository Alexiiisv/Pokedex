import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import fr from './translation/fr';
import en from './translation/en';

const resources = {en, fr};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});
