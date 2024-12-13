document.addEventListener('DOMContentLoaded', async () => {
    const scheduleTable = document.getElementById('schedule-table');
    try {
        const response = await fetch('http://localhost:3001/api/events'); // Replace with actual API endpoint
        const events = await response.json();

        events.forEach(event => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${event.date}</td>
                <td>${event.name}</td>
                <td>${event.location}</td>
                <td><a href="${event.detailsLink}" target="_blank">View Details</a></td>
            `;
            scheduleTable.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching schedule:', error);
        scheduleTable.innerHTML = `<tr><td colspan="4">Error loading events.</td></tr>`;
    }
});
