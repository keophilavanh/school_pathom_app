import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'movement',
    loadChildren: () => import('./movement/movement.module').then( m => m.MovementPageModule)
  },
  {
    path: 'moneypayment',
    loadChildren: () => import('./moneypayment/moneypayment.module').then( m => m.MoneypaymentPageModule)
  },
  {
    path: 'student-point',
    loadChildren: () => import('./student-point/student-point.module').then( m => m.StudentPointPageModule)
  },
  {
    path: 'student-point-months',
    loadChildren: () => import('./student-point-months/student-point-months.module').then( m => m.StudentPointMonthsPageModule)
  },
  {
    path: 'student-point-subject',
    loadChildren: () => import('./student-point-subject/student-point-subject.module').then( m => m.StudentPointSubjectPageModule)
  },
  {
    path: 'student-profile',
    loadChildren: () => import('./student-profile/student-profile.module').then( m => m.StudentProfilePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
