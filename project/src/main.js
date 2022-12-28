import { GenerateName } from './faker';

function Init() {
  const name = GenerateName()
  console.log(`Your random name is : ${name}`)
}

Init()