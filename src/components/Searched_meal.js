import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import "../style/search_meal.css"

const Searched_meal=()=>{

    const {id}=useParams();
    const[meal,setMeal]=useState(null);
    

    useEffect(()=>{
        getdata();
    },[])

    async function getdata() {
        const data1 = await fetch(
          "https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id
        );

        const mealdata=await data1.json();
        setMeal(mealdata?.meals[0]);
        console.log(mealdata.meals[0]);
    }
    
    var s="strIngredient";
    var s2="strMeasure";

    var temp="";
    var temp2="";

    var ing="";
    return (
      <div className="searched_meal">
        <div className="search1"> 
        <Card {...meal}/>
        </div>
        <div className="search3">
          <h1>Ingredients</h1>
          <div className="search2"> 
          {Array(20).fill("").map((e,index)=>(
            temp=s+(index+1), temp2=s2+(index+1),ing=meal?.[temp],ing?
            
              <div className="container">
              <img src={"https://www.themealdb.com/images/ingredients/"+ing+".png"}/>
            <h1>{meal?.[temp2]} {ing}</h1>
              </div>
              :<h1></h1>
          ))}
          </div>
          <h1>Instruction</h1>
          <p className="instruction"> 
            {meal?.strInstructions.split(".").join("\n")}
          </p>
        </div>
        
         

         
      </div>
    )
}

export default Searched_meal;