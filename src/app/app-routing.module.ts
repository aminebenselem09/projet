import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AproposComponent } from './apropos/apropos.component';
import { SectionComponent } from './section/section.component';

const routes: Routes = [
  {path:'' ,component :SectionComponent},
  {path :"contact" ,component:ContactComponent},
  {path :"A propos" ,component:AproposComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
