/* ====== Portfolio Page ====== */
// Main div
const content_div = document.createElement("div");
content_div.setAttribute("id", "container");

/* ====== Showcase ====== */
const showcase_div = document.createElement("div");
showcase_div.setAttribute("class", "showcase");
const showcase_img = document.createElement("header_img");
showcase_img.style.backgroundImage = "url('img/showcase.jpg')";
const showcase_header = document.createElement("h1");
showcase_header.innerText = "Portfolio";

/* ====== Client Section ====== */
const section_client = document.createElement("section");
section_client.classList.add('section', 'section__white');
const clients_header = document.createElement("h2");
clients_header.innerText = "Clients";
const client_card = document.createElement("div");
client_card.classList.add('clients');
function clients()
{
    const client_logos = [
        [
            'img/logo.png',
            `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
        ],
        [
            'img/logo.png',
            `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
        ],
        [
            'img/logo.png',
            `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
        ],
        [
            'img/logo.png',
            `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
        ],
        [
            'img/logo.png',
            `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
        ],
        [
            'img/logo.png',
            `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
        ],
        [
            'img/logo.png',
            `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
        ],
        [
            'img/logo.png',
            `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
        ],
    ];
    const clients_list = client_logos.map(item => `<li><img src="${item[0]}"><p>${item[1]}</p></li>`).join('');
    client_card.innerHTML = clients_list;
}
clients();

/* ====== Testimonials ====== */
const section_testimonials = document.createElement(`section`);
section_testimonials.classList.add(`section`, `section__dark`);
const testimonial_header = document.createElement('h2');
testimonial_header.innerHTML = "Testimonials";
const testimonialsdiv = document.createElement("div");
testimonialsdiv.classList.add('testimonials');
const testimonial_card = document.createElement("div");
testimonial_card.classList.add('testimonials__card_portfolio');
function testimonials()
{
    const profile_info = [
        [
            'img/profile1.jpg',
            'This dude is awesome',
            'Robert - InoTech'
        ],
        [
           'img/profile2.jpg', 
           'The result was amaizing!',
           'Lisa - Techie Tech'
        ],
        [
            'img/profile1.jpg',
            'Thank you so much!',
            'Frank - Inova'
        ],
        [
            'img/profile2.jpg',
            'It was a fantastic experience!',
            'Alice - mystore.com'
        ],
        [
            'img/profile1.jpg',
            'What a great service!',
            'Eric - myawesomeblog.com'
        ],
        [
            'img/profile2.jpg',
            'My site is beautiful',
            'Lina - lovestory.com'
        ],
        [
            'img/profile1.jpg',
            'Everything was smooth with this guy!',
            'Matt - Clothes for U'
        ],
        [
            'img/profile2.jpg',
            'I love this guy',
            'Erika - Imagine This'
        ]
    ];
   

    const testimonial_list = profile_info.map(item => `<li><img src="${item[0]}"><p>${item[1]}</p><h3>${item[2]}</h3></li>`).join('');
    testimonial_card.innerHTML = testimonial_list;
}
testimonials();

/* ====== Create Structure ====== */
document.body.appendChild(content_div);
content_div.appendChild(showcase_div);
showcase_div.appendChild(showcase_img);
showcase_div.appendChild(showcase_header);

/* ====== Client Section ====== */
content_div.appendChild(section_client);
section_client.appendChild(clients_header);
section_client.appendChild(client_card);

/* ====== Testimonial Section ====== */
content_div.appendChild(section_testimonials);
section_testimonials.appendChild(testimonial_header);
section_testimonials.appendChild(testimonialsdiv);
testimonialsdiv.appendChild(testimonial_card);