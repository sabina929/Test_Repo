const ipsumAnimi = document.querySelector('.ipsum-animi');
const paragraphs = document.querySelectorAll('.parag');
// console.log(paragraphs);

ipsumAnimi.addEventListener('click', animateParagraphs);


function animateParagraphs() {
    paragraphs.forEach(parag => {
        // console.log(parag);
        parag.classList.toggle('justifying');
    })

}