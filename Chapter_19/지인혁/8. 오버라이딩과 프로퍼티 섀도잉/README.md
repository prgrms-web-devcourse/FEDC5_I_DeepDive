# 오버라이딩과 프로퍼티 섀도잉

```javascript
const Person = (function () {
    function Person(name) {
        this.name = name;
    }

    // 프로토타입 메서드
    Person.prototype.sayHello = function () {
        console.log(`Hi! My name is ${this.name}`);
    };

    return Person;
})();

const me = new Person('lee');

// 인스턴스 메서드
me.sayHello = function () {
    console.log(`Hey! My name is ${this.name}`);
};

me.sayHello(); // Hey! My name is Lee
```

프로토타입이 소유한 프로퍼티를 프로토타입 프로퍼티, 인스턴스가 소유한 프로퍼티를 인스턴스 프로퍼티라 부른다.

프로토타입 프로퍼티와 같은 이름의 프로퍼티를 인스턴스에 추가하면 프로토타입 프로퍼티를 덮어쓰는 것이 아니라 인스턴스 프로퍼티로 추가된다.

인스턴스 메서드 sayHello는 프로토타입 메서드 sayHello를 오버라이딩했고 프로토타입 메서드 sayHello는 가려진다.

이처럼 **상속 관계에서 프로퍼티가 가려지는 현상을 프로퍼티 섀도잉이라 한다.**

```javascript
Person.prototype.sayHello = function () {
    console.log(`Hey!`);
};

// 하위에서는 프로토타입을 삭제할 수 없다.
delete me.sayHello;

me.sayHello(); // Hey

// 직접 접근해서 삭제가 가능
delete Person.prototype.sayHello;
me.sayHello(); // TypeError
```

하위 객체를 통해 프로토타입의 프로퍼티를 변경 또는 삭제하는 것은 불가능하다. 다시 말해 하위 객체를 통해 프로토타입에 get은 허용되나 set은 허용되지 않는다.

프로토타입 프로퍼티를 변경 또는 삭제하려면 하위 객체를 통해 접근하는 것이 아니라 프로토타입에 직접 접근해야 한다.
