import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularWebStorageModule } from 'angular-web-storage';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MenuConfigComponent } from './admin/menu-config/menu-config.component';
import { DataTablesModule } from 'angular-datatables';
import { GroupConfigComponent } from './admin/group-config/group-config.component';
import { GroupFormComponent } from './admin/group-form/group-form.component';
import { AuthGuard } from './shared/authentication_guard/auth.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { menuservice } from './shared/menu.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    MenuConfigComponent,
    GroupConfigComponent,
    GroupFormComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularWebStorageModule,
    AngularFontAwesomeModule,
    DataTablesModule
  ],
  providers: [AuthGuard,menuservice],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = 'selecteduser';
 }
