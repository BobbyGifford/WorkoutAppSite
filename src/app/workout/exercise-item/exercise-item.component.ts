import { Component, OnInit, Input } from '@angular/core';
import { WorkoutService } from "app/workout/workout.service";
import { Subscription } from "rxjs/Subscription";
import { Router } from "@angular/router";

@Component({
  selector: 'app-exercise-item',
  templateUrl: './exercise-item.component.html',
  styleUrls: ['./exercise-item.component.css']
})
export class ExerciseItemComponent implements OnInit {
  category: String;
  name: String;
  desc: String;
  index;

  show: boolean = false;
  exerciseList = new Array;
  subscription:Subscription;
  isCustom = false;

  constructor(private router:Router, private service: WorkoutService) { }

  ngOnInit() {
    this.subscription = this.service.listChange.subscribe(
      (newList:Array<object>) => { this.exerciseList = newList }
    )
  this.exerciseList = this.service.getExerciseList();
  this.category = this.service.getCategory();
  }

  onHome(){
    this.router.navigate(['/home'])
  }

  onSetExercise(i){
    this.index = i;
    this.service.setIndex(i);
    this.service.show = true;
    this.show = true;
    if ( this.exerciseList[i].isCustom == true ) {
        this.isCustom = true;
    }
  }

  onEdit(){
  this.router.navigate(['edit'])
  }

    ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
