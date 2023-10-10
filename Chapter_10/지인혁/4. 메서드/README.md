## 메서드

자바스크립트에서 함수는 일급 객로 취급하기 때문에 프로퍼티 값으로 사용할 수 있다. 프로퍼티 값이 함수일 경우 일반함수와 구분하기 위해 메서드라 부른다.

```javascript
    const circle = {
        radius: 5,

        // getDiameter는 메서드다.
        getDiameter: funtion() [
            return 2 * this.radius; // this는 circle을 가르킨다.
        ]
    }
```
<hr><br>