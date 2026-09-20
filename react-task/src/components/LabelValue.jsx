function LabelValue({ label, value }) {
    return (
        <div className="label-value">
            <span className="label">{label}</span>
            <span className="value">{value}</span>
        </div>
    );
}

export default LabelValue;