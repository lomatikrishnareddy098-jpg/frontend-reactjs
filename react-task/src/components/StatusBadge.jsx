function StatusBadge({ status }) {
    const statusClasses = {
        "In progress": "in-progress",
        "Completed": "completed",
        "Planning": "planning",
        "On Hold": "on-hold"
    };

const statusClass = statusClasses[status] || "default-status";

    return (
        <span className={`status-badge ${statusClass}`}>
            {status}
        </span>
    );
}

export default StatusBadge;
