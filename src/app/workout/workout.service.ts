import { Injectable } from '@angular/core';
import { ExerciseList } from "app/workout/exerciseList.model";
import { Subject } from "rxjs/Subject";
import { Exercise } from "app/workout/exercise.model";

@Injectable()
export class WorkoutService {

private exerciseList = new Array;

private strList = [
      {category:"strength", name:"Bench", desc:"Typical Bench", isCustom:false},
      {category:"strength", name:"Squat", desc:"Typical Squat", isCustom:false}
    ];

private cardioList = [
      {category:"cardio", name:"Run", desc:"Short fast run", isCustom:false},
      {category:"cardio", name:"Jog", desc:"Long Distance jog", isCustom:false}
    ]

private category:String;
private index: Number;

listChange = new Subject();
show: boolean = false;

categoryCheck(){
  if (this.category.toLowerCase() == "strength"){
    this.exerciseList = this.strList;
  }

  if (this.category.toLowerCase() == "cardio"){
    this.exerciseList = this.cardioList;
  }
}

setCategory( category: String){
  this.category = category;
}

getCategory(){
  return this.category;
}

getExerciseList(){
  return this.exerciseList;
}

getStrList(){
  return this.strList;
}

getCardioList(){
  return this.cardioList;
}

getIndex(){
  return this.index;
}

setIndex(index){
  this.index = index;
}





}
