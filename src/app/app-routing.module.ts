import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovelsComponent } from './novels/novels.component';
import { HomeComponent } from './home/home.component';
import { WomenComponent } from './women/women.component';
const routes: Routes = [
	{
		path: '', component: HomeComponent
	},
	{
		path: 'novels', component: NovelsComponent
	},
	{
		path: 'women', component: WomenComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
