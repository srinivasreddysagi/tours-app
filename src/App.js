import { useState, useEffect } from "react";
import Trips from "./components/Trips";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { HiRefresh } from "react-icons/hi";

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
    }, []);

    function deleteItem(id) {
        const updatedTrips = trips.filter((trip) => trip.id !== id);
        setTrips(updatedTrips);
    }

    if (isLoading) {
        return (
            <div className="loading">
                <h1>Loading...</h1>
                <AiOutlineLoading3Quarters className="load-rotate" />
            </div>
        );
    }

    if (trips.length === 0) {
        return (
            <div className="refresh">
                <p>You're All Caught Up!</p>
                <button onClick={getContent} className="btn-refresh">
                    <HiRefresh />
                </button>
            </div>
        );
    }

    return <Trips trips={trips} deleteItem={deleteItem}></Trips>;
}

export default App;
