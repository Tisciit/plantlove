export const add = (plant) => {
    return {
        type: "ADD",
        plant: plant
    }
}

export const remove = (id) => {
    return {
        type: "REMOVE",
        id: id
    }
}