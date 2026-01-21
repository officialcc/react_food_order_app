// import { useEffect, useState } from "react";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";
import MealItem from "./MealItem.jsx";

const requestConfig = {};

export default function Meals() {
    const {
        data: loadedMeals,
        isLoading,
        error
    } = useHttp('http://localhost:3000/meals', requestConfig, []);

    console.log(loadedMeals);

    if (isLoading) {
        return <p className="center">Fetching meals</p>;
    }

    if (error) {
        return <Error title="Failed to fetch meals" message={error} />
    }

    // const [loadedMeals, setLoadedMeals] = useState([]);

    // useEffect(() => {
    //     async function fetchMeals() {
    //         const response = await fetch('http://localhost:3000/meals');

    //         if (!response.ok) {
    //             // TODO
    //         }

    //         const meals = await response.json();
    //         setLoadedMeals(meals);
    //     }

    //     fetchMeals();
    // }, []);

    return (
        <ul id="meals">
            {loadedMeals.map((meal) => (
                <MealItem key={meal.id} meal={meal} />
            ))}
        </ul>
    );
}