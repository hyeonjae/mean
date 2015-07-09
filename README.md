# mean

`package.json`
```json
{
  "name": "socialapp"
}
```

`express`와 `body-parser` 설치
```sh
$ npm install --save express
$ npm install --save body-parser
```

그러면 `package.json`은 아래와 같이 의존성이 추가된다.
```json
{
  "name": "socialapp",
  "dependencies": {
    "body-parser": "^1.13.2",
    "express": "^4.13.1"
  }
}
```
