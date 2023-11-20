# 리플로우와 리페인트

DOM이나 CSSOm을 변경한는 DOM API가 사용된 경우 DOM이나 CSSOM이 변경된다.

이때 변경된 DOM과 CSSOM은 다시 렌더 트리로 결합되고 변경된 렌더 트리를 기반으로 레이아웃과 페인트 과정을 거쳐 브라우저의 화면에 다시 렌더링한다.

이를 리플로우, 리페인트라 한다.

![Alt text](image.png)

### 리플로우

리플로우는 레이아웃 계산을 다시 하는 것을 의미하며 노드 추가/삭제, 요소의 크기/위치 변경, 윈도우 리사이징 등 레이아웃에 영향을 주는 변경이 발생한 경우 한하여 실행된다.

ex) position, width, height, margin, padding, border, border-width, font-size, font-weight, line-height, text-align, overflow

### 리페인트

리페인트느 재결합된 렌더 트리를 기반으로 다시 페인트를 하는 것을 말한다.

리플로우와 리페인트가 반드시 순차적으로 동시에 실행되는 것은 아니다. 레이아웃에 영향이 없는 변경은 리플로우 없이 리페인트만 실행된다.

ex) background, color, text-decoration, border-style, border-radius

<hr>
