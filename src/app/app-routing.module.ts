import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './after/index/index.component';
import { AuthguardGuard } from './authguard.guard';
import { FrontindexComponent } from './before/frontindex/frontindex.component';
import { LoginComponent } from './before/login/login.component';

const routes: Routes = [
  {path:'',component:FrontindexComponent},
  {path:'index',component:IndexComponent,canActivate:[AuthguardGuard]},
  {path:'login',component:LoginComponent}     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
