import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookComponent } from './pages/book/book.component';


const routes: Routes = [
  {
    path:'',
    redirectTo : '/Home',
    pathMatch : 'full'
  },
  {
    path : 'Home',
    component : HomeComponent
  },
  {
    path : 'Book',
    component : BookComponent
  },
  {
    path: 'Auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
