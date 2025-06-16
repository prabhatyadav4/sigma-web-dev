function createCard(title, cName, views, monthsOld, duration, thumbnail){
    // Format the views count as a string (e.g., 1K, 1M)
    let viewStr
    if(views < 1000){
        viewStr = views;
    }
    else if(views > 1000000){
        viewStr = views/1000000 + "M";
    }
    else{
        viewStr = views/1000 + "K";
    }
    // Create the HTML structure for the card
    let html = 
    ` <div class="card">
            <div class="image">
                <img src="${thumbnail}">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
            </div>
        </div>`

    // Append the card HTML to the container element
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

// Example usage of createCard function
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")