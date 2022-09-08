//The Catalog function should accept the harvested food array as input.
// The Catalog function should iterate the array of food objects.
export const Catalog = (foodObj) => {
    let catalogString = ""
    for (const food of foodObj) {
        catalogString += `
        <section class="plant">${food.type}</section>
        `    }
    return catalogString
}