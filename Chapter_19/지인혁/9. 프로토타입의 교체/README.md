# 프로토타입의 교체

프로토타입은 임의의 다른 객체로 변경할 수 있따. 이 뜻은 프로토타입을 동적으로 변경할 수 있다는 것을 의미한다.

이러한 특징을 활용하면 객체 간의 상속 관계를 동적으로 변경할 수 있으며 프로토타입은 생성자 함수 또는 인스턴스에 의해 교체될 수 있다.

<hr>

### 생성자 함수에 의한 프로토타입의 교체

```javascript
const Person = function () {
    function Person(name) {
        this.name = name;
    }

    Person.prototype = {
        sayHello() {
            console.log('hi');
        },
    };

    Person.prototype = {
        constructor: Person,
        sayHello() {
            console.log('hi');
        },
    };

    return Person;
};

const me = new Person('Lee');
```

Person 생성자 함수가 생성할 객체의 프로토타입을 객체 리터럴로 교체한 것이다.

프로토타입으로 교체한 객체 리터럴에는 constructor 프로퍼티가 없다.

프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴된다.

하지만 constructor 프로퍼티와 생성자 함수 간의 연결을 다시 살릴 수 있다.

<hr>

### 인스턴스에 의한 프로토타입의 교체

프로토타입의 교체는 생성자 함수뿐만아니라 인스턴스의 ** proto** 접근자 프로퍼티를 통해 접근할 수 있다.

```javascript
function Person(name) {
    this.name = name;
}

const me = new Person('lee');

const parent = {
    sayHello() {
        console.log('hi');
    },
};

Object.setPrototypeOf(me.parent);

me.sayHello();
```

인스턴스 me를 통해 Person 생성자 함수의 프로토타입을 교체했따. 교체한 객체에는 constructor 프로퍼티가 없으므로 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴된다.
