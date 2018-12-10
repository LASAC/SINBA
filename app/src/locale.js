export const Locale = {
  en: 'en',
  pt: 'pt'
}

export const secureLocale = locale => (Locale[locale] ? locale : Locale.en)
