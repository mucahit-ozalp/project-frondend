import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmantFormComponent } from './departmant-form/departmant-form.component';
import { DepartmantListComponent } from './departmant-list/departmant-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import {DefectFormComponent} from './defect-form/defect-form.component'


const routes: Routes = [
  { path: '',component:UserFormComponent},
  { path: 'departmant', component: DepartmantListComponent,canActivate:[AuthGaurdService] },
  { path: 'adddepartmant', component: DepartmantFormComponent,canActivate:[AuthGaurdService] },
  { path: 'defect', component: DefectFormComponent,canActivate:[AuthGaurdService] },
  { path: 'login', component: UserFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
