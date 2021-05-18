import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DealDetailComponent } from './pages/deals/deal-detail/deal-detail.component';
import { MainComponent } from './pages/deals/main/main.component';
import { StoresComponent } from './pages/deals/stores/stores.component';
import { ErrorComponent } from './pages/error/error.component';


const routes: Routes = [
  // nested routes were giving me gray hairs, so I just left it basic to get it functional
  {
    path: '', component: MainComponent
  },
  {
    path: 'stores', component: StoresComponent
  },
  {
    path: 'deals', component: MainComponent
  },
  {
    path: 'details/:id', component: DealDetailComponent
  },
  {
    path: '*', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
