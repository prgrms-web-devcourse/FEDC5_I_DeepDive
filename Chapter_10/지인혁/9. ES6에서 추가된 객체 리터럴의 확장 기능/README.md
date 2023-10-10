## 프로퍼티 축약 표현

만약 프로퍼티 값을 변수로 사용하는 경우 키와 값이 동일한 변수 이름일 때 프로퍼티 키를 생략 할 수 있다. 이때 키는 변수 이름으로 자동 생성된다.

```javascript
    const x = 1, y = 2;
    const obj = { x, y };

    console.log(obj); // {x: 1, y: 2}
```
<hr><br>

## 계산된 프로퍼티 이름

문자열 또는 문자열로 타입 변환할 수 있는 값으로 평가되는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수도 있다.

```javascript
    const prefix = "prop";
    let i = 0;

    const obj = {
        [`${prefix} - ${++i}`] : i,
        [`${prefix} - ${++i}`] : i,
        [`${prefix} - ${++i}`] : i,
    }

    console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}
```
<hr><br>

## 메서드 축약 표현

메서드를 정의할 때 function 키워드를 생략한 축약 표현을 사용할 수 있다.

```javascript
    const obj = {
        name : "lee",

        // 메서드 축약 표현
        sayHi() {
            console.log("HI");
        }
    }

    obj.sayHi(); // HI
```

