import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { WorkoutService } from "app/workout/workout.service";

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {

  constructor(private router: Router, private service: WorkoutService) { }

  ngOnInit() {
  }

  onHome(){
  this.router.navigate(['home'])
  }

  onSubmit(form: NgForm){
    let newStr = {category: "strength", name: form.value.name, desc: form.value.desc, isCustom: true};
    let newCardio = { category: "cardio", name: form.value.name, desc: form.value.desc, isCustom: true };

    if (form.value.category == "strength"){
      this.service.getStrList().push(newStr);
    }

    if (form.value.category == "cardio"){
      this.service.getCardioList().push(newCardio);
    }

    form.reset();

    this.router.navigate(['home']);
  }


}
