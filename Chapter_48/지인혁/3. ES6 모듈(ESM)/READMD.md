# ES6 모듈(ESM)

ES6에서는 클라이언트 사이드 자바스크립트에서도 동작하는 모듈 기능을 추가했다.

ES^ 모듈은 ESM이라 부르며 사용법도 간단하다.

script 태그에 type="module" 어트리뷰트를 추가하면 로드된 자바스크립트 파일을 모듈로서 동작한다. 일반적인 자바스크립트 파일이 아닌 ESM임을 명학히 하기 위해 ESM의 파일 확장자는 mjs를 사용할 것을 권장한다.

```javascript
<script tpye="module" src="app.mjs"></script>
```

ESM에는 클래스와 마찬가지로 stric mode가 적용된다.

### 모듈 스코프

ESM은 독자적인 모듈 스코프를 갖는다. 일반적인 자바스크립트 파일은 script 태그로 분리해서 로드해도 독자적인 모듈 스코프를 갖지 않는다.

```html
<!DOCTYPE html>
<html lang="en">
    <body>
        <script src="foo.js"></script>
        <script src="bar.js"></script>
    </body>
</html>
```

script 태그로 분리해서 로드된 **2개의 자바스크립트 파일은 하나의 자바스크립트 파일 내에 있는 것 처럼 동**작한다. 즉, 하나의 전역을 공유하는 문제가 발생한다.

```html
<!DOCTYPE html>
<html lang="en">
    <body>
        <script type="module" src="foo.js"></script>
        <script type="module" src="bar.js"></script>
    </body>
</html>
```

ESM은 파일 자체의 독자적인 모듈 스코프를 제공하며 모듈 내에서 var 키워드로 선언해도 전역 변수가 아니며 window 객체의 프로퍼티도 아니게 된다.

### export 키워드

```javascript
// lib.mjs

export const pi = Math.PI;

export const function square(x) {
    return x * x;
}

export class Person {
    constructor(name) {
        this.name = name;
    }
}
```

모듈은 독자적인 모듈 스코프를 갖게되며 내부에서 선언한 식별자를 외부에 공개하여 다른 모듈들이 재사용할 수 있게 하려면 export 키워드를 사용한다.

```javascript
// lib.mjs

const pi = Math.PI;

const function square(x) {
    return x * x;
}
class Person {
    constructor(name) {
        this.name = name;
    }
}


export  { pi, square, Person };
```

선언문 앞에 매번 export 키워드를 붙이는 것이 번거롭다면 export 대상을 하나의 객체로 구성하여 한 번에 export 할 수 있다.

### import 키워드

```javascript
import { pi, square, Person } form "./lib.mjs";

console.log(pi); // 3.14592...
console.log(square); // 100
console.log(new Person("Lee")); // Person { name: "Lee" }
```

공개한 식별자를 자신의 모듈 스코프 내부로 로드하려면 import 키워드를 사용한다. 다른 모듈이 export 한 식별자 이름으로 import 해야하며 ESM의 경우 파일 확장자를 생략할 수 없다.

```javascript
import * as lib form "./lib.mjs";

console.log(lib.pi); // 3.14592...
console.log(lib.square); // 100
console.log(new lib.Person("Lee")); // Person { name: "Lee" }
```

식별자 이름을 일일이 지정하지 않고 하나의 이름으로 한 번에 import할 수도 있다. 이때 import되는 식별자는 as 뒤에 지정한 이름의 객체에 프로퍼티로 할당된다.

```javascript
import { pi as PI, square as sq, Person as P } form "./lib.mjs";

console.log(PI); // 3.14592...
console.log(sq); // 100
console.log(new P("Lee")); // Person { name: "Lee" }
```

모듈이 export 한 식별자 이름을 변경하여 import할 수 있다.

```javascript
export default x => x * x;

// 임의의 이름으로 import
import anyName = from "./lib.mjs";

console.log(anyName(3)); // 9 출력
```

모듈에서 하나의 값만 export 한다면 default 키웓를 사용할 수 있다. default 키워드를 사용하는 경우 기본적으로 이름 없이 하나의 값을 export 한다.

default 키워드를 사용하는 경우 var, let, const 키워드는 사용할 수 없다.

default 키워드와 함께 export한 모듈은 {} 없이 임의의 이름으로 import 해야한다.

<hr>
