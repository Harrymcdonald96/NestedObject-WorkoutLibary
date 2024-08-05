const workoutLibrary = {
    muscleGroups: {
        legs: {
            exercises: [
                { name: "Squats", type: "Strength", equipment: "Barbell" },
                { name: "Leg Press", type: "Strength", equipment: "Machine" }
            ]
        },
        arms: {
            exercises: [
                { name: "Bicep Curl", type: "Strength", equipment: "Dumbbells" },
                { name: "Tricep Extension", type: "Strength", equipment: "Cable Machine" }
            ]
        },
        chest: {
            exercises: [
                { name: "Bench Press", type: "Strength", equipment: "Barbell" },
                { name: "Push Up", type: "Body Weight", equipment: "None" }
            ]
        },
        back: {
            exercises: [
                { name: "Pull Up", type: "Body Weight", equipment: "Pull-up Bar" },
                { name: "Deadlift", type: "Strength", equipment: "Barbell" }
            ]
        }
    },
    displayExercises: function(muscleGroup) {
        if (this.muscleGroups[muscleGroup]) {
            console.log(`Exercises for ${muscleGroup}:`);
            console.table(this.muscleGroups[muscleGroup].exercises);
        } else {
            console.log("Muscle group not found.");
        }
    }
};

// Using the object
workoutLibrary.displayExercises("arms");  // Display all exercises for the arms in a table
workoutLibrary.displayExercises("chest"); // Display all exercises for the chest in a table
