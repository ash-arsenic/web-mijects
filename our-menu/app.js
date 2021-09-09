const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "dinner",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "steak dinner",
        category: "dinner",
        price: 18.99,
        img: "./images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
      },
  ];



const buttons = document.querySelectorAll('.btn');
const addTo = document.querySelector('#add-here');

window.addEventListener("DOMContentLoaded", function() {
    let innerCode = ``;
    for(let i=0; i<10; i++) {
        innerCode += buildData(menu[i]);
    }
    addTo.innerHTML = innerCode;
})

buttons.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if(styles.contains("all")) {
            let innerCode = ``;
            for(let i=0; i<10; i++) {
                innerCode += buildData(menu[i]);
            }
            addTo.innerHTML = innerCode;

        } else if(styles.contains("breakfast")) {

            let innerCode = ``;
            for(let i=0; i<10; i++) {
                if(menu[i].category==="breakfast") {
                    innerCode += buildData(menu[i]);
                }
            }
            addTo.innerHTML = innerCode;
        }else if(styles.contains("lunch")) {
            
            let innerCode = ``;
            for(let i=0; i<10; i++) {
                if(menu[i].category==="lunch") {
                    innerCode += buildData(menu[i]);
                }
            }
            addTo.innerHTML = innerCode;
        }else if(styles.contains("shakes")) {
            
            let innerCode = ``;
            for(let i=0; i<10; i++) {
                if(menu[i].category==="shakes") {
                    innerCode += buildData(menu[i]);
                }
            }
            addTo.innerHTML = innerCode;
        } else if(styles.contains("dinner")){

            let innerCode = ``;
            for(let i=0; i<10; i++) {
                if(menu[i].category==="dinner") {
                    innerCode += buildData(menu[i]);
                }
            }
            addTo.innerHTML = innerCode;
        }
    })
})

function buildData(food) {
    const code = `<div class="col">
    <div
      class="card mb-3 bg-light"
      style="max-width: 540px; border: none"
    >
      <div class="row g-0">
        <div class="col-md-4 d-flex justify-content-center">
          <img
            src=${food.img}
            class="img-fluid food-image rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <div
              class="
                card-title
                food-info
                d-flex
                fw-bold
                justify-content-between
              "
            >
              <p id="name">${food.title}</p>
              <p id="price">$${food.price}</p>
            </div>
            <p class="card-text fw-light" id="food-info">
                ${food.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

`;

    return code;
}