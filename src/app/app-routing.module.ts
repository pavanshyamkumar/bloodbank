import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategorieComponent } from './pages/admin/add-categorie/add-categorie.component';
import { AddDonorComponent } from './pages/admin/add-donor/add-donor.component';
import { AddDonortwoComponent } from './pages/admin/add-donortwo/add-donortwo.component';
import { AddNewUserComponent } from './pages/admin/add-new-user/add-new-user.component';
import { AdminUpdateUserComponent } from './pages/admin/admin-update-user/admin-update-user.component';
import { AlldonorsComponent } from './pages/admin/alldonors/alldonors.component';
import { BloodCategoriesComponent } from './pages/admin/blood-categories/blood-categories.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UpdateCategoryComponent } from './pages/admin/update-category/update-category.component';
import { UpdatedonorComponent } from './pages/admin/updatedonor/updatedonor.component';
import { ViewDonorsComponent } from './pages/admin/view-donors/view-donors.component';
import { ViewUsersComponent } from './pages/admin/view-users/view-users.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UpdateUserComponent } from './pages/user/update-user/update-user.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { UserViewDonordetailsComponent } from './pages/user/user-view-donordetails/user-view-donordetails.component';
import { UserViewDonorsComponent } from './pages/user/user-view-donors/user-view-donors.component';
import { UserWelcomeComponent } from './pages/user/user-welcome/user-welcome.component';
import { UserbloodcategoriesComponent } from './pages/user/userbloodcategories/userbloodcategories.component';
import { AdminGuard } from './services/admin.guard';
import { NormaluserGuard } from './services/normaluser.guard';

const routes: Routes = [
{
  path:'',
  component:HomeComponent,
  pathMatch:'full',
},
{
  path:'signup',
  component:SignupComponent,
  pathMatch:'full',
},
{
  path:'login',
  component:LoginComponent,
  pathMatch:'full',
  
},

{
  path:'admin',
  component:DashboardComponent,
  
  canActivate:[AdminGuard],
  children:[
    {
      path:'profile',
      component:ProfileComponent,

    },
    {
      path:'',
      component:WelcomeComponent,
    },
    {
      path:'viewusers',
      component:ViewUsersComponent,
    },
    {
      path:"addnewuser",
      component:AddNewUserComponent,
    },
    {
      path:"updateuser/:id",
      component:AdminUpdateUserComponent,
    },
    {
      path:"viewcategories",
      component:BloodCategoriesComponent,
    },
    {
      path:"update/:cid",
      component:UpdateCategoryComponent,
    },
    {
      path:"view-donors/:cid/:title",
      component:ViewDonorsComponent,
    },
    {
      path:'adddonor/:cid',
      component:AddDonorComponent,
      
    },
    {
      path:'addonor',
      component:AddDonortwoComponent,
    },
    {
      path:'alldonors',
      component:AlldonorsComponent,
    },
    {
      path:'update-donor/:did',
      component:UpdatedonorComponent,
    }
    
  ]
},
{
  path:'user',
  component:UserDashboardComponent,
 
  canActivate:[NormaluserGuard],
  children:[
    {
      path:'profile',
      component:ProfileComponent,

    },
    {
      path:'',
      component:UserWelcomeComponent,
    },
    {
      path:'update',
      component:UpdateUserComponent,
    },
    {
      path:'view-categories',
      component:UserbloodcategoriesComponent,
    },
    {
      path:'view-donors/:cid/:title',
      component:UserViewDonorsComponent,
    },
    {
      path:'view-donordetails/:did',
      component:UserViewDonordetailsComponent,
    }
    
  ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
