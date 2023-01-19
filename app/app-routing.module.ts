import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { FourthComponent } from './fourth/fourth.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

// to make it work sa taas sa link ari mag butang ug properties ikaw mag bahala sa imohang formatting sa names
const routes: Routes = [
  { path: 'first-component', component: FirstComponent},
  { path: 'second-component', component: SecondComponent},
  { path: 'third-component', component: ThirdComponent},
  { path: 'fourth-component', component: FourthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
