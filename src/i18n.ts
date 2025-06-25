import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({locale}) => {
  // The middleware (`middleware.ts`) is responsible for validating
  // that the incoming `locale` parameter is valid.
  // This function is only called for valid locales.
  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
