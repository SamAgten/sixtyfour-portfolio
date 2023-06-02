const scrollElements = document.querySelectorAll(".js-scroll");
const projectNumbers = document.querySelectorAll(".project-number");
const inViewPercentage = 0.75;



const projectNumbersMap = new Map();
projectNumbers.forEach((el) => {
    projectNumbersMap.set(el, Number(el.textContent));
})

const elementInView = (el, percentageScroll) => {
    const elementTop = el.getBoundingClientRect().top;
    const margin = window.innerHeight || document.documentElement.clientHeight;

    return elementTop <= margin * percentageScroll;
}

const displayScrolledElement = (el) => {
    el.classList.add("scrolled");
}

const hideScrolledElement = (el) => {
    el.classList.remove("scrolled");
}

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if(elementInView(el, inViewPercentage))
        {
            displayScrolledElement(el);
        }
        else
        {
            hideScrolledElement(el);
        }
    })
}

const handleProjectNumbers = () => {{
    projectNumbers.forEach((el) => {

        const elementTop = el.getBoundingClientRect().top;
        const w = window.innerHeight || document.documentElement.clientHeight;
        const margin = w * .5;
        if(elementTop < 0 || elementTop <= margin)
        {
            el.textContent = "0" + projectNumbersMap.get(el);
        }
        else if(elementTop > w)
        {
            el.textContent = "00";
        }
        else
        {
            const diff = 1 - ((elementTop - margin) / (w - margin));
            const n = Math.floor(projectNumbersMap.get(el) * diff);
            el.textContent = "0" + n;
        }
        
    })
}}

window.addEventListener('scroll', () => {
    handleScrollAnimation();
    handleProjectNumbers();
});

function scrollToMainContent()
{   
    const content = document.querySelector("main");
    content.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

function scrollToContact()
{   
    const content = document.querySelector(".contact");
    content.scrollIntoView({ behavior: 'smooth', block: 'center' })
}


handleScrollAnimation();