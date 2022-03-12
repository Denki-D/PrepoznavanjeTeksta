const video = document.querySelector("video")
const textElem = document.querySelector("[data-text]")

async function setup() {
    const striiim = await navigator.mediaDevices.getUserMedia({ video: true })

video.srcObject = striiim
video.addEventListener("playing", async() =>{
    const worker = Tesseract.createWorker()
   await worker.load()
   await worker.loadLanguage("hrv")
   worker.initialize("hrv")

   const canvas = document.createElement("canvas")
   canvas.width = video.width
   canvas.height = video.height

   document.addEventListener("keypress", async e => {
if (e.code !== "Space") return  
console.log("pretražujem"); 
canvas.getContext("2d").drawImage(video, 0,0, video.width, video.height)
const { data: {text}} = await worker.recognize(canvas)
textElem.textContent = text
console.log(text);
})
})
}
setup()