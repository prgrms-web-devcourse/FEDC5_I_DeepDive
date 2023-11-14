# throw 문

Error 생성자 함수로 에러 객체를 생성한다고 에러가 발생하는 것으 아니다.

에러 생성과 발생은 의미가 다르다.

에러를 발생시킬려면 try 코드 블록에서 throw 문으로 에러를 던져야 한다.

```javascript
try {
    throw new Error('new Error!');
} catch (error) {
    console.error(error.message);
}
```

throw 문은 어떤 값이라도 상관없지만 일반적으로 에러 객체를 지정한다. 에러를 던지면 catch 문의 에러 변수가 생성되고 던져진 에러 객체가 할당된다.

그리고 catch 코드 블록이 실행되기 시작한다.
