import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { SqrComponent } from './sqr/sqr.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'sqr', component: SqrComponent},
  {path: 'add', component: AddComponent},
  {path: '**', component: HomeComponent},
  {path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }