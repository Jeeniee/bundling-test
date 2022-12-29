export default {
  input: 'src/main.js',
  output: {
    dir: 'dist'
  },
  external: ['@faker-js/faker']

}
// rollup src/main.js --file dist/main.js와 동일