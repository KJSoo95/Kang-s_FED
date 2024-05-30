// Class, This, Private, Public, readonly
// Class : 사용할 객체의 청사진같은 용도
//this
//private :  클래스 밖에서 접근 불가능
//public : 항상 접근 가능
//protected : 상속받은 클래스에서도 접근 가능
// readonly : 직접수정 말고는 읽기만 가능
// extends
//  super

const Class = () => {
  // Department 라는 함수에 constrictor로 props를 받아와서 methods(함수)로 기능구현
  class Department {
    // private readonly id : string;
    // public name: string;
    protected employees: string[] = [];

    // constructor(n: string) {
    //   this.name = n;
    // }
    //// 위의 식 보다는 아래 식으로 많이 씀

    constructor(private readonly id: string, public name: string) {}

    describe(this: Department) {
      console.log(`Departmanet (${this.id}) : ${this.name}`);
    }

    addEmployee(employee: string) {
      this.employees.push(employee);
    }

    printEmployeeInformation(this: Department) {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }

  // IT 부서 선언
  class ITDepartment extends Department {
    public admins: string[];
    constructor(id: string, admins: string[]) {
      super(id, "IT"); // 항상 super를 먼저 사용한 수 그 밑에 추가 해줘야 함
      this.admins = admins;
    }
  }

  // 회계부서 선언
  class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
      super(id, "Accounting");
    }

    addReports(text: string) {
      this.reports.push(text);
    }
    printReports() {
      console.log(this.reports);
    }
    addEmployee(name: string) {
      if (name === "MAX") return;
      this.employees.push(name);
    }
  }

  // ITDepartment 호출
  const it = new ITDepartment("IT", ["MAX"]);
  it.addEmployee("MAX");
  it.addEmployee("David");

  it.describe();
  it.name = "ITD";
  it.printEmployeeInformation();
  console.log(it);

  // AccountingDepartment 호출
  const accounting = new AccountingDepartment("d2", []);
  accounting.describe();
  accounting.addReports("Somethig went Wrong ...");
  accounting.printReports();
  accounting.addEmployee("Manu");
  console.log(accounting);

  return <div></div>;
};

export default Class;
