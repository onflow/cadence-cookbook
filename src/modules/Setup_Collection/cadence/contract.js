export const contract = `
// creates a new empty Collection resource and returns it 
pub fun createEmptyCollection(): @Collection {
    return <- create Collection()
}

`