export function webConsolelogo(productName: string, applicationInfo?: string | string[]) {
  const subStyle = `
padding: .1em 0;
color: rgb(98, 98, 108);
font-size: 2em;
font-weight: bold;
`.trim();

  const imageStyle = `
color: transparent;
display: inline-block;
background-color: transparent;
background-image: url('http://kibibit.io/kibibit-assets/1x/long-white.png');
background-size: cover;
padding: 0 ${50 * 3.6}px 50px 0;
border: none;
font-size: 11px;
line-height: 11px;
font-family: monospace;
`.trim();

  console.log("%ckibibit", imageStyle);
  console.log(`%c${productName}`, subStyle);
  console.groupCollapsed("application info");
  if (applicationInfo) {
    Array.isArray(applicationInfo)
      ? console.log(`${applicationInfo.join("\n")}\n`)
      : console.log(`${applicationInfo}\n`);
  }
  console.groupEnd();
}
