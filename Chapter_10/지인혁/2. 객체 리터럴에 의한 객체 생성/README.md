## 객체 리터럴에 의한 객체 생성
객체 생성 방법
- 객체 리터럴 {}
- Object 생성자 함수 (new Object())
- 생성자 함수 function Object()
- Object.crate메서드 
- 클래스(ES6) class


자바스크립트는 가장 일반적이고 간단한 객체 리터럴을 사용하여 객체를 생성한다. 객체 리터럴은 중괄호 ({...}) 내에 0개 이상의 프로퍼티를 정의힌다.

```javascript
    const person = {
        name: "lee",
        sayHello: function() {
            console.log(this.name);
        }
    }

    console.log(typeof person) // object (객체)
    console.log(person) // {name : "lee, sayHello: f}
```
<hr><br>