const readline = require(`readline`);

const rl = readline.createInterface({
  input: process.stdin,
});

rl.question("", function(name) {
  let [ codigo, quantidade ] = name.split(' ');
  rl.close()
  const tabela = [4, 4.5, 5, 2, 1.5];

  let tot = (quantidade * tabela[codigo - 1]).toFixed(2);

  console.log(`Total: R$ ${tot}`);
});
