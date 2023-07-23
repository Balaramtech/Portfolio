const mangaData = []; // Store manga data in this array

// Function to render manga data on the page
function renderMangaData() {
  const mangaListContainer = document.getElementById('mangaList');
  mangaListContainer.innerHTML = '';

  mangaData.forEach((manga) => {
    const mangaItem = document.createElement('div');
    mangaItem.classList.add('manga-item');

    
    const logoContainer = document.createElement('div');
    logoContainer.classList.add('manga-logo');
    const mangaLogo = document.createElement('img');
    mangaLogo.src = manga.logo;
    mangaLogo.alt = manga.title + ' Logo';
    logoContainer.appendChild(mangaLogo);
    mangaItem.appendChild(logoContainer);

    const mangaTitle = document.createElement('div');
    mangaTitle.classList.add('manga-title');
    mangaTitle.textContent = `Title: ${manga.title}`;

    const mangaDescription = document.createElement('div');
    mangaDescription.classList.add('manga-description');
    mangaDescription.textContent = `description: ${manga.description}`;

    const mangaRating = document.createElement('div');
    mangaRating.classList.add('manga-rating');
    mangaRating.textContent = `Rating: ${manga.rating} stars`;

    const mangaChapter = document.createElement('div');
    mangaChapter.classList.add('manga-chapter');
    mangaChapter.textContent = `Chapter: ${manga.chapter}`;

    mangaItem.appendChild(mangaTitle);
    mangaItem.appendChild(mangaDescription);
    mangaItem.appendChild(mangaRating);
    mangaItem.appendChild(mangaChapter);


    const imagesContainer = document.createElement('div');
    imagesContainer.classList.add('manga-images');

    manga.images.forEach((imageURL, index) => {
      const mangaImage = document.createElement('img');
      mangaImage.src = imageURL;
      mangaImage.alt = `${manga.title} Image ${index + 1}`;
      imagesContainer.appendChild(mangaImage);
    });

    mangaItem.appendChild(imagesContainer);

    mangaListContainer.appendChild(mangaItem);
  });
}

// Function to handle form submission and add new manga data
document.getElementById('mangaForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  const newManga = {
    title: formData.get('title'),
    description: formData.get('description'),
    rating: parseFloat(formData.get('rating')),
    logo: URL.createObjectURL(formData.get('logo')),
    images: [],
    chapter: parseInt(formData.get('chapter')),
  };

  const images = formData.getAll('images');
  images.forEach((image) => {
    newManga.images.push(URL.createObjectURL(image));
  });

  mangaData.push(newManga);
  renderMangaData();
  form.reset();
});

// Call the function to render manga data when the page loads
document.addEventListener('DOMContentLoaded', renderMangaData);
