import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { SearchEmployeeByDeptComponent } from './search-employee-by-dept/search-employee-by-dept.component';
import { SearchEmployeeByIdComponent } from './search-employee-by-id/search-employee-by-id.component';
import { SearchEmployeeByNameComponent } from './search-employee-by-name/search-employee-by-name.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


const routes: Routes = [
  { path: '', redirectTo: '/list-employee', pathMatch: 'full' },
  {path:'list-employee',component:ListEmployeesComponent},
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'search-employee-by-id/empId/:empId', component: SearchEmployeeByIdComponent },
  { path: 'search-employee-by-name/empName/:empName', component: SearchEmployeeByNameComponent },
  { path: 'search-employee-by-dept/empDept/:empDept', component: SearchEmployeeByDeptComponent },
  { path: 'update-employee/:empId', component: UpdateEmployeeComponent },
  { path: 'delete-employee/:empId', component: DeleteEmployeeComponent }

];

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
