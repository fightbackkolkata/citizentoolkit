document.addEventListener("DOMContentLoaded", function() {
    const images = {
        "main": "./main.jpg",
        "toolkit-1": "https://blog.udemy.com/wp-content/uploads/2014/05/bigstock-Vector-Promotion-Concept-Fla-57726575.jpg"
    };

    Object.keys(images).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.backgroundImage = `url(${images[id]})`;
        }
    });

    const evenContainer = document.getElementById("even");
    evenContainer.style.flexDirection = "row-reverse";
});
