"use client";

import { cloneElement } from "react";
import settings from "./frontendSettings";
import translations from "./translations";
import imgTab from "../public/images/team/4.png";
import imgEnry from "../public/images/team/3.png";
import imgPipo from "../public/images/team/6.png";
import imgAdi from "../public/images/team/7.png";
import imgAxel from "../public/images/team/1.png";
import imgAbra from "../public/images/team/5.png";
import imgPari from "../public/images/team/8.png";
import imgMilena from "../public/images/team/10.png";

export function isDesktop(size) {
  return size > settings.mobileView;
}
export function shouldTranslate(string) {
  if (string === null || string === undefined) {
    return true;
  }
  return false;
}
export function translateText(translationPath, lang, replace) {
  let lastVal = translations;
  const splitted = translationPath.split("/");
  for (let i = 0; i < splitted.length; i++) {
    lastVal = lastVal[splitted[i]];
  }
  const finalVal = lastVal[lang]
    ? lastVal[lang]
    : lastVal[settings.languages.default];
  if (replace && replace.length > 0) {
    const children = [finalVal.props.children];
    let newStr = "";
    children.map((ch) => {
      if (typeof ch === "string") {
        replace.map((el) => {
          if (ch.includes(el.placeholder)) {
            newStr += ch.replace(el.placeholder, el.val);
          } else {
            newStr += ch;
          }
        });
      }
    });
    return cloneElement(finalVal, { children: newStr });
  }
  return finalVal;
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
console.log(process.env.NEXT_PUBLIC_IS_TESTING_ENV);
export const discordLink =
  process.env.NEXT_PUBLIC_IS_TESTING_ENV === "true"
    ? "https://discord.com/api/oauth2/authorize?client_id=1122867395720134716&redirect_uri=http%3A%2F%2Flocalhost%3A3500%2Flogin%2Fdiscord%2Fcallback&response_type=code&scope=identify"
    : "https://discord.com/api/oauth2/authorize?client_id=1122867395720134716&redirect_uri=https%3A%2F%2Feclecticqbit.art%2Fapi%2Flogin%2Fdiscord%2Fcallback&response_type=code&scope=identify";

export function getTeamImages() {
  return [
    imgTab,
    imgEnry,
    imgPipo,
    imgAdi,
    imgAxel,
    imgAbra,
    imgPari,
    imgMilena,
  ];
}
export function getImageFromIndex(index, specialType) {
  const arr = getTeamImages();
  if (index === -1) {
    return specialType;
  } else {
    return arr[index];
  }
}
