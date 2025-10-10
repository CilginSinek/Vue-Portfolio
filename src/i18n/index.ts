import { createI18n } from 'vue-i18n'
import tr from './locales/tr.json'
import en from './locales/en.json'

const messages = {
  tr,
  en
}

// Tarayıcı dilini algıla
const getBrowserLocale = (): string => {
  const browserLang = navigator.language.split('-')[0]
  return ['tr', 'en'].includes(browserLang) ? browserLang : 'tr'
}

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') || getBrowserLocale(),
  fallbackLocale: 'tr',
  messages,
  globalInjection: true
})

export default i18n
