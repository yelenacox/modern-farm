//maybe import seed objects from scipts/seeds?
// import { createAsparagus } from "./seeds/asparagus.js"
// import { createCorn } from "./seeds/corn.js"
// import { createPotato } from "./seeds/potato.js"
// import { createSoybean } from "./seeds/soybean.js"
// import { createSunflower } from "./seeds/sunflower.js"
// import { createWheat } from "./seeds/wheat.js"

// const asparagusFunc = createAsparagus()
// const cornFunc = createCorn()
// const potatoFunc = createPotato()
// const soybeanFunc = createSoybean()
// const sunflowerFunc = createSunflower()
// const wheatFunc = createWheat()

//function with an empty array that accepts seeds
const allPlants = []
//define an export "addPlant" function, with seedObj as parameter. This function will add seeds to the array
export const addPlant = (seedObj) => {
    if(Array.isArray(seedObj)){
        allPlants.push(seedObj[0]);
        allPlants.push(seedObj[1]);
    } else{    
        allPlants.push(seedObj)
    }
}

//Define and export a function named usePlants that returns a copy of the array of plants.
export const usePlants = () => {
    const allPlantsCopy = allPlants
    return allPlantsCopy
}