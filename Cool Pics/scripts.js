// Function to show the modal viewer
function viewHandler(event) {
    const image = event.target;
  
    // Ensure only gallery images trigger the modal
    if (!image.classList.contains("gallery-image")) return;
  
    // Get the viewer modal and its image element
    const viewer = document.querySelector(".viewer");
    const viewerImg = viewer.querySelector("img");
  
    // Update modal image src and alt
    viewerImg.src = image.src;
    viewerImg.alt = image.alt;
  
    // Show the viewer
    viewer.style.display = "grid";
  }
  
  // Function to close the modal viewer
  function closeViewer() {
    const viewer = document.querySelector(".viewer");
    viewer.style.display = "none";
  }
  
  // Add event listener to the gallery section
  const gallerySection = document.querySelector(".gallery");
  gallerySection.addEventListener("click", viewHandler);
  
  // Add event listener to the close button
  const closeButton = document.querySelector(".close-viewer");
  closeButton.addEventListener("click", closeViewer);
  