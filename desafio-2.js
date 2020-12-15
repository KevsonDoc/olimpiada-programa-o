const readline = require(`readline`);

const rl = readline.createInterface({
  input: process.stdin,
});

rl.question("", function(name) {
  const a = name.split(' ');
  let b = name.split(' ').slice();
  b.sort(function(a, b){return a-b});

  rl.close();

  console.log(`${b[0]}\n${b[1]}\n${b[2]}\n\n${a[0]}\n${a[1]}\n${a[2]}`);

});
