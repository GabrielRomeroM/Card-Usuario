document.getElementById('card-form').onsubmit = function (event) {
    event.preventDefault();

    const nombre = document.getElementById('card-name').value;
    const apellidos = document.getElementById('card-last-name').value;
    const username = document.getElementById('card-user').value;
    const avatarUrl = document.getElementById('card-image').value || `https://avatar.iran.liara.run/public`;
    const bgColor = document.getElementById('card-bg-color').value;
    const borderColor = document.getElementById('card-border-color').value;

    const cardHtml = `
        <div class="card" style="background-color: ${bgColor}; border: 2px solid ${borderColor}; padding: 10px; margin-top: 20px;">
            <img src="${avatarUrl}" alt="Avatar" style="border-radius: 50%; width: 50px; height: 50px; margin-right: 15px;">
            <div>
                <h3>${apellidos} ${nombre}</h3>
                <p>@${username}</p>
            </div>
        </div>
    `;

    document.getElementById('cards-container').innerHTML += cardHtml;
};
