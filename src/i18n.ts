import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';
import enMessages from './messages/en.json';
import itMessages from './messages/it.json';
 
// Can be imported from a shared config
const locales = ['en', 'it'];
 
const messages = {
  en: enMessages,
  it: itMessages
};

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
 
  return {
    messages: messages[locale as keyof typeof messages]
  };
});