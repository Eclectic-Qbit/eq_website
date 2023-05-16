import settings from "./frontendSettings";
import translations from "./translations";

export function translateText(translationPath, lang) {
  let lastVal = translations;
  const splitted = translationPath.split("/");
  for (let i = 0; i < splitted.length; i++) {
    lastVal = lastVal[splitted[i]];
  }
  return lastVal[lang] ? lastVal[lang] : lastVal[settings.defaultLang];
}
