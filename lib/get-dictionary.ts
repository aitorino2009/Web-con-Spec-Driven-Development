/**
 * lib/get-dictionary.ts
 * Utilidad para cargar los diccionarios i18n de forma asíncrona en Server Components.
 */

const dictionaries: Record<string, () => Promise<any>> = {
  es: () => import('../dictionaries/es.json').then((module) => module.default),
  en: () => import('../dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = async (lang: string) => {
  // Fallback al español si el idioma de la URL no coincide con uno soportado
  const dictionaryLoader = dictionaries[lang] || dictionaries['es'];
  return dictionaryLoader();
};
