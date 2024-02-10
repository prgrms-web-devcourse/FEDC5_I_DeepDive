# 객체 생성 방식과 프로토타입의 결정

다양한 방식으로 생성된 모든 객체는 각 방식마다 세부적인 객체 생성 방식의 차이느 있으나 추상 연산 OrdinaryObjectCreate에 의해 생성된다는 공통점이 있다.

### 객체 리터럴에 의해 생성된 객체의 프로토타입

객체 리터럴에 의해 생성된 객체의 프로토타입은 Object.prototype이다.

객체는 constructor 프로퍼티와 hasOwnProperty 메서드 등을 소유하지 않지만 자신의 프로토타입인 Object.prototype의 constructor 프로퍼티와 hasOwnProperty 메서드를 자신의 자산인 것처럼 자유롭게 사용할 수 있다.

객체가 자신의 프로토타입인 Object.prototype 객체를 상속받았기 때문이다.

### Object 생성자 함수에 의해 생성된 객체의 프로토타입

Object 생성자 함수를 호출하면 객체 리터럴과 마찬가지로 추상 연산 OrdinaryObjectCreate가 호출된다.

Object 생성자 함수와 Object.prototype과 생성된 객체 사이에 연결이 만들어진다. 객체 리터럴에 의해 생성된 객체와 동일한 구조를 갖는다.

이처럼 Object 생성자 함수에 의해 생성된 객체는 Object.prototype을 프로토타입으로 갖게되며 이로써 Object.prototype을 상속받는다.

### 생성자 함수에 의해 생성된 객체의 프로토타입

new 연산자와 함께 생성자 함수를 호출하여 인스턴스르 생성하면 다른 객체 생성 방식과 마찬가지로 추상 연산 OrdinaryObjectCreate가 호출된다.

전달되는 프로토타입은 생성자 함수의 prototype 프로퍼티에 바인딩되어 있는 객체다.

생성자 함수와 더불어 생성된 프로토타입 Object.prototype은 다양한 빌트인 메서드를 갖고 있지만 사용자 정의 생성자 함수에서 생성된 프로토타입은 constructor 뿐이다.

프로토타입은 결국 객체다. 따라서 일반 객체와 같이 프로토타입에도 프로퍼티를 추가/삭제할 수 있다. 그리고 이렇게 추가/삭제된 프로퍼티는 프로퍼티 체인에 즉각 반영된다.
