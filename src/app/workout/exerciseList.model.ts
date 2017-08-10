import { Exercise } from "app/workout/exercise.model";

export class ExerciseList {
    public category:String;
    public testList:Exercise[];

    constructor(category: String){
        if (category.toLowerCase() == "strength"){
            this.category = "Strength";
            let benchPress = new Exercise("Bench", "aaaaaaaaaaaaaaaaaa", false);
            this.testList.push(benchPress);
        }

        if (category.toLowerCase() == "cardio"){
            this.category = "Cardio";
            let run = new Exercise("Run", "long distance run long distance run",
             false);
            this.testList.push(run);
        }
    }


    getExerciseList(){
        return this.testList;
    }
}