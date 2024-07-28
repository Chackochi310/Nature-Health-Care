function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const img = element.querySelector('.accordim-right-content img');

    if (content.style.display === "block") {
        content.style.display = "none";
        img.src = "./assets/images/questions/add.svg";
    } else {
        content.style.display = "block";
        img.src = "./assets/images/questions/dangerous.svg";
    }
}