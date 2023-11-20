# 자바스크립트 파싱에 의한 HTML 파싱 중단

브라우저는 동기적으로, 위에서 아래 방향으로, 순차적으로 HTML, CSS, 자바스크립트를 파싱하고 실행한다.

이 뜻은 **script 태그의 위치에 따라 HTML 파싱이 블로킹되어 DOM 생성이 지연**될 수 있다는 것을 의미 하며 script 태그의 위치는 매우 중요하다.

자바스크립트 코드에서 DOM이나 CSSOM을 변경하는 DOM API를 사용할 경우 해당 노드가 DOM, CSSOM에 이미 생성되어 있어야 한다. 만약 생성이 완료되지 않은 상태라면 문제가 발생한다.

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <script>
      /*
      DOM API인 document.getElementById는 DOM에서 id가 'apple'인 HTML 요소를 취득한다.
      아래 DOM API가 실행되는 시점에는 아직 id가 'apple'인 HTML 요소를 파싱하지 않았기 때문에
      DOM에는 id가 'apple'인 HTML 요소가 포함되어 있지 않다.
      따라서 아래 코드는 정상적으로 id가 'apple'인 HTML 요소를 취득하지 못한다.
      */
      const $apple = document.getElementById('apple');

      // id가 'apple'인 HTML 요소의 css color 프로퍼티 값을 변경한다.
      // 이때 DOM에는 id가 'apple'인 HTML 요소가 포함되어 있지 않기 때문에 에러가 발생한다.
      $apple.style.color = 'red'; // TypeError: Cannot read property 'style' of null
    </script>
  </head>
  <body>
    <ul>
      <li id="apple">Apple</li>
      <li id="banana">Banana</li>
      <li id="orange">Orange</li>
    </ul>
  </body>
</html>
```

<hr>
