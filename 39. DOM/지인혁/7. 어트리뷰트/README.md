## HTML 어트리뷰트 vs DOM 프로퍼티 ##

요소 노드는 2개의 상태, 즉 초기 상태와 최신 상태를 관리해야한다. 요소 노드의 초기 상태는 어트리뷰트 노드가 관리하며, 요소 노드의 최신 상태는 DOM 프로퍼티가 관리한다.

**어트리뷰트 노드**
HTML 어트리뷰트로 지정한 HTML 요소의 초기 상태는 어트리뷰트 노드에서 관리한다. getAtrribute/setAtrribute 메서드를 사용하여 값을 취득하거나 변경한다. 어트리ㅠ뷰트 값은 사용자의 입력에 의해 변하지 않으므로 결과는 언제나 동일하다.

**DOM 프로퍼티**
사용자가 입력한 최신 상태는 HTML 어트리뷰트에 대응하는 요소 노드의 DOM 프로퍼티가 관리한다. DOM 프로퍼티는 사용자의 입력에 의한 상태 변화에 반응하여 언제나 최신 상태를 유지한다.

```HTML
<body>
    <input type="text" id="user" value="ungmo2">
    <script>
        const $input = document.getElementById("user");

        $input.value = "foo"; // DOM 프로퍼티로 값 변경
        
        console.log($input.value); // foo
        // HTML 어트리뷰트며 DOM 프로퍼티로 변경해도 초기값을 갖는다.
        console.log($input.getAttribute("value")); // ungmo2
    </script>
</body>
```
<hr><br>

## data 어트리뷰트와 dataset 프로퍼티

data 어트리뷰트와 dataset 프로퍼티를 사용하면 HTML 요소에 정의한 사용자 정의 어트리뷰트와 자바스크립트 간에 데이터를 교환할 수 있다. data 어트리뷰트는 data-user-id, data-role과 같이 data- 접두사 다음에 임의의 이름을 붙여 사용한다.

```HTML
<body>
    <ul class="users">
        <li id="1" data-user-id="7621" data-role="admin">Lee</li>
    </ul>
    <script>
        const $li = document.querySelector("#1");

        console.log($li.dataset.userId); // 7621
        console.log($li.dataset.role); // admin

        $li.dataset.role = "subscriber";
        console.log($li.dataset.role); // subscriber
    </script>
</body>
```
<hr><br>