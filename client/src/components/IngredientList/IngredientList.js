import React from "react"
import Ingredient from "../Ingredient/Ingredient"

class IngredientList extends React.Component {
    constructor() {
        super()

        this.createIngredient = this.createIngredient.bind(this)
    }

    createIngredient(ing) {
        return (
            <Ingredient onClick={() => this.delete(ing.key)} key={ing.key} ingredient={ing.ingredient}/>
        )
    }

    delete(key) {
        this.props.delete(key)
    }

    render() {
        const ingList = this.props.ingList
        const ingItems = ingList.map(this.createIngredient)

        return (
            <div>
                {ingItems}
            </div>
        )
    }
}

export default IngredientList