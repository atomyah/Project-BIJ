import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyPageComponent } from './lazy-page/lazy-page.component';
import { LazyhomeComponent } from './lazyhome/lazyhome.component';
import { LazyRootComponent } from './lazy-root/lazy-root.component';

const routes: Routes = [
  { path: '', component: LazyRootComponent,
    children: [
      { path: 'lazyhome', component: LazyhomeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
