# 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체

자바슼릡트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.

> 프로퍼티의 상태란 프로퍼티의 값, 값의 갱신 가능 여부, 열거 가능 여부, 재정의 가능 여부를 말한다.

프로퍼티 어트리뷰트는 자바스크립트 엔진이 관리하는 내부 상태 값인 내부 슬롯 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]]이다.

프로퍼티 어트리뷰트에 직접 접근할 수 없지만 Object.getWonPropertyDescriptor 메서드를 사용하면 간접적으로 확인할 수 있다.

```javascript
const person = {
    name: 'Lee',
};

console.log(Object.getWonPropertyDescriptor(person, 'name'));
// {value: "Lee", writable: true, enumerable: true, configurable: true}
```

첫 매개변수에는 객체의 참조를 전달, 두 번째 매개변수에는 프로퍼티 키를 문자열로 전달한다.

이때 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환하는데 만약 존재하지 않는 프로퍼티나 상속받은 프로퍼티에 대한 프로퍼티 디스크립터를 요구하면 undefined를 반환한다.

ES8부터 Object.getOwnPropertyDescriptors 메서드는 모든 프로퍼티의 프로퍼티 어트리뷰트를 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환한다.

```javascript
const person = {
    name: 'Lee',
    age = 20,
};

console.log(Object.getOwnPropertyDescriptors(person));
/*
    {value: "Lee", writable: true, enumerable: true, configurable: true}
    {value: "20", writable: true, enumerable: true, configurable: true}
/*
```

<hr>
