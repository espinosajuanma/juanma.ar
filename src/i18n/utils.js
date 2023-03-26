import { ui, defaultLang, languages } from './ui';

export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang;
  return defaultLang;
}

export function getUrlForLanguage(url, lang) {
    const current = getLangFromUrl(url);
    let rx = new RegExp(`/${current}`)
    return url.pathname.replace(rx, `/${lang}`)
}

export function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getLanguages() {
    return Object.keys(languages);
}