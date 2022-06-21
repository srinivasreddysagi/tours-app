import React from "react";
import Trip from "./Trip";

export default function Trips({ trips, deleteItem }) {
    return (
        <section>
            <div>
                <h2>Travel Diaries</h2>
            </div>
            <div>
                {trips.map((trip) => {
                    return (
                        <Trip
                            key={trip.id}
                            {...trip}
                            deleteItem={deleteItem}
                        ></Trip>
                    );
                })}
            </div>
        </section>
    );
}
