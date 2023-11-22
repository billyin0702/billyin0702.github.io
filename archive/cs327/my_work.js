const links = [
  {
    title: "Assignment 1",
    description: "Main portfolio website",
    url: "https://billyin0702.github.io/",
  },
  {
    title: "Assignment 2",
    description: "6 GIFs of generative art",
    url: "https://cs327-a2-billyin.glitch.me/",
  },
  {
    title: "Assignment 3",
    description: "Different brushes",
    url: "https://cs329-a3-bill-yin.glitch.me/",
  },
  {
    title: "Assignment 4",
    description: "Particle systems: snow, cannon, and springy circles",
    url: "https://cs327-a4-swarms-by.glitch.me/",
  },
  {
    title: "Assignment 5",
    description: "Different parametric systems",
    url: "https://cs327-a5-billyin.glitch.me/",
  },
  {
    title: "Assignment 6",
    description: "Chatbots: Nutrionist and Mimic-Companion ",
    url: "https://cs327-chatbot-a6-by.glitch.me/",
  },
  {
    title: "Assignment 7",
    description: "Kobe essay",
    url: "https://cs327-a7-essay-data-by.glitch.me/",
  },
  {
    title: "Assignment 8",
    description: "Face tracking",
    url: "https://cs327-a8-masks-by.glitch.me/",
  },
];

// Dynamically create link boxes
const linksContainer = document.getElementById("linksContainer");
links.forEach((link) => {
  const linkBox = document.createElement("div");
  linkBox.classList.add("link-box");

  const linkTitle = document.createElement("div");
  linkTitle.classList.add("link-title");
  linkTitle.textContent = link.title;

  const linkDescription = document.createElement("div");
  linkDescription.classList.add("link-description");
  linkDescription.textContent = link.description;

  const linkElement = document.createElement("a");
  linkElement.classList.add("link");
  linkElement.href = link.url;
  linkElement.textContent = "Visit Website";

  linkBox.appendChild(linkTitle);
  linkBox.appendChild(linkDescription);
  linkBox.appendChild(linkElement);

  linksContainer.appendChild(linkBox);

  // Animation
  setTimeout(() => {
    linkBox.style.opacity = "1";
    linkBox.style.transform = "translateY(0)";
  }, 100 * (links.indexOf(link) + 1));
});
