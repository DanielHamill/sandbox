import "./TodoItem.css"
import { useState, useEffect } from "react"

function formatTimeFromMilliseconds(milliseconds) {
    // Convert to seconds
    const totalSeconds = Math.floor(milliseconds / 1000);
    
    // Calculate time units
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;
    
    // Build the formatted string
    let result = [];
    
    if (days > 0) {
        result.push(days.toString().padStart(2, '0'));
    }
    if (days > 0 || hours > 0) {
        result.push(hours.toString().padStart(2, '0'));
    }
    if (days > 0 || hours > 0 || minutes > 0) {
        result.push(minutes.toString().padStart(2, '0'));
    }
    result.push(seconds.toString().padStart(2, '0'));
    
    return result.join(':');
}

export default function TodoItem(props) {
    const [ isChecked, setIsChecked ] = useState(false) 
    const [ timeLeft, setTimeLeft ] = useState("")

    useEffect(() => {
        const key = setInterval(() => {
            const diff = new Date(props.dueDate) - Date.now()
            setTimeLeft(formatTimeFromMilliseconds(diff))
        }, 1000)

        return () => {
            clearInterval(key)
        }
    })

    function toggleChecked() {
        setIsChecked(!isChecked)
    }
    // const textDecoration = isChecked ? "line-through" : ""
    const border = isChecked ? "2px solid green" : "none"
    return (
        <div 
            id="itemContainer" 
            onClick={toggleChecked}
            style={{
                // textDecoration: textDecoration,
                border: border,
            }}
        >   
            <div className="summaryInfo">
                {props.priority && props.priority !== "" && (
                    <div class="priorityBadge">
                        {props.priority}
                    </div>
                )}
                <div className="textContainer">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
            
            <div>
                {props.dueDate && props.dueDate !== "" && (
                    <div className="dueDateBadge">
                        {timeLeft}
                    </div>
                )}
            </div>
        </div>
    )
}