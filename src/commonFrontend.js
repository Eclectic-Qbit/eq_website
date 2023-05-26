import settings from "./frontendSettings";
import translations from "./translations";
const REFER_TO_GITHUB = true;

export function shouldTranslate(string) {
  if (string === null || string === undefined) {
    return true;
  }
  return false;
}
export function finalMediaLink(path) {
  return `${
    REFER_TO_GITHUB
      ? `https://raw.githubusercontent.com/Eclectic-Qbit/eq_website/main/public/${path}`
      : path
  }`;
}
export function translateText(translationPath, lang) {
  let lastVal = translations;
  const splitted = translationPath.split("/");
  for (let i = 0; i < splitted.length; i++) {
    lastVal = lastVal[splitted[i]];
  }
  return lastVal[lang] ? lastVal[lang] : lastVal[settings.defaultLang];
}
export function downloadFile(file) {
  var downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(file);
  downloadLink.download = "image.json";
  downloadLink.click();
}
