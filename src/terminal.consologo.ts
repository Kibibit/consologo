import KbError from '@kibibit/kb-error';
import chalk from 'chalk';

const log = console.log;
const r = chalk.red;
const y = chalk.yellow;
const b = chalk.blue;

export function terminalConsoleLogo(productName: string, applicationInfo: string | string[]) {
  if (!productName) {
    throw new KbError('must pass a valid product name');
  }

  log(chalk.bgBlack.white(['\n',
    ' ⣶⣶⡆⠀⠀⠀⠀⠀⠀', r('⣴⣿⣶'), '⠀⢰⣶⣶⠀⠀⠀⠀⠀⠀⠀⠀', b('⣴⣿⣶'), '⠀⢰⣶⣶⠀⠀⠀⠀⠀⠀⠀⠀', y('⣴⣿⣶'), '⠀⠀⣶⣶⡄⠀⠀⠀ \n',
    ' ⣿⣿⡇⠀⠀⠀⠀⠀⠀', r('⠈⠛⠋'), '⠀⢸⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀', b('⠈⠛⠋'), '⠀⢸⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀', y('⠈⠛⠋'), '⠀⠀⣿⣿⡇⠀⠀⠀ \n',
    ' ⣿⣿⡇⠀⢀⣴⣿⡟⠁', r('⢸⣿⡇'), '⠀⢸⣿⣿⣾⣿⣿⣿⣷⣄⠀⠀', b('⢸⣿⡇'), '⠀⢸⣿⣿⣾⣿⣿⣿⣷⣄⠀⠀', y('⢸⣿⡇'), '⠀⣿⣿⣿⣿⣿⣿⣿ \n',
    ' ⣿⣿⡇⣠⣿⡿⠋⠀⠀', r('⢸⣿⡇'), '⠀⢸⣿⣿⠟⠁⠀⠉⢿⣿⣧⠀', b('⢸⣿⡇'), '⠀⢸⣿⣿⠟⠁⠀⠉⢿⣿⣧⠀', y('⢸⣿⡇'), '⠀⠉⣿⣿⡏⠉⠉⠉ \n',
    ' ⣿⣿⣿⣿⣿⣿⡄⠀⠀', r('⢸⣿⡇'), '⠀⢸⣿⣿⠀⠀⠀⠀⢸⣿⣿⠀', b('⢸⣿⡇'), '⠀⢸⣿⣿⠀⠀⠀⠀⢸⣿⣿⠀', y('⢸⣿⡇'), '⠀⠀⣿⣿⡇⠀⠀⠀ \n',
    ' ⣿⣿⡿⠋⠙⣿⣿⣄⠀', r('⢸⣿⡇'), '⠀⠀⢻⣿⣷⣤⣤⣴⣿⣿⠃⠀', b('⢸⣿⡇'), '⠀⠀⢻⣿⣷⣤⣤⣴⣿⣿⠃⠀', y('⢸⣿⡇'), '⠀⠀⠹⣿⣷⣦⣤⣤ \n',
    ' ⠛⠛⠃⠀⠀⠘⠛⠛⠂', r('⠘⠛⠃'), '⠀⠀⠀⠉⠛⠿⠿⠟⠋⠁⠀⠀', b('⠘⠛⠃'), '⠀⠀⠀⠉⠛⠿⠿⠟⠋⠁⠀⠀', y('⠘⠛⠃'), '⠀⠀⠀⠈⠛⠛⠛⠛ \n'
  ].join('')));

  const totalWidth = 50;
  const title = `  ${ productName }  `;
  const separator = '-----';

  log(getIndentation(totalWidth, title) + chalk.bgYellow.black(title));
  log(getIndentation(totalWidth, separator) + chalk.gray(separator));
  if (applicationInfo) {
    if (Array.isArray(applicationInfo)) {
      applicationInfo.forEach((line) => {
        log(getIndentation(totalWidth, line) + chalk.gray(line));
      });
      log('\n');
    } else {
      log(getIndentation(totalWidth, applicationInfo) + chalk.gray(`${applicationInfo}\n`));
    }
  }
}

function getIndentation(totalWidth: number, str: string) {
  const halfWidth = Math.floor(totalWidth / 2);
  const halfChars = Math.floor(str.length / 2);

  return ' '.repeat(halfWidth - halfChars);
}