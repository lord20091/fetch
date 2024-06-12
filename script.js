let cards = document.getElementById(`cards`);
let api = `https://fakestoreapi.com/products?limit=10`;


fetch(api)
.then((response) => response.json())
.then((res) => getData(res));

function getData(data) {
    console.log(data);
    for (const fetch of data) {
        let card = document.createElement(`div`);
        let imgDiv = document.createElement(`div`);

        let img = document.createElement(`img`);
        let h3 = document.createElement(`h3`);
        let category = document.createElement(`p`);
        let description = document.createElement(`span`);
        let price = document.createElement(`p`);

        card.classList.add(`product`);
        imgDiv.classList.add(`imgDiv`);
        img.src = fetch?.image;
        h3.innerHTML = fetch?.title;
        category.innerHTML =`<b>Category:</b>` + fetch?.category;
        description.innerHTML =`<b>Description:</b>` + fetch?.description;
        price.innerHTML =`<b>Price:</b>` + fetch?.price;

        imgDiv.appendChild(img);
        card.appendChild(imgDiv);
        card.appendChild(h3);
        card.appendChild(category);
        card.appendChild(description);
        card.appendChild(price);

        cards.appendChild(card)
    }
}
