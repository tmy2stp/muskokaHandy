import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LawyerDetailComponent } from './components/lawyer-detail/lawyer-detail.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'lawyer/:id', component: LawyerDetailComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
