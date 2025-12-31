// LeetCode Problem: Add Two Numbers
// https://leetcode.com/problems/add-two-numbers

// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const createListNode = (arr: (number | null)[]): ListNode | null => {
  let newList: ListNode | null = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    const num = arr[i];
    if (num !== null) {
      newList = new ListNode(num, newList);
    }
  }
  return newList;
};

const showNumber = (arr: ListNode | null): string => {
  let num: string = '';
  while (arr?.val !== null && arr?.val !== undefined) {
    const currentNum = arr?.val;
    num = currentNum + num;

    arr = arr?.next ?? null;
  }

  return num;
};

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let result = [];
  let nextValue = 0;
  while (l1 || l2) {
    let sum = 0;
    if (l1?.val !== undefined) {
      sum += l1.val;
    }
    if (l2?.val !== undefined) {
      sum += l2.val;
    }
    sum += nextValue;
    if (sum >= 10) {
      sum = sum - 10;
      nextValue = 1;
    } else {
      nextValue = 0;
    }
    result.push(sum);

    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }
  if (nextValue) {
    result.push(nextValue);
  }
  const resultListNode = createListNode(result);
  return resultListNode;
}

// Test case 1

// const arr = [4, 3, 2, 1];
// const listNode = createListNode(arr);
// // console.log(showNumber(listNode!));

// const arrTest = [7, 3, 7, 9];
// const listNodeTest = createListNode(arrTest);
// // console.log(showNumber(listNodeTest!));

// const result = addTwoNumbers(listNode, listNodeTest);
// console.log(showNumber(result!));

// Test case 2

const arr2 = [0];
const listNode2 = createListNode(arr2);
// console.log(showNumber(listNode2!));

const arrTest2 = [0, 1];
const listNodeTest2 = createListNode(arrTest2);
// console.log(showNumber(listNodeTest2!));

const result2 = addTwoNumbers(listNode2, listNodeTest2);
console.log(showNumber(result2!));

// Test util functions

// const arr2 = [0];
// const listNode2 = createListNode(arr2);
// console.log(showNumber(listNode2!));

// const arr3 = [];
// const listNode3 = createListNode(arr3);
// console.log(showNumber(listNode3!));
