import settings from "./frontendSettings";
import translations from "./translations";
export function isDesktop(size) {
  return size > settings.mobileView;
}
export function shouldTranslate(string) {
  if (string === null || string === undefined) {
    return true;
  }
  return false;
}
export function translateText(translationPath, lang) {
  let lastVal = translations;
  const splitted = translationPath.split("/");
  for (let i = 0; i < splitted.length; i++) {
    lastVal = lastVal[splitted[i]];
  }
  return lastVal[lang] ? lastVal[lang] : lastVal[settings.languages.default];
}
export function downloadFile(file, type) {
  if (!type || type === "file") {
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(file);
    downloadLink.download = "image.json";
    downloadLink.click();
  } else {
    const splittedUrl = file.split("/");
    const fileUrl = file;
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = splittedUrl[splittedUrl.length - 1];
    anchor.click();
  }
}
