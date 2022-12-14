import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { EditAddressComponent } from './components/edit-address/edit-address.component';
import { ListAddressComponent } from './components/list-address/list-address.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';
import { AfterAuthGuard } from './guards/after-auth.guard';

const routes: Routes = [
  {
    path: "", redirectTo: "/address", pathMatch:'full'
  },
  {
    path: "address", children:[
      {path: "", component: ListAddressComponent},
      {path: "edit/:id", component: EditAddressComponent},
      {path: "create", component: AddAddressComponent}
    ],canActivate: [AuthGuard]
  },
  {
    path: "login", component: LoginComponent,canActivate: [AfterAuthGuard]
  },
  {
    path: "**", component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
