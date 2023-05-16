console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (data) => {
  const inp = data.trim();
  if (inp) {
    console.log(`Your name is: ${inp}`);
  }
});
process.stdin.on('end', () => console.log('This important software is now closing'));
