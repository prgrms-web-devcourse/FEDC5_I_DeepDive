## nodeValue ##
nodeValue 프로퍼티는 setter와 getter 모두 존재하는 접근자 프로퍼티다. 따라서 참조와 할당 모두 가능하다.

nodeValue는 객체의 값을 반환하는데 이는 텍스트 노드가 아닌 노드, 즉 문서 노드나 요소 노드로 접근하면 null을 반환한다.

```HTML
<body>
    <div id="foo">Hello</div>
    <script>
        console.log(document.nodeValue); // 문서노드라 null
        console.log(document.querySelector("#foo").nodeValue); // 요소노드라 null
        console.log(document.querySelector("#foo").firstChild.nodeValue); // Hello
    </script>
</body>
```
<hr><br>

## textContent
textContent 프로퍼티 역시 setter와 getter 모두 존재하는 접근자 프로퍼티다. 요소 노드의 텍스트와 모든 자손 노드의 텍스트를 모두 취득하거나 변경한다.

요소 노드의 시작 태크와 종료 태그 사이 내의 모든 텍스트를 반환한다. 이때 HTML 마크업(태그)은 무시된다.

```HTML
<body>
    <div id="foo">Hello <span>world!</span></div>
    <script>
        console.log(document.querySelector("#foo").textContent); // Hello World!
    </script>
</body>
```

- 요악하자면 nodeValue는 직접 텍스트 노드에 접근하여 값을 제어할 수 있지만 textContent는 요소 노드(태그)에 접근하여 하위 자손 텍스트 노드들을 제어할 수 있다. 이때 자동적으로 태그 요소들은 무시된다.

- textContent로 HTML 태그를 사용해도 하나의 문자열로 취급하지 HTML 태그로 마크업이 파싱되지는 않는다.
<hr>
