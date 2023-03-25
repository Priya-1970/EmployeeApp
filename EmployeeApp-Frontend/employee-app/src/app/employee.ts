export class Employee {
    setValue(arg0: { empId: any; empName: any; empDept: any; empDes: any; empSal: any; }) {
      throw new Error('Method not implemented.');
    }
    find(arg0: (employee: { empId: number; }) => boolean) {
      throw new Error('Method not implemented.');
    }
    empId!:number;
    empName!:string;
    empDept!:string;
    empDes!:string;
    empSal!:number;
}
