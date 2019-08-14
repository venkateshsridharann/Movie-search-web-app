import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ViewpageComponent } from './viewpage/viewpage.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: SearchbarComponent },
  { path: 'movies', component: ViewpageComponent },
  { path: 'details', component: DetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
