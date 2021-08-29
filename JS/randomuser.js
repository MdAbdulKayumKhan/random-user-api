const loadRandomUser = () =>{
    fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => displayUser(data))
}

loadRandomUser()

const displayUser = users =>{
    console.log(users)
    const usersArray = users.results;
    const cardDiv = document.getElementById('cardId');
    usersArray.forEach(element => {
        console.log(element)
        const {picture, name, street, gender, email ,dob ,location, registered } = element;

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
        <div class="card h-100">
            <img src="${picture.large}" class="card-img-top img-fluid p-4" alt="...">
            <div class="card-body">
                <h5 class="card-title">Name: ${name.title} ${name.first} ${name.last}</h5>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Street Name: ${location.street.name}, Street Number: ${location.street.number}</li>
                <li class="list-group-item">City: ${location.city}</li>
                <li class="list-group-item">Coordinates-latitude: ${location.coordinates.latitude} Coordinates-longitude: ${location.coordinates.longitude}</li>
                <li class="list-group-item">Timezone: ${location.timezone.description}</li>
                </ul>
            </div>
        </div>     
        `;
        cardDiv.appendChild(div);

    });

}