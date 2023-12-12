# 객체 변경 방지

객체는 변경 가능한 값이므로 재할당 없이 직접 변경할 수 있다.

프로퍼티를 추가하거나 삭제할 수 있고 프로퍼티의 값을 갱신할 수 있으며 Object.defineProperty 또는 Object.defineProperties 메서드를 사용하여 프로퍼티 어트리뷰트를 재정의할 수도 있다.

자바스크립트는 객체의 변경을 방지하는 다양한 메섣르르 제공한다.

### 객체 확장 금지

Object.preventExtensions 메서드는 객체의 확장을 금지한다.

**객체의 확장 금지란 프로퍼티 추가 금지를 의미한다. 즉, 확장이 금지된 객체는 프로퍼티 추가가 금지된다.**

프로퍼티는 동적 추가와 Object.defineProperty 메서드로 추가하는 방법이 모두 금지된다.

확장이 가능ㅎ나 객체인지 여부는 Object.isExtensible 메서드로 확인이 가능하다.

```javascript
const person = { name: 'lee' };

// 확장 가능한 객체
console.log(Object.isExtensible(person)); // true

// 확장을 금지하여 프로퍼티 추가 금지
Object.preventExtensions(person);

// 확장 금지
console.log(Object.isExtensible(person)); // false

person.age = 20; // 무시. strict mode에서는 에러
console.log(person); // {name : "Lee"}
```

### 객체 밀봉

Object.seal 메서드는 객체를 밀봉한다.

프로퍼티 추가 및 삭제와 프로퍼티 어트리뷰트 재정의 금지를 의미하며 **밀봉된 객체는 읽기와 쓰기만 가능하다.**

밀봉된 객체 여부는 Object.isSealed 메서드로 확인할 수 있다.

```javascript
const person = { name: 'lee' };

// 밀봉 된 객체가 아님
console.log(Object.isSealed(person)); // false

// 추가, 삭제, 재정의를 금지
Object.seal(person);

// 밀봉 된 객체가 맞음
console.log(Object.isSealed(person)); // true

// 밀봉된 객체는 configurable(재정의 가능 여부)가 false다.
console.log(Object.getOwnPropertyDescriptors(person)); // false

person.age = 20; // 추가가 금지되어 무시
delete person.name; // 삭제가 금지되어 무시

person.name = 'kim'; // 값 갱신은 가능
console.log(person); // {name: "Kim"}

// 어트리뷰트 재정의는 금지된다.
Object.defineProperty(person, 'name', { configurable: true });
// TypeError: Cannot redefine property: name
```

### 객체 동결

Object.freeze 메서드는 객체를 동결한다.

객체 동결은 프로퍼티 추가, 삭제, 프로퍼티 어트리뷰트 재정의 금지, 프로퍼티 값 갱신 금지를 의미한다. 즉, **동결된 객체는 읽기만 가능하다.**

동결된 객체인지 여부는 Object.isFrozen 메서드로 확인할 수 있다.

```javascript
const person = { name: 'lee' };

// 동결된 객체가 아니다
console.log(Object.isFrozen(person)); // false

// 객체를 동결하여 추가, 삭제, 재정의, 쓰기를 금지
Object.freeze(person);

// 동결된 객체가 맞다
console.log(Object.isFrozen(person)); // true

// 동결된 객체는 writable(프로퍼티 값 변경 여부)과 configurable(재정의 가능 여부)이 false다.
console.log(Object.getOwnPropertyDescriptors(person)); // false

person.age = 20; // 추가 금지
delete person.name; // 삭제 금지
person.name = 'Kim'; // 값 갱신 금지
Object.defineProperty(person, 'name', { configurable: true }); // 어트리뷰트 재정의 금지

console.log(person.name); // 읽기만 가능
```

### 불변 객체

지금 알아본 변경 방지 메서드들은 중첩 객체까지는 영향을 주지 못한다. Object.freeze 메서드로 객체를 동결해도 중첩 객체까지 동결할 수 없다.

**중첩 객체까지 동결하여 변경이 불가능한 읽기 전용의 불변 객체르 구현하려면 객체를 값으로 갖는 모든 프로퍼티에 대해 재귀적으로 Object.freeze 메서드를 호출해야 한다.**

```javascript
function deepFreeze(target) {
    if (target && typeof target === 'object' && !Object.isFrozen(target)) {
        Object.freeze(target);
        Object.keys(target).forEach(key => deepFreeze(target[key]));
    }

    return target;
}

const person = {
    name: 'Lee',
    address: { city: 'Seoul' }, // 중첩 객체 (객체 안에 객체)
};

// 재귀적으로 깊은 객체까지 동결
deeFreeze(person);

console.log(Object.isFrozen(person)); // true
console.log(Object.isFrozen(person.address)); // true

person.address.city = 'Busan';
console.log(person); // {name: "Lee", address: {city: "Seoul"}}
```
