import CN from "./cn";
import EN from "./en";

export type { LocaleType } from "./cn";

export const AllLangs = [
  "en",
  "cn",
] as const;
export type Lang = (typeof AllLangs)[number];

const LANG_KEY = "lang";

function getItem(key: string) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function setItem(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

function getLanguage() {
  try {
    return navigator.language.toLowerCase();
  } catch {
    return "cn";
  }
}

export function getLang(): Lang {
  const savedLang = getItem(LANG_KEY);

  if (AllLangs.includes((savedLang ?? "") as Lang)) {
    return savedLang as Lang;
  }

  const lang = getLanguage();

  for (const option of AllLangs) {
    if (lang.includes(option)) {
      return option;
    }
  }

  return "en";
}

export function changeLang(lang: Lang) {
  setItem(LANG_KEY, lang);
  location.reload();
}

export default {
  en: EN,
  cn: CN,
}[getLang()] as typeof CN;
