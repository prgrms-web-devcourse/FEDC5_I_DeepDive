## 노드 정보 취득 ##

- nodeTyep 

    노드 객체의 종류, 즉 노드의 타입을 나타내는 상수를 반환한다. 요소 노드 타입은 상수 1, 텍스트 노드 타입은 상수 3, 문서 노드 타입은 상수 9를 반환한다.

- nodeName

    노드의 이름을 문자열로 반환한다. 요소 노드는 문자열로 태그 이름을, 텍스트 노드는 문자열 "#text"를, 문서 노드는 문자열 "document"를 반환한다.

```HTML
<body>
    <!-- 노드 정보 취득 -->
    <div id="foo">Hello</div>
    <script>
        console.log(document.nodeType); // 9 
        consol.log(document.nodeName); // #document

        const $foo = document.querySelector("#foo");

        console.log($foo.nodeType); // 1
        console.log($foo.nodeName); // DIV

        const $textNode = $foo.firstChild;

        console.log($textNode.nodeType); // 3
        console.log($textNode.nodeName) // #text
    </script>
</body>
```
<hr>