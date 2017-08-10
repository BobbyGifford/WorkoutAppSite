import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WorkoutService } from "app/workout/workout.service";
import { WorkoutMainComponent } from './workout/workout-main/workout-main.component';
import { RoutingModule } from "app/routing";
import { ExerciseItemComponent } from './workout/exercise-item/exercise-item.component';
import { AddExerciseComponent } from './workout/add-exercise/add-exercise.component';
import { EditExerciseComponent } from './workout/edit-exercise/edit-exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutMainComponent,
    ExerciseItemComponent,
    AddExerciseComponent,
    EditExerciseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [ WorkoutService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
