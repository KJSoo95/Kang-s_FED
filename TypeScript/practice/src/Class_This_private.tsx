// Class, This, Private, Public, readonly
// Class : 사용할 객체의 청사진같은 용도
//this
//private :  클래스 밖에서 접근 불가능
//public : 항상 접근 가능
//protected : 상속받은 클래스에서도 접근 가능
// readonly : 직접수정 말고는 읽기만 가능
// extends
//  super
// static 정적매서드, 정적프로퍼티
// abstract 추상키워드 (상속받은 머서드에서 무조건 사용하도록 강요)

const Class = () => {
  // Department 라는 함수에 constrictor로 props를 받아와서 methods(함수)로 기능구현
  abstract class Department {
    static fiscalYear = 2024; //정적 프로퍼티

    // private readonly id : string;
    // public name: string;
    protected employees: string[] = [];

    // constructor(n: string) {
    //   this.name = n;
    // }
    //// 위의 식 보다는 아래 식으로 많이 씀

    constructor(protected readonly id: string, public name: string) {}

    static createEmployee(name: string) {
      // 정적매서드
      return { name: name };
    }
    abstract describe(this: Department): void; // 추상매서드 Department를 상속받은 매서드들은 describe를 무조건 사용해야함

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
    describe() {
      console.log("IT Department id : " + this.id);
    }
  }

  // 회계부서 선언
  class AccountingDepartment extends Department {
    private lastReports: string;
    private static instance: AccountingDepartment;

    describe() {
      console.log("Accountinf Department id : " + this.id);
    }

    get mostRecentReports() {
      if (this.lastReports) {
        return this.lastReports;
      }
      throw new Error("No report found");
    }

    set mostRecentReports(value) {
      if (!value) {
        throw new Error("Please input value");
      }
      this.addReports(value);
    }

    private constructor(id: string, private reports: string[]) {
      super(id, "Accounting");
      this.lastReports = reports[0];
    } // 싱글톤 패턴

    static getInstance() {
      if (AccountingDepartment.instance) {
        return this.instance;
      } // 인스턴스가 있으면 그걸 반환하고
      this.instance = new AccountingDepartment("d2", []);
      return this.instance; // 없으면 새로운 인스턴스를 반환한다.
    }

    addReports(text: string) {
      this.reports.push(text);
      this.lastReports = text;
    }
    printReports() {
      console.log(this.reports);
    }
    addEmployee(name: string) {
      if (name === "MAX") return;
      this.employees.push(name);
    }
  }
  const employee1 = Department.createEmployee("Min");
  console.log(employee1);

  // ITDepartment 호출
  const it = new ITDepartment("IT", ["MAX"]);
  it.addEmployee("MAX");
  it.addEmployee("David");

  it.describe();
  it.name = "ITD";
  it.printEmployeeInformation();
  console.log(it);

  // AccountingDepartment 호출
  // const accounting = new AccountingDepartment("d2", []);
  const accounting = AccountingDepartment.getInstance();

  accounting.describe();
  accounting.mostRecentReports = "Year End Reports";
  accounting.addReports("Somethig went Wrong ...");
  console.log(accounting.mostRecentReports);
  accounting.printReports();
  accounting.addEmployee("Manu");
  console.log(accounting);

  return <div></div>;
};

export default Class;
