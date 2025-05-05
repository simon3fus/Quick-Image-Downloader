// Flag to track if the U key is pressed
let isUKeyPressed = false

// Listen for keydown events to detect when U key is pressed
document.addEventListener("keydown", (event) => {
  // Check if the key pressed is 'u' or 'U' (key code 85)
  if (event.key.toLowerCase() === "u") {
    isUKeyPressed = true
  }
})

// Listen for keyup events to detect when U key is released
document.addEventListener("keyup", (event) => {
  // Check if the key released is 'u' or 'U' (key code 85)
  if (event.key.toLowerCase() === "u") {
    isUKeyPressed = false
  }
})

// Listen for click events on images
document.addEventListener("click", (event) => {
  // Check if U key is pressed and left mouse button is clicked
  if (isUKeyPressed && event.button === 0) {
    // Check if the clicked element is an image
    if (event.target.tagName.toLowerCase() === "img") {
      // Prevent the default action
      event.preventDefault()

      // Get the image URL
      const imageUrl = event.target.src

      // Get the image filename from the URL
      let filename = imageUrl.split("/").pop().split("#")[0].split("?")[0]

      // If filename doesn't have an extension, add .jpg as default
      if (!filename.includes(".")) {
        filename += ".jpg"
      }

      // Create a temporary link element to trigger the download
      const downloadLink = document.createElement("a")
      downloadLink.href = imageUrl
      downloadLink.download = filename

      // Append to the document, click it, and remove it
      document.body.appendChild(downloadLink)
      downloadLink.click()
      document.body.removeChild(downloadLink)

      // Show a brief notification
      const notification = document.createElement("div")
      notification.textContent = "Image downloading..."
      notification.style.position = "fixed"
      notification.style.bottom = "20px"
      notification.style.right = "20px"
      notification.style.backgroundColor = "#4CAF50"
      notification.style.color = "white"
      notification.style.padding = "10px 20px"
      notification.style.borderRadius = "4px"
      notification.style.zIndex = "9999"
      notification.style.boxShadow = "0 2px 5px rgba(0,0,0,0.2)"

      document.body.appendChild(notification)

      // Remove the notification after 2 seconds
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 2000)
    }
  }
})
