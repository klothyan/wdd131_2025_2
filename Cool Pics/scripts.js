function viewHandler(event) {
    const image = event.target;
  
    if ((image.classList.contains("photo-item"))) {return;}
  
    const viewer = document.querySelector(".viewer");
    const viewerImg = viewer.querySelector("img");
  
    viewerImg.src = image.src;
    viewerImg.alt = image.alt;
  
    viewer.style.display = "grid";
  }
  
  function closeViewer() {
    const viewer = document.querySelector(".viewer");
    viewer.style.display = "none";
  }
  
  const gallerySection = document.querySelector(".photo-blog");
  gallerySection.addEventListener("click", viewHandler);

  const closeButton = document.querySelector(".close-viewer");
  closeButton.addEventListener("click", closeViewer);
  