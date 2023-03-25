import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { SearchEmployeeByIdComponent } from './search-employee-by-id/search-employee-by-id.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { FormsModule } from '@angular/forms';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { SearchEmployeeByNameComponent } from './search-employee-by-name/search-employee-by-name.component';
import { SearchEmployeeByDeptComponent } from './search-employee-by-dept/search-employee-by-dept.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    SearchEmployeeByIdComponent,
    UpdateEmployeeComponent,
    ListEmployeesComponent,
    DeleteEmployeeComponent,
    SearchEmployeeByNameComponent,
    SearchEmployeeByDeptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
