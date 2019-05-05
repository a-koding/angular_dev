import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { MenuConfigComponent } from './admin/menu-config/menu-config.component';
import { GroupConfigComponent } from './admin/group-config/group-config.component';
import { GroupFormComponent } from './admin/group-form/group-form.component';
import { AuthGuard } from './shared/authentication_guard/auth.guard';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'menu_config', component: MenuConfigComponent},
      {path: 'group_config', component: GroupConfigComponent},
      {path: 'group_form', component: GroupFormComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
