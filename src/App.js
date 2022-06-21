import { isContentEditable } from "@testing-library/user-event/dist/utils";
import { useState, useEffect } from "react";
import "./App.css";
import Trips from "./components/Trips";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [trips, setTrips] = useState([]);

    async function getContent() {
        setIsLoading(true);
        try {
            const response = await fetch(
                "https://course-api.com/react-tours-project/"
            );
            const content = await response.json();
            setTrips(content);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(true);
            console.log(error);
        }
    }

    useEffect(() => {
      getContent();
    }, [])

    function deleteItem(id) {
        const updatedTrips = trips.filter((trip) => trip.id !== id);
        setTrips(updatedTrips);
    }

    if (isLoading) {
        return (
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        );
    }

    if (trips.length === 0) {
        return (
            <div>
                <h2 className="heading">Travel Diaries</h2>
                <button onClick={getContent} className="btn-refresh">
                    Refresh
                </button>
            </div>
        );
    }

    return <Trips trips={trips} deleteItem={deleteItem}></Trips>;
}

export default App;
