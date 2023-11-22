// portfolio.js

const portfolioItems = [
  { label: "Ryan Newkirk's Self Portrait", url: 'https://ryannewkirk-a2.glitch.me/', image: 'ten_of_them_images/1.gif', desc: "The bouncing ball and the facial expression is quite interesting and descriptive. While this image does not convey much, but it is very innovative given the limited amount of items included on it." },
  { label: "Ryan Newkirk's Text Flower", url: 'https://ryannewkirk-a5.glitch.me/', image: 'ten_of_them_images/2.png', desc: "This work is very creative, since it is using letters to construct an object the nomrally would be using shapes. Being able to change them is also very creative, essentially giving us the freddom to construct the flower/wind turbine. Letter control is awesome!" },
  { label: "Ryan Newkirk's Paintball Mask", url: 'https://ryannewkirk-a8.glitch.me/', image: 'ten_of_them_images/3.png', desc: "The ability to have an interactive game on p5 using gifs is very creative, the most attractive part about this is definitely being able to face paint! Attempting to dodge while painting yourself is quite fun!" },
  { label: "Ryan Newkirk's Adventure Chat Bot", url: 'https://ryannewkirk-a6.glitch.me/', image: 'ten_of_them_images/4.png', desc: "A very creative and interactive game where the user can explore a hidden map, definitely make sure to explore all parts of it to see what the entier map has!" },
  { label: "Joy Zhao's Bad Prof Bot", url: 'https://probable-proud-puck.glitch.me/', image: 'ten_of_them_images/5.png', desc: "The setting at which this bot is in is very close t us as we are students, I find this very creative and given the background too, it is very close to heart. While some of them could be extreme, it is very funny! Notice the conversation changing and the canvas!" },
  { label: "Joy Zhao's Last Particle System", url: 'https://nimble-cat-catcher.glitch.me/', image: 'ten_of_them_images/6.png', desc: "Having black dots swim around is quite representative of tadpoles, which is really cool. While I assume this was not the intended interpretation, it is very cool indeed." },
  { label: "Caroline's Self Portrait", url: 'https://actually-outstanding-cookie.glitch.me/', image: 'ten_of_them_images/7.gif', desc: "This self portrait while is very simple, the continuous changing color to which it expands out from (the path changes color), is very cool. I find this to be very simple yet entertaining, the path is also a gradient, which is also a cool note." },
  { label: "Caroline's Erase Bot", url: 'https://luxuriant-intriguing-tugboat.glitch.me/', image: 'ten_of_them_images/8.png', desc: "Similar to a companion bot, this bot is able to 'draw' (or rather erase) what you have drawn, which is kind of cool because it creates a fun little competition between the user and the bot." },
  { label: "Gillian's Ocean Particle System", url: 'https://gilliannieh-a4.glitch.me/', image: 'ten_of_them_images/9.png', desc: "The scene is set to be very simple, the ocean with a blue background. However, with the different creatures inside of it, it is a lot more interesting and populated. While simple, this is a piece of art that evokes a sense of tranquility and playfulness." },
  { label: "Gillian's Wellness Bot", url: 'https://gilliannieh-a6.glitch.me/', image: 'ten_of_them_images/10.png', desc: "Contrary to Joy Zhao's bad prof bot, this bot is quite supportive, which is two very polarizing attitude for the two aforementioned bots. I think combining these two randomly could be very cool and have a strange, yet surprising dynamic." },
  { label: "Taeyoung's Cat Bot", url: 'https://a6-chatbot-taeyoung.glitch.me/', image: 'ten_of_them_images/11.png', desc: "The cat sounsd are very cute and definitely have some humor with the bot's responses. This is a very interesting companion bot with a twist, it is a chance to interact with animal companions! Notice the sound!" },
  // Add more portfolio items with images and descriptions as needed
];

// Dynamically create portfolio items
const portfolioContainer = document.querySelector('.portfolio-container');
portfolioItems.forEach(item => {
  const portfolioItem = document.createElement('div');
  portfolioItem.classList.add('portfolio-item');

  const frame = document.createElement('div');
  frame.classList.add('frame');

  const image = document.createElement('img');
  image.src = item.image;
  image.alt = item.label;

  const itemDetails = document.createElement('div');
  itemDetails.classList.add('portfolio-item-details');

  const title = document.createElement('h2');
  title.textContent = item.label;

  const description = document.createElement('p');
  description.textContent = item.desc;

  const link = document.createElement('a');
  link.href = item.url;
  link.textContent = 'View Project';
  link.classList.add('button');

  itemDetails.appendChild(title);
  itemDetails.appendChild(description);
  itemDetails.appendChild(link);

  frame.appendChild(image);
  portfolioItem.appendChild(frame);

  portfolioItem.appendChild(itemDetails);

  portfolioContainer.appendChild(portfolioItem);
});
