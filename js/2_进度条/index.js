
const $ = v => document.querySelector(v) //id
const $$ = v => document.querySelectorAll(v) //class
const prevBtn = $("#prev")
const nextBtn = $("#next")
const progress = $("#progress")
const circleElements = $$(".circle")
let currentActive = 0
const min = 0, max = (circleElements.length - 1)

prevBtn.addEventListener("click", () => {
    if (currentActive > min) currentActive--
    else { return }
    ClearActive()
})
nextBtn.addEventListener("click", () => {
    if (currentActive < max) currentActive++
    else { return }
    ClearActive()
})

const ClearActive = () => {
    console.log(123);
    [].filter.call(circleElements, (_, index) => index >= currentActive + 1)
        .forEach(item => item.classList.remove("active"));
    [].filter.call(circleElements, (_, index) => index < currentActive + 1)
        .forEach(item => item.classList.add("active"));
    if (currentActive === min) prevBtn.classList.add("disabled")
    else {
        prevBtn.classList.add("active")
        prevBtn.classList.remove("disabled")
    }
    if (currentActive === max) nextBtn.classList.add("disabled")
    else {
        nextBtn.classList.add("active")
        nextBtn.classList.remove("disabled")
    }
    progress.style.width = (100 / max * currentActive).toFixed(4) + '%'
}
