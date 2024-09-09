document
    .getElementById('card-form').onsubmit = function (event){
        event.preventDefault();

        const nombre = document.getElementById('card-name').value;
        const apellidos = document.getElementById('card-last-name').value;
        const username = document.getElementById('card-user').value;
        const avatarUrl = document.getElementById('card-image').value || `https://avatar.iran.liara.run/public`;
        const bgColor = document.getElementById('card-bg-color').value;
        const borderColor = document.getElementById('card-border-color').value;

        console.log({apellidos, nombre, username, avatarUrl, bgColor, borderColor});

        const cardContainer = document.getElementById('cards-container');
        const newCard = document.createElement('div');
        newCard.className = 'card';
        newCard.style.backgroundColor = bgColor;
        newCard.style.borderColor = borderColor;

        newCard.innerHTML = `
            <img src="${avatarUrl}" alt="Avatar">
            <div class="card-content">
                <h3>${apellidos} ${nombre}</h3>
                <p>@${username}</p>
            </div>
        `;
        cardContainer.appendChild(newCard);

        document.getElementById('card-form').reset();
};
