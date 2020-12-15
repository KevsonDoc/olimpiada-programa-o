const readline = require(`readline`);

const rl = readline.createInterface({
  input: process.stdin,
});

rl.question("", function(name) {
  const a = Number(name);
  let b = 1;
    while (b <= a) {
      console.log(b);
      b+= 2;
    }

  rl.close();

});
