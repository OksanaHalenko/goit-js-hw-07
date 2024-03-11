const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
categories.forEach(item => {
    const categoryName = item.querySelector("h2");
    console.log(`Category: ${categoryName.textContent}`);
    const categoryNumber = item.querySelectorAll("li");
    console.log(`Elements: ${categoryNumber.length}`);
});
