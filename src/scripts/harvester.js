import { plantSeeds } from "./tractor.js"
// const seedsArray = plantSeeds()

//define and export harvestPlants function
/*harvestPlants must accept the plants array as input 
that means the plants array function must be imported
*/
//create empty array to capture seed objects

export const harvestPlants = (plantArray) => {
    const outputArray = []
    for (const plant of plantArray) {
        if (plant.type === "Corn") {
            for (let i = 0; i < (plant.output / 2); i++) {
                outputArray.push(plant)
            }
        } else {
            for (let i = 0; i < plant.output; i++) {
                outputArray.push(plant);
            }
        }
    }
    return outputArray
}


//functon will return an array of seed objects
//iterate the array of growing plants.
//on each array, get the value of the output property
//however many the output is (number) should add that many of the objects to the array
//for corn, only half of it should be added to the array

