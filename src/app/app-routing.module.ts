import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddChickenComponent } from './add-chicken/add-chicken.component';
import { ListChickenComponent } from './list-chicken/list-chicken.component';
import { DetailsChickenComponent } from './details-chicken/details-chicken.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
    // { path: '', component:  },
     { path: '', component: ListChickenComponent },
     { path: 'chickens', component: AddChickenComponent },
     { path: 'chickens/:id/detail', component: DetailsChickenComponent  },
     { path: 'chickens/:id/edit', component: EditComponent  },
    // Ajoutez d'autres routes selon vos besoins
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  