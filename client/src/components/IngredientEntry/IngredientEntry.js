import React from "react"
import IngredientList from "../IngredientList/IngredientList"
import RecipeTile from "../RecipeTile/RecipeTile"
import "./IngredientEntry.css"

const apiURL = "http://localhost:8888/"


class IngredientEntry extends React.Component {
    constructor() {
        super()
        this.state = {
            ingredients: [],
            acWords: [],
            apiString: "",
            recipes: []
        }

        this.addIngredient = this.addIngredient.bind(this)
        this.deleteIngredient = this.deleteIngredient.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.autocompleteHandler = this.autocompleteHandler.bind(this)
    }
    
    addIngredient(e) {
        if (this.ingredientInput.value !== "") {
            const newIngredient = {
                key: Date.now(),
                ingredient: this.ingredientInput.value
            }

            this.setState(prevState => {
                return {
                    ingredients: prevState.ingredients.concat(newIngredient),
                    acWords: prevState.acWords,
                    apiString: prevState.apiString,
                    recipes: prevState.recipes
                }
            })

            this.ingredientInput.value = ""
        }
        
        e.preventDefault()
    }

    deleteIngredient(key) {
        const remainingIngs = this.state.ingredients.filter(ingredient => ingredient.key !== key)
        this.setState(prevState => {
            return {
                ingredients: remainingIngs, 
                acWords: prevState.acWords, 
                apiString: prevState.apiString, 
                recipes: prevState.recipes
            }
        })
    }

    handleClick(e) {
        e.preventDefault()
        if (this.state.ingredients.length === 0) {return;}
        let apiString = ""

        for (let i = 0; i < this.state.ingredients.length - 1; i++) {
            apiString += this.state.ingredients[i].ingredient + ",+"
        }

        apiString += this.state.ingredients[this.state.ingredients.length - 1].ingredient
        fetch(apiURL + "recipe/searchRecipe/" + apiString + "/15")
        .then(response => response.text())
        .then(text => text ? JSON.parse(text):{})
        .then(data => this.setState(prevState => {
            return {
                ingredients: prevState.ingredients,
                acWords: prevState.acWords,
                apiString: prevState.apiString,
                recipes: data
            }
        }))
        .catch(Error => { console.log(Error) })
    }

    handleChange(e) {
        e.preventDefault()
        const autocompleteQuery = apiURL + "ingredients/autocomplete/" + this.ingredientInput.value

        fetch(autocompleteQuery)
        .then(response => response.json())
        .then(data => this.setState(prevState => {
            return {
                ingredients: prevState.ingredients,
                acWords: data,
                apiString: prevState.apiString,
                recipes: prevState.recipes
            }
        }))
    }

    autocompleteHandler(e) {
        e.preventDefault()
        this.ingredientInput.value = e.target.name
        this.setState(prevState => {
            return {
                ingredients: prevState.ingredients,
                acWords: [],
                apiString: prevState.apiString,
                recipes: prevState.recipes
            }
        })
    }

    render() {
        const autocompleteButtons = this.state.acWords.map(acWord =>
            <button name={acWord} key={acWord} onClick={this.autocompleteHandler} type="button" className="btn btn-lg btn-light mt-5 mr-5">{acWord}</button>
        )

        const recipeTiles = this.state.recipes.map(recipe => 
            <RecipeTile key={recipe.id} id={recipe.id} title={recipe.title} url={recipe.image}/>
        )

        return (
            <div>
                <div>
                    <h5 style={{color: "rgb(255, 51, 5)", fontWeight:"600"}} className="mt-2">
                        {this.state.ingredients.length !== 0 ? "Click ingredient again to remove it:" : null}
                    </h5>
                    <form onSubmit={this.addIngredient}>
                        <input onChange={this.handleChange} ref={(i) => this.ingredientInput = i} className="ingredient-entry-box mr-3 pl-3" placeholder="Enter ingredients"/>
                        <button type="submit" className="btn btn-success px-3">Add</button>
                    </form>
                    
                    <IngredientList ingList={this.state.ingredients} delete={this.deleteIngredient}/>
                    <br/>
                    <br/>
                    <button onClick={this.handleClick} type="submit" className="btn btn-lg btn-warning mt-5">Find Recipes</button>
                    <br/>
                    {autocompleteButtons}
                </div>
                <div className="container-fluid">
                    <div className="row" style={{marginLeft: "0px", marginRight: "0px"}}>
                        {recipeTiles}
                    </div>
                </div>
            </div>
        )
    }
}
 
export default IngredientEntry

