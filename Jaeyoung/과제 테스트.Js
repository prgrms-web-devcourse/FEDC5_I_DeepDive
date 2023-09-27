
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Binary {
  constructor() {
    this.root = null;
  }

  push(value) {
    if (!value) {
      throw Error("빈값 금지~")
    }
    const newNode = new Node(value);

    // 맨 첫 Push값 처리
    if (this.root === null) {
      return this.root = newNode
    }

    // 현재 위치를 탐색함
    let currecursionnt = this.root
    // 위치에 넣을때까지 루프를 반복함
    while (currecursionnt !== null) {
      // 중복값 검열
      // 현재의 값 과 현재값의 오른쪽 값이 같다면?
      if (currecursionnt.value === currecursionnt.right?.value) {
        // 바로 현재값을 현재값의 다음값으로 넘겨줌
        currecursionnt = currecursionnt.right
      } else {

        // 진짜 넣기!
        // 만약 현재 값보다 주어진 value 가 크거나 같다면?
        if (currecursionnt.value <= value) {
          // 그리고 현재의 오른쪽 값이 비어있다면?
          if (currecursionnt.right === null) {
            // 바로 새로운 정점을 할당하고 종료
            currecursionnt.right = newNode;
            break;
          }
          // 현재 오른쪽값이 비어있지않다면 오른쪽 값을 할당함
          currecursionnt = currecursionnt.right
        } else {
          // 왼쪽값이 비어있다면?
          if (currecursionnt.left === null) {
            // 할당 종료
            currecursionnt.left = newNode;
            break;
          }
          // 현재값을 왼쪽값으로 변환
          currecursionnt = currecursionnt.left
        }
      }
    }
  }

  preOrder() {

    const array = []

    function recursion(node) {
      if (node !== null) {
        array.push(node.value)
        recursion(node.left)
        recursion(node.right)
      }
    }

    recursion(this.root)
    return array
  }

  postOrder() {
    // 출력 값을 받기위한 array
    const array = [];

    // 재귀 함수 사용
    function recursion(node) {
      // 지금 실행되어지는 함수는 node 가 null 이거나?
      // 혹은 아래 재귀가 다 끝나면 종료됨
      if (node !== null) {
        // 왼쪽 먼저 탐색하여 끝까지 이동
        recursion(node.left)
        // 그리고 왼쪽 끝까지 이동후 이번엔 그위치에서 오른쪽 이동후 
        // 계속해서 재귀 실행
        recursion(node.right)
        // 실행이 완료된 재귀함수들의 값을 array에 넣음
        array.push(node.value)
      }
    }
    recursion(this.root);
    return array
  }


  inOrder() {
    // 출력 값을 받을 array
    const stack = [];

    // 재귀함수를 이용
    function recursion(node) {
      // 현재의 이 함수는 node를 null을 전달받을때까지 
      if (node !== null) {
        // 일단 맨 왼쪽으로 이동
        recursion(node.left)
        // 이동후 맨뒤 쌓인 함수 실행이 null node를 전달받으면?
        // 이전 재귀함수의 정점 값을 stack에 넣고
        stack.push(node.value)
        // 이번엔 오른쪽 탐색
        recursion(node.right)

        // 이 루트가 무한 반복
      }
    }
    recursion(this.root)
    return stack
  }
}
