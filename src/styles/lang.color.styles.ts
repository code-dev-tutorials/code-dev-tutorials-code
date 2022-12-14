interface ILangColor {
  Lang: string;
  backgroundColor: string;
  textColor: string;
}

const langColorData = {
  text: [ '#666666', '#ffffff', ],
  html: [ '#f47933', '#ffffff', ],
  js: [ '#e6a323', '#333333', ],
  javascript: [ '#e6a323', '#333333', ],
  ts: [ '#007acc', '#ffffff', ],
  typescript: [ '#007acc', '#ffffff', ],
  css: [ '#007bc9', '#ffffff', ],
  scss: [ '#007bc9', '#ffffff', ],
  python: [ '#007ff4', '#ffffff', ],
  cs: [ '#67217a', '#ffffff', ],
  csharp: [ '#67217a', '#ffffff', ],
  c: [ '#00589d', '#ffffff', ],
  jsx: [ '#61dafb', '#ffffff', ],
  tsx: [ '#007acc', '#ffffff', ],
  bash: [ '#666666', '#ffffff', ],
  json: [ '#666666', '#ffffff', ],
};

export const langColorStyle = (text: string): ILangColor => {
  let Lang: string = text.toUpperCase();

  return {
    Lang,
    backgroundColor: langColorData[text][0],
    textColor: langColorData[text][1],
  };
};
