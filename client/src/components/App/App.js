import React from "react"
import Header from "../Header/Header"
import IngredientEntry from "../IngredientEntry/IngredientEntry"

import "./App.css"

function App() {
  return (
    <div className="app-wrapper min-vh-100 text-center">
      <Header />
      <IngredientEntry />
    </div>
  )
}

export default App;
