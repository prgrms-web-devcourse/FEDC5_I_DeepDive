## 프로퍼티 삭제

delete연산자는 객체의 프로퍼티를 삭제한다. 이때 delete 연산자의 피연산자는 프로퍼티 값에 접근할 수 있는 표현식이어야 한다. 만약 존재하지 않는 프로퍼티를 삭제한다면 에러 없이 무시된다.

```javascript
    const person = {
        name: "lee",
    }
    // 동적 생성
    person.age = 20;
    // age 프로퍼티 삭제
    delete person.age;
    delete person.address; // 프로퍼티가 없어서 무시
```
<hr><br>