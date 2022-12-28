# Bundling test with Rollup 

`faker.js`와 `main.js` 두 개의 파일이 번들링 된 뒤에는 1개의 파일이 되어야 한다.

CLI(Command Line Interface)를 이용해서 간단히 번들링이 가능.
build 명령어를 script를 추가한다


```json
  {
    // ...
    "scripts": {
      "build": "rollup src/main.js --file dist/main.js"
    }
  }

```

- src/main.js
  진입점이 될 파일명
- dist/main.js
  번들링된 결과 파일명

```
yarn build
```

```
➜  project git:(main) ✗ yarn build
yarn run v1.22.19
$ rollup src/main.js --file dist/main.js

src/main.js → dist/main.js...
(!) Unresolved dependencies
https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
faker (imported by "src/faker.js")
created dist/main.js in 53ms
✨  Done in 0.86s.
```

그러면 입력했던대로 dist폴더 안에 main.js로 파일이 성공적으로 한개로 번들링되었다.