import { ui, defaultLang, type SupportedLanguage } from './ui';

export function getLangFromUrl(url: URL): SupportedLanguage {
  const baseUrl = import.meta.env.BASE_URL;
  let pathname = url.pathname;

  if (baseUrl !== '/' && pathname.startsWith(baseUrl)) {
    pathname = pathname.replace(baseUrl, '/');
  }

  const segments = pathname.split('/').filter(Boolean);
  const possibleLang = segments[0] as SupportedLanguage;

  if (possibleLang && possibleLang in ui) {
    return possibleLang;
  }
  return defaultLang;
}

export function useTranslations(lang: SupportedLanguage) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return (ui[lang] as Record<string, string>)?.[key] ?? ui[defaultLang][key];
  };
}

export function useTranslatedPath(currentLang: SupportedLanguage) {
  return function translatePath(path: string = '/', targetLang?: SupportedLanguage): string {
    const langToUse = targetLang || currentLang;
    const baseUrl = import.meta.env.BASE_URL;
    const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
    
    // Clean leading slash from target path if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    if (langToUse === defaultLang) {
      return `${cleanBase}${cleanPath}`;
    }
    return `${cleanBase}${langToUse}/${cleanPath}`;
  };
}
