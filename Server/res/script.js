const currentDate = new Date();

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const dayOfMonth = currentDate.getDate();
const monthIndex = currentDate.getMonth();
const monthName = monthNames[monthIndex];
const formattedDate = `${dayOfMonth} ${monthName}`;

document.addEventListener('DOMContentLoaded', function () {
    fetch('rates.txt')
        .then(response => response.text())
        .then(data => {
            const allRates = data.trim().split('\n');
            const halfRates = Math.floor(allRates.length / 2); // Calculate number of rates for each half

            const leftRates = allRates.slice(0, halfRates); // Get first half of rates
            const rightRates = allRates.slice(halfRates); // Get second half of rates

            const leftList = document.getElementById('rate-list-left');
            const rightList = document.getElementById('rate-list-right');

            leftRates.forEach((line, index) => {
                const [name, rate] = line.split(':');
                const listItem = document.createElement('li');
                listItem.innerHTML = `<span class="name">${name}</span> <span class="rate">₹${rate}</span>`;
                leftList.appendChild(listItem);
                if (index < rightRates.length - 1) {
                    leftList.appendChild(document.createElement('hr'));
                }
            });

            rightRates.forEach((line, index) => {
                const [name, rate] = line.split(':');
                const listItem = document.createElement('li');
                listItem.innerHTML = `<span class="name">${name}</span> <span class="rate">₹${rate}</span>`;
                rightList.appendChild(listItem);
                if (index < rightRates.length - 1) {
                    rightList.appendChild(document.createElement('hr'));
                }
            });

            document.getElementById('date').textContent = formattedDate;
        })
        .catch(error => console.error('Error fetching rates:', error));
});
