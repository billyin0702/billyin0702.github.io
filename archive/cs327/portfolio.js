const portfolioItems = [
  { label: 'Project 1', url: 'project1.html', image: 'project1.jpg' },
  { label: 'Project 2', url: 'project2.html', image: 'project2.jpg' },
  // Add more portfolio items with images as needed
];

// Dynamically create portfolio items
const portfolioContainer = document.querySelector('.portfolio-container');
portfolioItems.forEach(item => {
  const portfolioItem = document.createElement('div');
  portfolioItem.classList.add('portfolio-item');

  const image = document.createElement('img');
  image.src = item.image;
  image.alt = item.label;

  const itemDetails = document.createElement('div');
  itemDetails.classList.add('portfolio-item-details');

  const label = document.createElement('a');
  label.href = item.url;
  label.textContent = item.label;
  label.classList.add('button');

  itemDetails.appendChild(label);

  portfolioItem.appendChild(image);
  portfolioItem.appendChild(itemDetails);

  portfolioContainer.appendChild(portfolioItem);
});
