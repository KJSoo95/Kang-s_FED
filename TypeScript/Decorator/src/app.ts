function Logger(logStr: string) {
  return function (constructor: Function) {
    console.log(logStr);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}
@WithTemplate("<h1>My Person Object</h1>", "app")
@Logger("LOGGING - PERSON")
class Person {
  name = "Nick";

  constructor() {
    console.log("Creating person object...");
  }
}
const pers = new Person();

function Log(target: any, propertyName: string | symbol) {
  console.log("Property Decorated");
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;

  set Price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw console.error("Invalid Price - should be positive!");
    }
  }
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
