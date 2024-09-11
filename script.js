document
    .getElementById('card-form').onsubmit = function (event){
        event.preventDefault();

        const nombre = document.getElementById('card-name').value;
        const tiltle = document.getElementById('card-last-name').value;
        const description = document.getElementById('card-user').value;
        const avatarUrl = document.getElementById('card-image').value || `https://avatar.iran.liara.run/public`;
        const bgColor = document.getElementById('card-bg-color').value;
        const borderColor = document.getElementById('card-border-color').value;

        console.log({
            nombre, 
            tiltle, 
            description, 
            avatarUrl, 
            bgColor, 
            borderColor});

        const cardContainer = document.getElementById('cards-container');
        const newCard = document.createElement('div');
        newCard.className = 'card';
        newCard.style.backgroundColor = bgColor;
        newCard.style.borderColor = borderColor;

        newCard.innerHTML = `
            <img src="${avatarUrl}" alt="Avatar">
            <div class="card-content">
                <h3>${tiltle}</h3> 
                <h3>${nombre}</h3>
                <p>@${description}</p>
            </div>
        `;
        cardContainer.appendChild(newCard);

        document.getElementById('card-form').reset();
};
