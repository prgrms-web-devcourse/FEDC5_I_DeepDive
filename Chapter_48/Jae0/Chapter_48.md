## 모듈 이란?

💡 개별적인 요소로 재사용이 가능한 코드 조각을 의미하고,
자기 자신만의 파일 스코프를 가질 수 있어야 모듈이라고 성립할 수 있음

만들어진 모듈의 자산은 기본적으로 비공개 상태로 다른 모듈에서 접근할 수 없는 캡슐화 상태

- 공개가 필요한 자산에 한정하여 명시적으로 `export`를 통해 선택적 공개가 가능함
- 공개한 자산의 일부 or 전체를 선택해 자신의 스코프로 불러올때는 `import`

### JavaScript의 모듈

스크립트 파일이 많아짐에 따라 스크립트 파일간의 **의존도를 파악하고 실행순서 제어**에 어려움이 생겨남

💡 이런 **불편함을 개선하기 위해 모듈 Module** 이 탄생

- 모듈 VS 컴포넌트
  - 모듈은 설계 시점에 의미 있는 요소
  - 컴포넌트는 런타임 시점에 의미있는 요소
- `import`와 `export`를 통해 모듈을 불러오고 내보낼 수 있음
- 모듈은 `http` `https` 프로토콜과 같은 서버를 실행해야만 동작함

**사용방법**

```jsx
//index.js

export function Test(text) {
  console.log(text + " 가능 ");
}
```

```html
<body>
  <script type="module">
    import { Test } from "./index.js";

    Test("실행"); // => 실행 가능
  </script>
</body>
```

**특징**

- 항상 `use strict`로 실행되어짐
- 모듈은 모듈 단위의 모듈 레벨 스코프가 존재함
- 단 한 번만 평가되어짐

  ```jsx
  index.js;

  console.log("몇번 실행이 될까?");
  ```

  ```html
  <script type="module">
    import "./index.js";
  </script>
  <script type="module">
    import "./index.js";
  </script>
  ```

  - 두번을 `import` 하더라도 \*\*\*\*한 번만 불러와짐

- 지연 실행이 가능함
  - 일반적으로 body 태그에서의 스크립트는 DOM이 생성되기전에 실행됨
    but 모듈은 자동으로 지연 실행이 되어 모**든** DOM이 만들어진후 사용됨

## ES6 Module

`import`

<aside>
💡 `export` 키워드로 내보내진 변수 , 함수 등등을 불러올 수 있는 키워드

</aside>

스크립트 의존성을 훨씬 간편하게 관리할 수 있음

- 항상 JS 파일 맨 위에 존재해야함

`default`

특정 모듈에서 기본적으로 내보내는 주요기능 또는 값을 나타냄

사용법

```jsx
import defaultExport from "module-name";
```

module-name 내에 `export` `default` 로 내보내진 것을 가져옴

```jsx
import * as allItems from "module-name";
```

module-name 내에서 `export`로 된 모든 것을 가져옴

`as` 이후 이름은 중복되지 않는다면 자유롭게 가져올 수 있음

```jsx
import { item } from "module-name";
```

module-name 내에서 `export` 된 것 중에 특정 값만 가져옴

```jsx
import { newNameItem as prevNameItem } from "module-name";
```

module-name 내에서 `export` 된 것 중에 특정 값만 이름을 바꿔서 가져옴

```jsx
import defaultFunction, { item } from "module-name";
```

export default 된 것과 개별 Export 된것을 한번에 가져 올 수 있음
