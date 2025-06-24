import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({locale}) => ({
  // The path is now relative to the root of the project
  messages: (await import(`./messages/${locale}.json`)).default
}));
