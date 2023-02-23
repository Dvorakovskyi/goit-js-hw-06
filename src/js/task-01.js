const categoriesEl = document.querySelectorAll('.item');
const numberOfCategories = categoriesEl.length;
console.log('Number of categories:', numberOfCategories);

const category = categoriesEl.forEach((item) => {
    const firstElements = item.firstElementChild.textContent;
    console.log('Category:', firstElements);
    const lastElements = item.lastElementChild.children.length;
    console.log('Elements:', lastElements);
})




