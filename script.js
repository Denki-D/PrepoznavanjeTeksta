const video = document.querySelector("video")

async function setup() {
    const striiim = await navigator.mediaDevices.getUserMedia({ video: true })

video.srcObject = striiim
}
setup()