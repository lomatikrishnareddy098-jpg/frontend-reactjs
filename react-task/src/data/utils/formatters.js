export function formatDate(date) {
    return new Date(date).toLocaleDateString("en-IN");
}

export function formatCurrency(amount) {
    if (amount === null || amount === undefined || amount === 0) {
        return "Not estimated";
    }

    return `Rs ${amount.toLocaleString("en-IN")}`;
}
