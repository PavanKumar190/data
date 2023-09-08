    const containerElement = document.getElementById("container");
    // const nameElement = document.getElementById("name");
    // const locationElement = document.getElementById("location");
    const nextButton = document.getElementById("next-button");

    let currentIndex = 0;
    let data = [];

    
    fetch("./data.json")
        .then(res => res.json())
        .then(jsonData =>{
            data = jsonData;
            showPerson(currentIndex);

        }).catch((error)=> console.error("Error fetching data: " + error));

    // Display the person's information
    function showPerson(index) {
        if (index >= 0 && index < data.length) {
            const person = data[index];
            
            const dataConatinerEl = document.createElement("div");
            const numberEl = document.createElement("h1");

            dataConatinerEl.classList.add("data-box");
            numberEl.textContent = index+1;
            numberEl.classList.add("one")
            dataConatinerEl.appendChild(numberEl);

            const todoElement = document.createElement("div");

            const nameElement = document.createElement("p");
            const locationElement = document.createElement("p");

            
            nameElement.textContent = "Name: " + person.name;
            
            locationElement.textContent = "Location: " + person.location;
            
            todoElement.appendChild(nameElement);
            todoElement.appendChild(locationElement);
            dataConatinerEl.appendChild(todoElement);
            containerElement.appendChild(dataConatinerEl);
            
        }
    }

    // Handle the "Next Person" button click
    nextButton.addEventListener("click", function () {
        currentIndex++;
        if (currentIndex < data.length) {
            showPerson(currentIndex);
        } else {
            alert("No more people!");
            currentIndex = data.length - 1;
        }
    });

