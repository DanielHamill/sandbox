import "./DueDate.css"

export default function DueDate({ dueDate, setDueDate}) {
    return (
        <div className="dueDateContainer">
            <h4>Due Date</h4>
            <hr/>
            <input type="datetime-local" value={dueDate} onChange={(event) => setDueDate(event.target.value)} />
        </div>
    )
}