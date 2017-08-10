import { Component } from '@angular/core';
import { WorkoutService } from "app/workout/workout.service";
import { ExerciseList } from "app/workout/exerciseList.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  // defaultList:ExerciseList[];

    // constructor(private service: WorkoutService) {
    //  }

    //  ngOnInit() {
    //     this.defaultList = this.service.getList;
    //  }
}
