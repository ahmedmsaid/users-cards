import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsContainerComponent } from './Components/cards-container/cards-container.component';
import { CardDetailsComponent } from './Components/card-details/card-details.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: CardsContainerComponent},
  {path: 'users', component: CardsContainerComponent},
  {path: 'users/:id', component: CardDetailsComponent },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
