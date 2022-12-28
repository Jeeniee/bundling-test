import { faker } from '@faker-js/faker';

const GenerateName = () => {
  return faker.name.fullName()
};

function Init() {
  const name = GenerateName();
  console.log(`Your random name is : ${name}`);
}

Init();
