# 데이터 프로퍼티와 접근자 프로퍼티

프로퍼티는 데이터 프로퍼티와 접근자 프로퍼티로 구분할 수 있다.

-   데이터 프로퍼티

키와 값으로 구성된 일반적인 프로퍼티다.

-   접근자 프로퍼티

자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수로 구성된 프로퍼티다.

### 데이터 프로퍼티

데이터 프로퍼티는 다음과 같은 프로퍼티 어트리뷰트를 갖는다. 프로퍼티를 생서할 때 자바스크립트 엔진이 기본 값으로 자동 정의된다.

-   value : 프로퍼티 키를 통해 프로퍼티 값에 접근하면 반환되는 값
-   writable : 프로퍼티 값의 변경 가능 여부를 나타내며 불리언 값
-   enumerable : 프로퍼티의 열거 가능 여부를 나태내며 불리언 값
-   configurable : 프로퍼티의 재정의 기능 여부를 나태내며 불리언 값

### 접근자 프로퍼티

접근자 프로퍼티는 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수로 구성된 프로퍼티다.

-   get

접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 읽을 때 호출되는 접근자 함수다.

접근자 프로퍼티 키로 프로퍼티 값에 접근하면 프로퍼티 어트리뷰트 [[Get]]의 값, 즉 getter 함수가 호출되고 그 결과가 프로퍼티 값으로 반환된다.

-   set

접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 저장할 때 호출되는 접근자 함수다.

접근자 프로퍼티 키로 프로퍼티 값을 저장하면 프로퍼티 어트리뷰트 [[Set]]의 값, 즉 Setter 함수가 호출되고 그 결과가 프로퍼티의 값으로 저장된다.

-   enumerable

프로퍼티의 열거 가능 여부를 나태내며 불리언 값

-   configurable

프로퍼티의 재정의 기능 여부를 나태내며 불리언 값

접근자 함수는 getter/setter 함수라고 부른다. 접근자 프로퍼티는 getter와 setter 함수를 모두 정의할 수 도 있고 하나만 정의할 수도 있다.

```javascript
const person = {
    firstName: "Ungmo",
    lastName: "Lee",

    // getter
    get fullName() {
        return `${this.firstName} ${this.lasName}`;
    },
    // setter
    set fullName() {
        [this.firstName, this.lastName] = name.split(' ');
    }
}

// 데이터 프로퍼티를 통한 참조
console.log(person.firstName + " " + person.lasName);

// 접근자 프로퍼티를 통한 저장, setter 함수 호출
person.fullName = "Heegun Lee";
console.log(person); // {firstName : "Hegun", lastName: "Lee"}

// 접근자 프로퍼티를 통한 값 참조 getter 함수 호출
console.log(person.fullName); // Heegun Lee
```

person 객체의 firstName과 lastName 프로퍼티는 일반적인 데이터 프로퍼티다.

메서드 앞에 get, set 이 붙은 메서드가 getter, setter 함수고 fullName이 접근자 프로퍼티다. **접근자 프로퍼티는 자체적으로 값을 가지지 않으며 다만 데이터 프로퍼트이 값을 읽거나 저장할 때 관여할 뿐**이다.

<hr>
