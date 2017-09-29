import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule,
            ReactiveFormsModule,
            RecipesRoutingModule,
            SharedModule
          ],
  exports: [],
  declarations: [RecipesComponent,
                 RecipeStartComponent,
                 RecipeListComponent,
                 RecipeItemComponent,
                 RecipeEditComponent,
                 RecipeDetailComponent,
                ],
  providers: [],
})
export class RecipesModule { }
