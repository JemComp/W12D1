import { Route } from "react-router-dom";
import PokemonIndexContainer from "./components/pokemon/pokemon_index_container";
import React from  "react"
import pokemon_detail_container from "./components/pokemon/pokemon_detail_container";

 const App = () => (
     <div>
         <Route path={`/pokemon/:id`} component={pokemon_detail_container}/>
         <Route path="/" component={PokemonIndexContainer} />
     </div>
    
)
export default App 