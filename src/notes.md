const numbers = [1,2,3,4,5]
const mapNumbers = numbers.map(number => number**2)
console.log(mapNumbers)



const names = ['alice', 'bob', 'charlie', 'danielle']
const mapNames = names.map((name => {
  
  return name[0].toUpperCase() + name.slice(1)
  
}))
console.log(mapNames)


const pokemons = ['Bulbasaur', 'charmander', 'squirtle']
const mapPokemons = pokemons.map(pokemon =>`<p>${pokemon[0].toUpperCase() + pokemon.slice(1)}</p>`
)
console.log(mapPokemons)