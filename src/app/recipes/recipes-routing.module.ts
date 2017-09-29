import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';

const recipesRoute: Routes = [
  { path: '', component: RecipesComponent,
      children: [ {path: '', component: RecipeStartComponent }, // switch order
                  {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
                  {path: ':id', component: RecipeDetailComponent },
                  {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
      ]
},
];

@NgModule({
  imports: [RouterModule.forChild(recipesRoute)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class RecipesRoutingModule { }
