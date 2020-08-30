import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ListReposComponent } from './list-repos/list-repos.component';
import { InfoReposComponent } from './info-repos/info-repos.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'info-repos'},
  {path: 'info-repos', component: InfoReposComponent},
  {path: 'list-repos', component: ListReposComponent},
  {path: 'contact-us', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
