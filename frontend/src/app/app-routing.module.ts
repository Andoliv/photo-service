import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhotoComponent} from './photo';
import {PhotoApprovalComponent} from './photo-approval';
import {PageNotFoundComponent} from "./page-not-found";

const routes: Routes = [
  {
    path: '',
    redirectTo: "/photo",
    pathMatch: 'full'
  },
  {path: 'photo', component: PhotoComponent},
  {path: 'photo-approval/:id', component: PhotoApprovalComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

