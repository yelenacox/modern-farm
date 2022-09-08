import { createPlan } from "./plan.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"
plantSeeds(createPlan())
const testVariable = Catalog(harvestPlants(usePlants()))
console.log(testVariable)
// const foodArray = harvestPlants()
//const plan = usePlants()
//console.log(Catalog(harvestPlants()))

// const array = plantSeeds()
// console.log(harvestPlants(array))

// let plantsArray = harvestPlants()
// console.log(harvestPlants(plantsArray))
// let tractorPlantingPlan = usePlants()
// // plantSeeds()
// console.log(plantSeeds(tractorPlantingPlan))

//create seed object. variable equal to result of creatCcorn function
// const cornSeed = createCorn()
// // //Invoke addPlant() and specify the seed object as the argument.
// addPlant(cornSeed)
// // //Invoke usePlants() and store its return value in a variable.
// const usePlantsCopy = usePlants()
// // //Use console.log() to make sure your seed object got added to the array of plants in the field.
// console.log(usePlantsCopy)

// const yearlyPlan = createPlan()
// console.log(yearlyPlan)
// console.log("Welcome to the main module")

const parentHTML = document.querySelector(".messages")
parentHTML.innerHTML = testVariable