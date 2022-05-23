const categories = [
  { id: 1, name: "cat" },
  { id: 3, name: "dog" },
  { id: 6, name: "fish" },
  { id: 4, name: "owl" },
  { id: 5, name: "rat" },
  { id: 2, name: "rabbit" }
];

const animals = [
  { name: "Jason", species: "rabbit" },
  { name: "johnny", species: "rat" },
  { name: "Jessica", species: "dog" },
  { name: "Jacky", species: "owl" },
  { name: "james", species: "owl" },
  { name: "Luke", species: "fish" },
  { name: "Junior", species: "rat" },
  { name: "Thomas", species: "cat" },
  { name: "boby", species: "rat" }
];

let output = {};

const result = () => {
  for (let category of categories) {
    let value = animals.filter(
      (animal) => category.name === animal.species && animal
    );
    output = { ...output, [category.name]: value };
  }
  return output;
};

console.log(result());
