import LabelValue from "./LabelValue";
import { formatDate, formatCurrency } from "../data/utils/formatters";

function ProjectCard({ project }) {
    const statusClasses = {
        "In Progress": "in-progress",
        "Completed": "completed",
        "Planning": "planning",
        "Cancelled": "cancelled"
    };

    const statusClass =
        statusClasses[project.status] || "default-status";

    return (
        <div className="project-card">
            <h2>{project.name}</h2>

            <LabelValue
                label="Client"
                value={project.client}
            />

            <div className={`status-badge ${statusClass}`}>
                {project.status}
            </div>

            <LabelValue
                label="Owner"
                value={project.owner}
            />

            <LabelValue
                label="Start Date"
                value={formatDate(project.startDate)}
            />

            <LabelValue
                label="End Date"
                value={formatDate(project.endDate)}
            />

            <LabelValue
                label="Total Hours"
                value={project.totalHours}
            />

            <LabelValue
                label="Final Cost"
                value={formatCurrency(project.finalCost)}
            />
        </div>
    );
}

export default ProjectCard;