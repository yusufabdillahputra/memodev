import en from './en.json'
import id from './id.json'

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: ['id', 'en'],
  locale: 'id',
  messages: {
    "en": en,
    "id": id,
  },
}))
