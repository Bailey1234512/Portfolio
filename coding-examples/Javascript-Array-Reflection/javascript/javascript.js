




const numImagesAvailable = 988;
const numItemsToGenerate = 10;
const imageWidth = 480;
const imageHeight = 480;
const collectionID = 844459;
let galleryContainer = document.getElementById('gallery-container');
let usedRandomNumbers = [];      //keep track of used random numbers
let selectedImages = [];        //keeps track of selected images


function renderGalleryItem(randomNumber){
    fetch(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}`)
      .then((response) => {
        let galleryItem = document.createElement('span');
        galleryItem.classList.add('gallery-item');
        let galleryImage = document.createElement('img');
        galleryImage.classList.add('gallery-image');
        galleryImage.src = response.url;
        galleryImage.setAttribute('data-src', response.url);  // add data-src attribute to store the URL
        galleryImage.alt = 'gallery image';
        galleryImage.addEventListener('click', () => {
          galleryItem.classList.toggle('selected');
          if (selectedImages.includes(galleryImage.src)) {
            selectedImages = selectedImages.filter(item => item !== galleryImage.src);
          } else {
            selectedImages.push(galleryImage.src);
          }
        });
        galleryItem.appendChild(galleryImage);
        galleryContainer.append(galleryItem);
        console.log('image URL:', response.url);
    });
}
  


for(let i = 0; i < numItemsToGenerate; i++){
    let randomImageIndex;
    do {
        randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
    } while (usedRandomNumbers.includes(randomImageIndex));
    
    usedRandomNumbers.push(randomImageIndex);
    renderGalleryItem(randomImageIndex);
}


//email submit

function submitForm(event) {
    event.preventDefault();
    const email = document.getElementById('emailInput').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const selectedElements = document.querySelectorAll('.selected');
    const imageUrls = [];
    for (let i = 0; i < selectedElements.length; i++) {
      let child = selectedElements[i].firstChild;
      const selectedImageUrl = child.getAttribute('data-src');
      if (selectedImageUrl) {
        imageUrls.push(selectedImageUrl);
      }
    }
    if (emailRegex.test(email)) {
      const data = {
        'email': email,
        'imageUrls': imageUrls
      };
      localStorage.setItem(email, JSON.stringify(data));
      console.log(data);
    } else {
      const emailError = document.querySelector('#emailError');
      emailError.style.display = 'block';
    }
  }
  

const emailForm = document.querySelector('#emailForm');
emailForm.addEventListener('submit', submitForm);

//email request 

function displayImages() {
    const email = document.getElementById('email-input').value;
    console.log('email:', email);
    const selectedImages = getSelectedImages(email);
    console.log('selectedImages:', selectedImages);
  
    if (selectedImages.length > 0) {
      const imagesContainer = document.getElementById('images-container');
      console.log('imagesContainer:', imagesContainer);
      imagesContainer.innerHTML = '';
  
      for (let i = 0; i < selectedImages.length; i++) {
        const img = document.createElement('img');
        img.src = selectedImages[i];
        imagesContainer.appendChild(img);
      }
    } else {
      alert('No images found for this email address.');
    }
  }
  
  
  function getSelectedImages(email) {
    const selectedImages = [];
  
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key));
      console.log('key:', key);
      console.log('value:', value);
  
      if (value.email === email && value.imageUrls.length > 0) {
        selectedImages.push(...value.imageUrls);
      }
    }
  
    return selectedImages;
  }
  
  
