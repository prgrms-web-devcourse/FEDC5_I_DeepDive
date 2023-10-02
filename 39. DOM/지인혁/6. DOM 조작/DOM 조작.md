## innerHTML ##
innerHTML은 요소 노드의 HTML 마크업을 취득하거나 변경한다. 요소의 시작 태그와 종료 태그 사이 내에 포함된 모든 HTML 마크업을 문자열로 반환한다.

textContent 프로퍼티는 HTML 마크업을 무시하고 텍스트만 반환하지만 innerHTML 프로퍼티는 HTML 마크업이 포함된 문자열을 그대로 반환한다.

innerHTML 프로퍼티에 문자열을 할당하면 요소 노드의 모든 자식 노드가 제거되고 할당할 문자열이 HTML 마크업이 파싱되어 요소 노드의 자식 노드로 DOM에 반영된다.


```HTML
<body>
    <div id="foo">Hello <span>world!</span></div>
    <script>
        console.log(document.querySelector("#foo").textContent); // "Hello World!"
        console.log(document.querySelector("#foo").innerHTML); // "Hello <span>world!</span>"

        document.querySelector("#foo").innerHTML = "Hi <span>there!</span>";
        // 실제로 화면에는 HTML이 마크업 파싱되어 Hi there!라고 그려진다.
    </script>
</body>
```

**문제점**
innerHTML로 입력한 HTML 마크업 문자열은 실제로 요소 노드의 자식으로 DOM에 반영된다. 이때 사용자로 입력받은 데이터를 그대로 innerHTML 프로퍼티에 할당하는 것은 **크로스 사이트 스크립팅 공격(XXS)**에 취약하다.

HTML 마크업 내 자바스크립트 악성 코드가 포함되어 있다면 파싱 과정에서 그대로 실행될 가능성이 있기 때문에 위험하다.

```HTML
document.querySelector("#foo").innerHTML = "<script>console.log(documnet.cooke</script>"
```

**DOMPurify 라이브러리를 사용한다면 잠재적 위험을 내포한 HTML 마크업을 살균하여 위험을 제거해준다.**

또한 innerHTML로 요소를 추가한다면 기존에 있던 요소가 다 지워지고 추가되기에 좋지 않다. 만약에 += 연산으로 기존 요소를 더해 요소를 추가해도 효율적이지도 않다.

그리고 innerHTML로는 삽입될 위치를 지정할 수가 없다.
<hr><br>

## insertAdjacentHTML
insertAdjacentHTML(position, DOMString) 메서드는 기존 요소를 제거하지 않고 위치를 지정해 새로운 요소를 삽입한다.

insertAdjacentHTML 메서드는 두 번째 인수로 전달한 HTML 마크업 문자열을 파싱하고 그 결과로 생성된 노드를 첫 번째 인수로 전달한 위치에 삽입하여 DOM에 반영하게 된다.

**첫 번째 인수로 전달할 수 있는 문자열**
- beforeBegin : 시작 태그 앞
- afterbegin : 시작 태그 뒤
- beforeend : 종료 태그 앞
- afterend : 종료 태그 뒤

```HTML
<body>
    <!-- beforebegin -->
    <div id="foo">
        <!-- afterbegin -->
        text
        <!-- beforeend -->
    </div>
    <!-- afterend -->
    <script>
        const $foo = document.querySelector("#foo");

        $foo.insertAdjacentHTML("beforebegin", "<p>Hi</p>")
        $foo.insertAdjacentHTML("afterbegin", "<p>Hi</p>")
        $foo.insertAdjacentHTML("beforeend", "<p>Hi</p>")
        $foo.insertAdjacentHTML("afterend", "<p>Hi</p>")
    </script>
</body>
```
<hr><br>

## 노드 생성과 추가

- 요소 노드 생성

creteElement(tagName) 메서드는 요소 노드를 생성하여 반환한다. 매개변수 tagName에는 태그 이름을 나타내는 문자열을 인수로 전달한다.

- 텍스트 노드 생성
createTextNode(text) 메서드는 텍스트 노드를 생성하여 반환한다. text에는 텍스트 노드 값으로 사용할 문자열을 인수로 전달한다.

- 텍스트 노드를 요소 노드의 자식 노드로 추가
appnedChild 메서드는 인수로 전달한 노드를 호출한 노드의 마지막 자식 노드로 추가한다.

하지만 자식 노드가 하나도 없는 경우에는 textContent 프로퍼티를 사용하는 편이 더욱 간편하다.
```javascript
// li 요소 노드 생성 DOM에 추가x 홀로 존재하는 상태다.
const $li = documnet.createElement("li"); 
// 텍스트 노드 생성
const textNode = document.createTextNode("Banana");

// 텍스트 노드를 자식 노드로 추가
$li.appendChlid(textNode);
// 텍스트 노드를 만들지 않고 부모 노드의 textContent 프로퍼티를 사용하는게 간편
$li.textContent = "Banana";
```
<hr><br>

## 복수의 노드 생성과 추가
여러 개의 요소 노드를 생성하여 DOM에 추가할 때 DOM에 여러번 추가하므로 DOM이 반복되서 변경된다. DOM을 변경한느 것은 높은 처리 비용이므로 횟수를 줄이는 편이 성능에 유리하다.

그럼 어떻게 횟수를 줄일까? DOM에 추가할 여러요소를 컨테이너 요소에 자식 노드로 추가하고 컨테이너 요소를 실제 DOM 요소 자식으로 추가한다면 DOM은 한 번만 변경된다. 

이때 컨테이너는 div태그가 될 수도 있지마 이렇게 된다면 쓸모없이 빈 div 태그를 차지에 바람직하지 않다.

DoucumentFragment를 통해 모든 것을 해결할 수 있다. DoucumentFragment는 부모 노드가 없어서 기존 DOM과 별도로 존재하는 특징이 있다. DoucumentFragment 노드를 DOM에 추가하면 자신은 제거되고 자신의 자식 노드만 DOM에 추가된다.

```HTML
<body>
    <ul id="fruits"></ul>
    <script>
        const $fruits = document.querySelector("#fruits");

        const $fragment = document.createDocumentFragment(); // fragment 노드 생성

        ["Apple", "Banana", "Orange"].forEach(text => {
            const $li = document.createElement("li");
            
            $li.textContent = text;
            $fragment.append($li); // fragment에 자식 li 추가
        })

        // fragment에 담은 li 태그들을 실제 DOM 부모 노드에 한 번만 추가
        $fruits.appendChild($fragment);
    </script>
</body>
```
<hr><br>

## 노드 삽입
- 마지막 노드로 추가

    appendChild 메서드는 인수로 전달받은 노드를 자신을 호출한 노드의 항상 마지막 자식 노드로 DOM에 추가한다.

- 지정한 위치에 노드 삽입
    
    insertBefore(newNode, childNode) 메서드는 첫 번째 인수로 전달받은 노드를 두 번째 인수로 전달받은 노드 앞에 삽입한다. 두번 째 인수는 반드시 호출한 노드의 자식 노드이어야 한다. 만약 두번 째 인수가 null이면 appendChild처럼 맨 마지막 자식 노드로 추가된다.

```HTML
<body>
    <ul id="fruits">
        <li>Apple</li>
        <li>Banana</li>
    </ul>
    <script>
        const $f = document.querySelector("#fruits");
        const $li = document.createElement("li");

        $li.textContent = "Orange";
        // 마지막 자식 노드로 추가
        $f.appendChild($li);
        // li요소를 마지막 자식 노드 앞에 삽입
        $f.insertBefore($li, $f.lastElementChild);
    </script>
</body>
```
<hr><br>

## 노드 이동
DOM에 이미 존재하는 노드를 appendChild 또는 insertBefore 메서드를 사용하여 다시 추가하면 현재 위치에서 노드를 제거하고 메서드에 따라 새로운 위치에 노드를 추가되며 이동하게 된다.

```HTML
<body>
    <ul id="fruits">
        <li>Apple</li>
        <li>Banana</li>
    </ul>
    <script>
        const $fru = document.querySelector("#fruits");
        const [$apple, $banana] = $fru.children;

        // 이미 존재하는 apple 요소를 맨 마지막으로 이동
        $fru.appendChild($apple); // banana -> apple
        // 이미 존재하는 banana 요소를 맨 마지막 자식 앞으로 이동         
        $fru.insertBefore($banana, $fruits.lastElementChild); // apple -> banana
    </script>
</body>
```
<hr><br>

## 노드 복사
cloneNode([deep : true || false]) 메서드는 노드의 사본을 생성하여 반환한다. 매개변수 depp에 true는 깊은 복사되어 모든 자손 노드가 포함된 사본을 생성, false는 얕은 복사가 되어 자신만의 사본을 생성한다.

```HTML
<body>
    <ul id="fruits">
        <li>Apple</li>
    </ul>
    <script>
        const $frui = document.querySelector("#fruits");
        const $apple1 = $frui.firstElementChild;
        const $shallow = $apple.cloneNode(); // 얕은 복사 텍스트 없는 빈 사본이다.
        const $deep = $frui.cloneNode(true); // 깊은 복사 모든 자손이 포함

        // 자식 마지막 요소에 banana추가
        $shallow.textContent = "banana";
        $frui.appendChild($shallow);

        // 부모 자손 모두를 복사한 사본 노드를 자식 마지막 노드로 추가
        $frui.appendChild($deep);
    </script>
</body>
```
<hr><br>

## 노드 교체
replaceChild(newChild, oldCHild) 메서드는 자신을 호출한 노드의 자식 노드를 다른 노드로 교체한다. 첫 번째 매개변수 newChild에는 교체할 새로운 노드를 인수로 전달하고 두 번째 매개변수 oldChild에는 이미 존재하는 교체될 노드를 인수로 전달한다.

oldChild 매개변수에 인수로 전달한 노드는 replaceChild 메서드를 호출한 노드의 자식 노드이어야 한다.

```HTML
<body>
    <ul id="fruits">
        <li>Apple</li>
    </ul>
    <script>
        const $fruit = document.querySelector("#fruits");

        const $newChild = document.createElement("li");
        $newChild.textContent = "Banana";

        // Apple위치에 새로운 자식 Banana를 채워넣고 Apple은 삭제됨
        $fruit.replaceChild($newChild, $fruit.firstElementChild);
    </script>
</body>
```
<hr><br>

## 노드 삭제
removeChild(child) 메서드는 child 매개변수에 인수로 전달한 노드를 DOM에서 삭제한다. 인수로 전달한 노드는 removeChild 메서드를 호출한 노드의 자식이어야 한다.

```HTML
<body>
    <ul id="fruits">
        <li>Apple</li>
        <li>Banana</li>
    </ul>
    <script>
        const $fruits1 = document.querySelector("#fruits");

        // fruits 요소 노드의 마지막 자식 노드를 DOM에서 삭제
        $fruits1.removeChild($fruits1.lastElementChild);
    </script>
</body>
```
<hr><br>