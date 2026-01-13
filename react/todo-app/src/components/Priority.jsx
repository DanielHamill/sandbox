import { useState } from "react";
import "./Priority.css"

export default function PrioritySelector({ selectedPriority, setSelectedPriority}) {

    return (
        <div id="priorityContainer">
            <h4>Priority</h4>
            <hr/>
            <div id="priorityOptions">
                <button 
                    className={selectedPriority === 1 ? 'selected' : ''}
                    onClick={() => setSelectedPriority(1)}
                >
                    1
                </button>
                <button 
                    className={selectedPriority === 2 ? 'selected' : ''}
                    onClick={() => setSelectedPriority(2)}
                >
                    2
                </button>
                <button 
                    className={selectedPriority === 3 ? 'selected' : ''}
                    onClick={() => setSelectedPriority(3)}
                >
                    3
                </button>
                <button 
                    className={selectedPriority === 4 ? 'selected' : ''}
                    onClick={() => setSelectedPriority(4)}
                >
                    4
                </button>
            </div>
        </div>
        
    )
}