import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { WorkoutMainComponent } from "app/workout/workout-main/workout-main.component";
import { ExerciseItemComponent } from "app/workout/exercise-item/exercise-item.component";
import { AddExerciseComponent } from "app/workout/add-exercise/add-exercise.component";
import { EditExerciseComponent } from "app/workout/edit-exercise/edit-exercise.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: WorkoutMainComponent },
    { path: 'item', component: ExerciseItemComponent },
    { path: 'add', component: AddExerciseComponent },
    { path: 'edit', component: EditExerciseComponent },


    // { path: '', redirectTo: '/driver', pathMatch: 'full' },
    // { path: 'driver', component: FullListComponent, children: [
    //     { path: '', component: PageDriverComponent },
    //     { path: ':id', component: PersonDetailsComponent },
    //     { path: ':id/edit', component: PersonEditComponent }

    // ] },

    // { path: 'signup', component: SignupComponent },
    // { path: 'signin', component: SigninComponent },

];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class RoutingModule{
    
}
