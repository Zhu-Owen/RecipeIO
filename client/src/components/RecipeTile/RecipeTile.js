import React from "react"
import "./RecipeTile.css"

const apiURL = "http://localhost:8888/"

function RecipeTile(props) {
    function handleClick() {
        fetch(apiURL + "recipe/recipeInfo/" + props.id)
        .then(response => response.json())
        .then(data =>
            window.open(data.sourceUrl)
        )
    }

    return (
        <div onClick={handleClick} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 p-0 mb-4 mt-5">
            <div role="button" tabIndex={0} className="recipe-tile pt-4 pl-3 pr-3">
                <h1>{props.title}</h1>
                <br/>
                <img src={props.url} className="img-fluid"/>
            </div>
        </div>
    )
}

export default RecipeTile