import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path:'', loadChildren: () => import('mfUser/UserModule').then((m) => m.UserModule)},
  {
    path: '',
    loadChildren: () =>
      import('mfUser/UserModule').then((m) => m.UserModule),
  },
  { path:'user', loadChildren: () => import('mfUser/UserModule').then((m) => m.UserModule)},
  { path:'register', loadChildren: () => import('mfRegister/RegisterModule').then((m) => m.RegisterModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
