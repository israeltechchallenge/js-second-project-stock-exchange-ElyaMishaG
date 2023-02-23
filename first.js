const button = document.querySelector('button');
const input = document.querySelector('input');
const dropdownContainer = document.querySelector('.dropdown-container');

button.addEventListener('click', () => {
    const query = input.value;
    const url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ`;
    dropdownContainer.innerHTML = "Loading...";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const searchResults = data.slice(0, 10);
            dropdownContainer.innerHTML = "";

            if (searchResults.length === 0) {
                return;
            }

            const resultsList = document.createElement('ul');
            resultsList.classList.add('results-list');
            dropdownContainer.appendChild(resultsList);

            searchResults.forEach(result => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = `/company.html?symbol=${result.symbol}`;
                link.textContent = `${result.symbol} - ${result.name}`;
                listItem.appendChild(link);
                resultsList.appendChild(listItem);

            })

        })
});