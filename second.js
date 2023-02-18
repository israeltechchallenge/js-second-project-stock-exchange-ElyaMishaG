const urlParams = new URLSearchParams(window.location.search);
const symbol = urlParams.get('symbol');

fetch(`https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/${symbol}`)
    .then(response => response.json())
    .then(data => {
        const companyInfoDiv = document.getElementById('company-info');

        const image = document.createElement('img');
        image.src = data.profile.image;
        image.alt = data.profile.companyName;

        const name = document.createElement('h1');
        name.textContent = data.profile.companyName;

        const description = document.createElement('p');
        description.textContent = data.profile.description;

        const link = document.createElement('a');
        link.href = data.profile.website;
        link.textContent = 'Visit Website';

        const price = document.createElement('p');
        price.textContent = `Price: ${data.profile.price} (${data.profile.changesPercentage})`;
        price.style.color = data.profile.changesPercentage.includes('+') ? 'lightgreen' : 'red';


        companyInfoDiv.appendChild(image);
        companyInfoDiv.appendChild(name);
        companyInfoDiv.appendChild(description);
        companyInfoDiv.appendChild(link);
        companyInfoDiv.appendChild(price);
    });