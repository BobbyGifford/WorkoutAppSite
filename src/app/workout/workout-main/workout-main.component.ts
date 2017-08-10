import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ExerciseList } from "app/workout/exerciseList.model";
import { Subscription } from "rxjs/Subscription";
import { WorkoutService } from "app/workout/workout.service";

@Component({
  selector: 'app-workout-main',
  templateUrl: './workout-main.component.html',
  styleUrls: ['./workout-main.component.css']
})
export class WorkoutMainComponent implements OnInit {
  name:String;
  category:String;

  constructor(private service: WorkoutService, private router: Router, private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
  }

  onStrength(){
    this.category = "Strength";
    this.router.navigate(['item'])
    this.service.setCategory(this.category);
    this.service.categoryCheck();
  }

  onCardio(){
    this.category = "Cardio"
    this.router.navigate(['item'])
    this.service.setCategory(this.category)
    this.service.categoryCheck();
  }

  onAdd(){
    this.router.navigate(['add']);
  }

}
