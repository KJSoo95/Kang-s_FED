// import React from "react";

// 인터페이스는 객체의 구조를 정의하고 객체가 인터페이스랑 일치하는지 확인
// 인터페이스도 상속 가능
const Interface = () => {
  // type AddFn = (a: number, b: number) => number;
  interface AddFn {
    (a: number, b: number): number;
  }

  const add: AddFn = (n1: number, n2: number) => {
    return n1 + n2;
  };

  // ---------------------------

  interface Named {
    readonly name?: string; // 선택적 매개변수
  }

  interface Greetable extends Named {
    greet(phrase: string): void;
  }

  class Person implements Greetable {
    name?: string;
    age = 30;

    constructor(n?: string) {
      if (n) {
        this.name = n;
      }
    }

    greet(phrase: string): void {
      if (this.name) {
        console.log(phrase + " " + user1.name);
      } else {
        console.log("Hi");
      }
    }
  }

  const user1: Greetable = new Person();
  user1.greet("Hi iam");
  console.log(user1);

  return <div></div>;
};

export default Interface;
