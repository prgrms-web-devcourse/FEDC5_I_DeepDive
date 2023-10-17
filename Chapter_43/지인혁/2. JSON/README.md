## JSON
JSON은 클라이언트와 서버 간의 HTTP 통신을 위한 텍스트 데이터 포맷이다. JSON은 독립형 데이터 포맷으로, 대부분의 프로그래밍 언어에서 사용할 수 있다.

> 학부 시절에 데이터 통신 수업을 수강하면서 클라이언트와 서버사이에는 하나의 텍스트 메세지를 주고 받는다라고 설명한 적이 있다.<br><br>
개인적으로 JSON과 객체의 차이점을 몰랐던 나는 어? 객체에는 여러가지 데이터가 들어있는데 무슨 뜻이지하고 했었는데 JSON은 객체를 하나의 문자열로 만든 텍스트 데이터이였고 하나의 텍스트 데이터 JSON 형식으로 통신을 주고 받았던 것이였다. 
<hr><br>

## JSON 표기 방식

JSON은 객체와 비슷하게 키와 값으로 구성된 하나의 텍스트다.

JSON의 키는 반드시 큰 따옴표(작은 따옴표 사용 불가)로 묶어야 하며 값은 객체 리터럴과 같은 표기법으로 사용할 수 있다. 하지만 문자열 값은 반드시 큰 따옴표(작은 따옴표 사용 불가)로 묶어야 한다.

```javascript
// 객체
{
    name: "Lee"
}
// JSON
{
    "name": "Lee"
}
```

<hr><br>

## JSON.stringify

JSON.stringify 메서드는 객체를 JSON 포맷의 문자열로 변환시켜준다. 클라이언트가 서버로 객체를 전송하려면 객체를 JSON 형식으로 변환시켜줘야하는데 이떄 사용되며 이를 직렬화라 한다.

JSON.stringify는 객체뿐만 아니라 배열도 JSON 형식으로 변환이 가능하다.

```javascript
const obj = {
    name: "Lee",
    age: 20
}
const json = JSON.stringify(obj);

console.log(typeof json); // string, JSON은 하나의 텍스트
console.log(json); // {"name" : "Lee", "age" : 20}

const todos = [
    {id: 1, content: "HTML"},
    {id: 2, content: "CSS"},
]
const jsonTodos = JSON.stringify(todos);

console.log(typeof jsonTodos); // string
console.log(jsonTodos); // [{"id" : 1, "content" : "HTML"}, {"id" : 2, "content" : "CSS"}]
```

<hr><br>

## JSON.parse

JSON.parse 메서드는 JSON 형식을 객체로 변환시켜준다. 서버에서 응답받은 데이터는 JSON형식이며 객체로 사용하기 위해 JSON을 객채화 해야한다. 이를 역직렬화라 한다.

```javascript
const todos = [
    {id: 1, content: "HTML"},
    {id: 2, content: "CSS"},
]
const jsonTodos = JSON.stringify(todos); // JSON 형식으로 변환
const parsed = JSON.parse(jsonTOdos); // 다시 객체로 변환

console.log(typeof jsonTodos); // Object
console.log(jsonTodos); // [{id : 1, content : "HTML"}, {id : 2, content : "CSS"}]
```
<hr><br>
