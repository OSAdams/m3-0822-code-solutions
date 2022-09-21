fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => {
    console.log('----DATA----');
    console.log(data);
  })
  .catch(err => console.error({ error: err }));

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(res => res.json())
  .then(data => {
    console.log('---POKEMON---');
    console.log(data);
  })
  .catch(err => console.error({ error: err }));
