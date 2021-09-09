const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:"https://randomuser.me/api/portraits/women/54.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img: "https://randomuser.me/api/portraits/women/32.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img: "https://randomuser.me/api/portraits/women/26.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

const image = document.querySelector('#person-img');
const name = document.querySelector('#name');
const job = document.querySelector('#job');
const description = document.querySelector('#description');

const prev = document.querySelector('#left');
const next = document.querySelector('#right');
const surprise = document.querySelector('#surprise');

let current = 0;

window.addEventListener('DOMContentLoaded', function() {
    updateData(0);
})

next.addEventListener('click', function() {
    current = (current+1)%reviews.length;
    updateData(current);
})

prev.addEventListener('click', function() {
    current = (current+reviews.length-1)%reviews.length;
    updateData(current);
})

surprise.addEventListener('click', function() {
    current = Math.floor(Math.random()*reviews.length);
    updateData(current);
})


function updateData(curr) {
    const item = reviews[curr];
    image.src = item.img;
    name.innerText = item.name;
    job.innerText = item.job;
    description.innerText = item.text;
}