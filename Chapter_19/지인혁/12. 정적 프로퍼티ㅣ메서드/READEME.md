# 정적 프로퍼티/메서드

정적 프로퍼티/메서드는 생성자 함수로 인스턴스를 생성하지 않아도 참조/호출할 수 있는 프로퍼티/메서드를 말한다.

```javascript
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log('hi');
};

Person.staticProp = 'static prop';
Person.staticMethod = function () {
    console.log('staticMethod');
};

const me = new Person('lee');

Person.staticMethod(); // staticMethod
me.staticMethod(); // TypeError
```
