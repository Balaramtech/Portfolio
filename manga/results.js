// Function to parse the URL parameters
function getURLParameters() {
    const searchParams = new URLSearchParams(window.location.search);
    const params = {};
    for (const [key, value] of searchParams.entries()) {
      if (key === 'images') {
        params[key] = params[key] || [];
        params[key].push(value);
      } else {
        params[key] = value;
      }
    }
    return params;
  }
  
  // Function to render manga data on the results page
  function renderMangaData() {
    const mangaListContainer = document.getElementById('mangaList');
    mangaListContainer.innerHTML = '';
  
    const manga = getURLParameters();
  
    const mangaItem = document.createElement('div');
    mangaItem.classList.add('manga-item');
  
    const mangaDetails = document.createElement('div');
    mangaDetails.classList.add('manga-details');
  
    const mangaTitle = document.createElement('div');
    mangaTitle.classList.add('manga-title');
    mangaTitle.textContent = manga.title;
    mangaDetails.appendChild(mangaTitle);
  
    const mangaDescription = document.createElement('div');
    mangaDescription.classList.add('manga-description');
    mangaDescription.textContent = manga.description;
    mangaDetails.appendChild(mangaDescription);
  
    const mangaRating = document.createElement('div');
    mangaRating.classList.add('manga-rating');
    mangaRating.textContent = `Rating: ${manga.rating} stars`;
    mangaDetails.appendChild(mangaRating);
  
    const mangaChapter = document.createElement('div');
    mangaChapter.classList.add('manga-chapter');
    mangaChapter.textContent = `Chapter: ${manga.chapter}`;
    mangaDetails.appendChild(mangaChapter);
  
    mangaItem.appendChild(mangaDetails);
  
    const imagesContainer = document.createElement('div');
    imagesContainer.classList.add('manga-images');
  
    if (manga.images) {
      manga.images.forEach((imageURL, imgIndex) => {
        const mangaImage = document.createElement('img');
        mangaImage.src = imageURL;
        mangaImage.alt = `${manga.title} Image ${imgIndex + 1}`;
        imagesContainer.appendChild(mangaImage);
      });
    }
  
    mangaItem.appendChild(imagesContainer);
  
    mangaListContainer.appendChild(mangaItem);
  }
  
  // Call the function to render manga data when the page loads
  document.addEventListener('DOMContentLoaded', renderMangaData);
  