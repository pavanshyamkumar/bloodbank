import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { UserSidebarComponent } from './pages/user/user-sidebar/user-sidebar.component';
import { UserWelcomeComponent } from './pages/user/user-welcome/user-welcome.component';
import { UpdateUserComponent } from './pages/user/update-user/update-user.component';
import { ViewUsersComponent } from './pages/admin/view-users/view-users.component';
import { AddNewUserComponent } from './pages/admin/add-new-user/add-new-user.component';
import { AdminUpdateUserComponent } from './pages/admin/admin-update-user/admin-update-user.component';
import { BloodCategoriesComponent } from './pages/admin/blood-categories/blood-categories.component';
import { AddCategorieComponent } from './pages/admin/add-categorie/add-categorie.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdateCategoryComponent } from './pages/admin/update-category/update-category.component';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ViewDonorsComponent } from './pages/admin/view-donors/view-donors.component';
import { AddDonorComponent } from './pages/admin/add-donor/add-donor.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AddDonortwoComponent } from './pages/admin/add-donortwo/add-donortwo.component';
import {MatSelectModule} from '@angular/material/select';
import { AlldonorsComponent } from './pages/admin/alldonors/alldonors.component';
import { UpdatedonorComponent } from './pages/admin/updatedonor/updatedonor.component';
import { UserbloodcategoriesComponent } from './pages/user/userbloodcategories/userbloodcategories.component';
import { UserViewDonorsComponent } from './pages/user/user-view-donors/user-view-donors.component';
import { UserViewDonordetailsComponent } from './pages/user/user-view-donordetails/user-view-donordetails.component';
import { UserNavbarComponent } from './pages/user/user-navbar/user-navbar.component';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    UserSidebarComponent,
    UserWelcomeComponent,
    UpdateUserComponent,
    ViewUsersComponent,
    AddNewUserComponent,
    AdminUpdateUserComponent,
    BloodCategoriesComponent,
    AddCategorieComponent,
    UpdateCategoryComponent,
    ViewDonorsComponent,
    AddDonorComponent,
    AddDonortwoComponent,
    AlldonorsComponent,
    UpdatedonorComponent,
    UserbloodcategoriesComponent,
    UserViewDonorsComponent,
    UserViewDonordetailsComponent,
    UserNavbarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatMenuModule,
   
    

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
  entryComponents:[AddCategorieComponent]
})
export class AppModule { }
