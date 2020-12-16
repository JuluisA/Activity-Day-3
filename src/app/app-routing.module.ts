import { NgModule, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { MyclientsComponent } from './pages/myclients/myclients.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'my-profile', component: MyprofileComponent
  },
  {
    path: 'my-client', component: MyclientsComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
