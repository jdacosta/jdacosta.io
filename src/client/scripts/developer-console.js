// set 4 lines of text
const text = {
  l0: 'Credits:',
  l1: '- Julien Martins Da Costa @DCJulien',
  l2: '- Romain Passelande @RomainPSD',
  l3: '',
};

// get the value of the longest line
const max = Math.max(
  text.l0.length,
  text.l1.length,
  text.l2.length,
  text.l3.length,
) + 2;

// get the number of space to be inserted for each line
const space = {
  l0: max - (text.l0.length + 2),
  l1: max - (text.l1.length + 2),
  l2: max - (text.l2.length + 2),
  l3: max - (text.l3.length + 2),
};

// character ASCII generator
function generator(char, number) {
  let out = '';
  for (let i = 0; i < number; i += 1) {
    out += char;
  }
  return out;
}

// create banner
let banner;
banner = '\n';
banner += `               ╔${generator('═', max)}╗\n`;
banner += ` ╔═════════════╣ ${text.l0}${generator(' ', space.l0)} ║\n`;
banner += ` ║ JDACOSTA.IO ║ ${text.l1}${generator(' ', space.l1)} ║\n`;
banner += ` ║ PORTFOLIO   ║ ${text.l2}${generator(' ', space.l2)} ║\n`;
banner += ` ╚═════════════╣ ${text.l3}${generator(' ', space.l3)} ║\n`;
banner += `               ╚${generator('═', max)}╝\n`;

// display result
console.log(`%c${banner}`, 'color:#f64941;font-size:11px;');﻿
