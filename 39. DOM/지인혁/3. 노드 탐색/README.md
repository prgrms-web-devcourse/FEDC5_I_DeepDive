## 자식 노드 탐색 ##
텍스트 에디터에서 HTML 문서에 스페이스, 탭, 엔터 등을 입력하면 공백 문자가 DOM에 공백 텍스트 노드를 생성한다. 따라서 노드를 탐색ㅎ랄 때는 공백 문자가 생성한 공백 텍스트 노드에 주의해야한다.

- Node.prototype.childNodes

    자식 노드를 모두 탐색하여 DOM 컬렌션 객체인 NodeList에 담아 반환한다. **childNodes 프로퍼티가 반환한 NodeList에는 요소 노드뿐만 아니라 텍스트 노드도 포함되어 있을 수 있다.**

- Element.prototype.children

    자식 노드 중에서 요소 노드만 모두 탐색하여 DOM 컬렉션 객체인 HTMLCollection에 담아 반환한다. **children 프로퍼티가 반환한 HTMLCollection에는 텍스트 노드가 포함되지 않는다.**

- Node.prototype.firstChild

    첫 번째 자식 노드를 반환한다. firstChild 프로퍼티가 반환한 노드는 텍스트 노드이거나 요소 노드다.

- Node.prototype.lastChild

    마지막 자식 노드를 반환한다. lastChild 프로퍼티가 반환한 노드는 텍스트 노드이거나 요소 노드다.

- Element.prototype.firstElementChild 

    첫 번째 자식 요소 노드를 반환한다. firstElementChild 프로퍼티는 요소 노드만 반환한다.

- Element.prototype.lastElementChild

    마지막 자식 요소 노드를 반환한다. lastElementChild 프로퍼티는 요소 노드만 반환한다.

```HTML
<body>
    <ul id="fruits">
        <li class="apple">Apple</li>
        <li class="banana">Banana</li>
        <li class="orange">Orange</li>
    </ul>
    <script>
        const $f = document.getElementById("fruits");

        // $f의 모든 자식 노드를 탐색하는데 텍스트 노드도 포함되어 있다..
        console.log($f.childNodes); // [text, li, text, li, text, li, text]

        // $f의 모든 자식 노드를 탐색하는데 텍스트 노드는 포함되어 있지 않다.
        console.log($f.children); // [li, li, li]

        // $f의 첫 번째 자식 노드를 반환하는데 텍스트 노드를 반환할 수도 있다.
        console.log($f.firstChild); // [text]

        // $f의 마지막 자식 노드를 반환하는데 텍스트 노드를 반환할 수도 있다.
        console.log($f.lastChild); // [text]

        // $f의 첫 번째 자식 노드를 반환하는데 오직 프로퍼티 요소 노드만 반환된다.
        console.log($f.firstElementChild); // [li]

        // $f의 마지막 자식 노드를 반환하는데 오직 프로퍼티 요소 노드만 반환된다.
        console.log($f.lastElementChild); // [li]
    </script>
</body>
```
<hr><br>

## 자식 노드 존재 확인 ##
자식 노드가 존재하는지 확인할려면 Node.prototype.hasChildNodes 메서드를 사용한다. 자식이 존재하면 true, 존재하지 않으면 false를 반환한다.

hasChildNodes 메서드는 텍스트 노드를 포함하여 확인한다. 텍스트 노드가 아닌 요소 노드를 확인할려면 children.length 또는 childElementCount 프로퍼티를 사용한다.

```HTML
<body>
    <ul id="fruits">
    </ul>
    <script>
        const $fr = document.getElementById("fruits");

        // 자식 요소는 없지만 텍스트 노드가 포함되어있기에 true를 반환
        console.log($fr.hasChildNodes()); // true

        // 자식 노드 중에 텍스트 노드가 아닌 요소 노드가 존재하는지 확인
        console.log(!!$fr.children.length); // 0 = false
        console.log(!!$fr.childElementCount); // 0 = false
    </script>
<body>
```
<hr><br>

## 요소 노드의 텍스트 노드 탐색 ##
텍스트노드는 요소 노드의 자식이다. 따라서 요소 노드의 텍스트 노드는 firstChild 프로퍼티로 접근할 수 있다. firstChild 프로퍼티는 첫 번째 자식 노드를 반환한다. 이는 텍스트 노드이거나 요소 노드가 된다.

```HTML
<body>
    <div id="foo">Hello</div>
    <script>
        console.log(document.getElementById("foo").firstChild); // text
    </script>
<body>
```
<hr><br>

## 부모 노드 탐색
부모 노드를 탐색하려면 Node.prototype.parentNode 프로퍼티를 사용한다. 텍스트 최종단 리프 노드 이므로 부모 노드가 텍스트 노드인 경우는 없다.

```HTML
<body>
    <ul id="fruits">
        <li class="apple">Apple</li>
        <li class="banana">Banana</li>
        <li class="orange">Orange</li>
    </ul>
    <script>
        const $banana = document.querySelector(".banana");

        // .banana  요소 노드의 부모 노드를 탐색
        console.log($banana.parentNode); // ul#fruits
    </script>
<body>
```
<hr><br>

## 형제 노드 탐색
- previousSibling 

    형제 노드 중에서 자신의 이전 형제 노드를 탐색하여 반환한다. 요소 노드뿐만 아니라 텍스트 노드가 반환될 수도 있다.

- nextSibling

    형제 노드 중 자신의 다음 형제 노드를 탐색하여 반환한다. 요소 노드뿐만 아니라 텍스트 노드가 반환될 수도 있다.

- previousElementSibling

    형제 노드 중에서 자신의 이전 형제 요소 노드를 탐색하여 반환한다. 텍스트 노드 없이 요소 노드만 반환된다.

- nextElementSibling 

    형제 노드 중에서 자신의 다음 형제 요소 노드를 탐색하여 반환한다. 텍스트 노드 없이 요소 노드만 반환된다.

```HTML
<body>
    <ul id="fruits">
        <li class="apple">Apple</li>
        <li class="banana">Banana</li>
        <li class="orange">Orange</li>
    </ul>
    <script>
        const $fru = document.getElementById("fruits");
        const firstChild = $fru.firstChild; // $fru의 첫 자식 텍스트를 반환

        // 첫 텍스트의 다음 형제 노드는 apple이다.
        console.log(firstChild.nextSibling);

        // apple의 이전 노드는 텍스트를 반환하여 텍스트가 된다.
        console.log(firstChild.nextSibling.previousSibling);

        // 이 메서드는 텍스트를 반환하지 않기 때문에 $fru 부모에서 바로 apple을 반환
        console.log($fru.firstElementChild);

        // apple의 다음 형제 노드도 텍스트를 반환하지 않아 banana가 된다.
        console.log($fru.firstElementChild.nextElementSibling);

        // banana에서 이전 형제인 apple을 가르킨다 이것도 텍스트를 반환하지 않는다.
        console.log($fru.firstElementChild.nextElementSibling.previousElementSibling);
    </script>
<body>
```
<hr><br>

