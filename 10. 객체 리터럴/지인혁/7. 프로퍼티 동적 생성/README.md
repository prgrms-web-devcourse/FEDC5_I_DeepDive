## 프로퍼티 동적 생성

존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고 프로퍼티 값이 할당 된다.

```javascript
    const person = {
        name: 'lee',
    }

    person.age = 20;

    console.log(person); // {name: "lee", age: 20}
```
<hr><br>