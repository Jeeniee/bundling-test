import { faker } from "@faker-js/faker"

export const GenerateName = () => {
  return faker.name.fullName()
}

export const Test = () => {
  return 'Some string'
}