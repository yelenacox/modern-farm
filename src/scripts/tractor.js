import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"


//define and export a plantSeeds function
//must accept this year's planting plan as input (i.e. define a parameter)


export const plantSeeds = (plantingPlan) => {
    //planting plan is an array with 4 arrays.
    //both parent and children arrays need to be iterated
    for (const plantRow of plantingPlan) {
        for (const plantObj of plantRow) {
            //while iterating the row of food types to be planted, invoke the corresponding factory function (e.g. if the food type is "Asparagus", invoke the createAsparagus function to get an asparagus seed).
            if (plantObj === "Asparagus") {
                addPlant(createAsparagus())
            }
            if (plantObj === "Corn") {
                addPlant(createCorn())
            }
            if (plantObj === "Potato") {
               addPlant(createPotato())
            }
            if (plantObj === "Soybean") {
                addPlant(createSoybean())
            }
            if (plantObj === "Sunflower") {
                addPlant(createSunflower())
            }

            if (plantObj === "Wheat") {
                addPlant(createWheat())
            }
        }
        //that seed should then be added to the usePlants (maybe?) array from field.js
    }    
}
// console.log(plantSeeds(plantingPlan))