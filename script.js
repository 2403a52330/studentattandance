// Display today's date
document.getElementById("today").textContent =
    "Date: " + new Date().toLocaleDateString();

// Handle Present and Absent button clicks
document.querySelectorAll("#student-list button").forEach(function (button) {
    button.addEventListener("click", function () {
        const row = button.closest("tr");
        const statusCell = row.querySelector(".status");
        const status = button.dataset.status;

        statusCell.textContent = status;
        statusCell.style.color = status === "Present" ? "#15803d" : "#b91c1c";

        updateSummary();
    });
});

// Update the attendance totals
function updateSummary() {
    const statuses = Array.from(document.querySelectorAll(".status"));
    const present = statuses.filter(cell => cell.textContent === "Present").length;
    const absent = statuses.filter(cell => cell.textContent === "Absent").length;

    document.getElementById("total").textContent = statuses.length;
    document.getElementById("present-count").textContent = present;
    document.getElementById("absent-count").textContent = absent;
}
