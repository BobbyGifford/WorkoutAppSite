import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { WorkoutService } from "app/workout/workout.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-edit-exercise',
  templateUrl: './edit-exercise.component.html',
  styleUrls: ['./edit-exercise.component.css']
})
export class EditExerciseComponent implements OnInit {
  i;

  constructor(private service: WorkoutService, private router: Router) {
    this.i = service.getIndex();
   }

  ngOnInit() {
  }

  onHome(){
  this.router.navigate(['home'])
  }


  onSubmit(form: NgForm){
    if (this.service.getExerciseList()[this.i].category == "strength" ){
      let newStr = {category:"strength", name:form.value.name, 
      desc:form.value.desc, isCustom:true};

      this.service.getStrList()[this.i] = newStr;
      // this.service.strList[this.i].name = form.value.name;
      // this.service.strList[this.i].desc = form.value.desc;
    }

    if (this.service.getExerciseList()[this.i].category == "cardio"){
      let newCardio = {category:"cardio", name:form.value.name, 
      desc:form.value.desc, isCustom:true};

      this.service.getCardioList()[this.i] = newCardio;

      // this.service.cardioList[this.i].name = form.value.name;
      // this.service.cardioList[this.i].desc = form.value.desc;
    }
    form.reset();
    this.router.navigate(['home']);
  }

}
