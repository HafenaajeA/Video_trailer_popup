const btnEl = document.querySelector(".btn")
const closeIconEl = document.querySelector(".close-icon")
const videoContainerEl = document.querySelector(".video-container");
const videoEl = document.querySelector("video");


btnEl.addEventListener("click", ()=>{
    videoContainerEl.classList.remove("active")
});

closeIconEl.addEventListener("click", ()=>{
    videoContainerEl.classList.add("active")
    videoEl.pause();
    videoEl.currentTime = 0;
})