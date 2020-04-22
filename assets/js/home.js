// Document id and classes
// Creates the div
const content_div = document.createElement("div");
// Set the attribute such as id
content_div.setAttribute("id", "container");

// Showcase
const showcase_div = document.createElement("div");
showcase_div.setAttribute("class", "showcase");
const showcase_img = document.createElement("header_img");
const showcase_header = document.createElement("h1");
const form_div = document.createElement("div");
form_div.classList.add("showcase__form");
const form_header = document.createElement("h3");

function emailForm()
{
    const form = document.createElement("form");
    form_div.appendChild(form);
    form.method = "get";
    form.action = "message.html";
    const element1 = document.createElement("input");
    element1.type = "email";
    element1.setAttribute("id", "my_form");
    element1.placeholder = "Your Email";
    element1.required = "on";
    element1.autocomplete = "off";
    form.appendChild(element1);
    const formButton = document.createElement("button");
    formButton.type = "submit";
    formButton.innerText = "Submit";
    form.appendChild(formButton);
}

emailForm();

// Adding content
showcase_img.style.backgroundImage = "url('img/showcase.jpg')";
showcase_header.innerText = "Hello I'm Awesome"
form_header.innerText = "Sign up for my newsletter!";

showcase_div.appendChild(showcase_img);
showcase_div.appendChild(showcase_header);
showcase_div.appendChild(form_header);
showcase_div.appendChild(form_div);
// showcase_div.appendChild(form);

// Sections
// section Containers
const section_container = document.createElement("div");
section_container.classList.add("section__container");
// Sales Section
const section_div = document.createElement("section");
section_div.classList.add('section__white', 'section');
const header_sales = document.createElement("h2");
const sales_cards_container = document.createElement("div");
sales_cards_container.classList.add('sales__cards_container');
header_sales.innerText = "Why Me?"
// Card 1
const sales_cards = document.createElement("div");
sales_cards.classList.add('sales__cards');
const sales_cards_img = document.createElement("i");
sales_cards_img.classList.add('fas', 'fa-cogs');
const sales_cards_text = document.createElement("p");
sales_cards_text.innerText = "Great Work";

section_div.appendChild(header_sales);
section_div.appendChild(sales_cards_container);
// Card 2
sales_cards_container.appendChild(sales_cards);
sales_cards.appendChild(sales_cards_img);
sales_cards.appendChild(sales_cards_text);

// Card 2
const sales_cards2 = document.createElement("div");
sales_cards2.classList.add('sales__cards');
const sales_cards_img2 = document.createElement("i");
sales_cards_img2.classList.add('fas', 'fa-hands-helping');
const sales_cards_text2 = document.createElement("p");
sales_cards_text2.innerText = "Superb Customer Service";
// Card 2
sales_cards_container.appendChild(sales_cards2);
sales_cards2.appendChild(sales_cards_img2);
sales_cards2.appendChild(sales_cards_text2);

// Card 3
const sales_cards3 = document.createElement("div");
sales_cards3.classList.add('sales__cards');
const sales_cards_img3 = document.createElement("i");
sales_cards_img3.classList.add('fas', 'fa-dollar-sign');
const sales_cards_text3 = document.createElement("p");
sales_cards_text3.innerText = "Unbeatable Prices";
// Card 3
sales_cards_container.appendChild(sales_cards3);
sales_cards3.appendChild(sales_cards_img3);
sales_cards3.appendChild(sales_cards_text3);

// Card 4
const sales_cards4 = document.createElement("div");
sales_cards4.classList.add('sales__cards');
const sales_cards_img4 = document.createElement("i");
sales_cards_img4.classList.add('fas', 'fa-laptop-code');
const sales_cards_text4 = document.createElement("p");
sales_cards_text4.innerText = "Talented Coders";
// Card 4
sales_cards_container.appendChild(sales_cards4);
sales_cards4.appendChild(sales_cards_img4);
sales_cards4.appendChild(sales_cards_text4);

/* ====== Testimonials Section ====== */
const section_div_dark = document.createElement("section");
section_div_dark.classList.add('section', 'section__dark');

// As seen on
const clientsHeader = document.createElement("h2");
clientsHeader.innerText = "Clients";
const clients = document.createElement("div");
clients.classList.add('clients');
const client_logos = ['img/logo.png', 'img/logo.png', 'img/logo.png', 'img/logo.png', 'img/logo.png', 'img/logo.png', 'img/logo.png', 'img/logo.png'];
const clients_list = client_logos.map(item => `<img src="${item}">`).join('');
clients.innerHTML = clients_list;

// Testimonials
const testimonialsHeader = document.createElement("h2");
testimonialsHeader.innerText = "Testimonials";
const testimonials = document.createElement("div");
testimonials.classList.add('testimonials');
// Testimonial 1
const testimonials_card = document.createElement("div");
testimonials_card.classList.add('testimonials__card');
const img = document.createElement("img");
img.src = "img/profile1.jpg";
const testimonialText = document.createElement("p");
testimonialText.innerText = "This dude is awesome!";
const profileName = document.createElement("h4");
profileName.innerText = "Robert - InoTech";
// Testimonial 2
const testimonials_card2 = document.createElement("div");
testimonials_card2.classList.add('testimonials__card');
const img2 = document.createElement("img");
img2.src = "img/profile2.jpg";
const testimonialText2 = document.createElement("p");
testimonialText2.innerText = "The result was amaizing!";
const profileName2 = document.createElement("h4");
profileName2.innerText = "Lisa - Techie Tech";

section_div_dark.appendChild(clientsHeader);
section_div_dark.appendChild(clients);
section_div_dark.appendChild(testimonialsHeader);
section_div_dark.appendChild(testimonials);
testimonials.appendChild(testimonials_card);
testimonials_card.appendChild(img);
testimonials_card.appendChild(testimonialText);
testimonials_card.appendChild(profileName);
testimonials.appendChild(testimonials_card2);
testimonials_card2.appendChild(img2);
testimonials_card2.appendChild(testimonialText2);
testimonials_card2.appendChild(profileName2);

/* ====== Services ====== */
const section_div_white = document.createElement("section");
section_div_white.classList.add('section', 'section__white');
const servicesHeader = document.createElement("h2");
servicesHeader.innerText = "Services";
const service_card_container = document.createElement("div");
service_card_container.classList.add('service__card_container');
// Card 1
const services_card1 = document.createElement("div");
services_card1.classList.add('service__card');
const basic = document.createElement("h3");
basic.innerText = "Basic Plan";
const basicPrice = document.createElement("p");
basicPrice.innerText = "$500";
const basicList = ['5 Pages', '3 Revisions', 'Great Customer Service', 'Template of your choice', 'Hosting'];
const basicUl = document.createElement("ul");
const basicLi = basicList.map(item => `<li>${item}</li>`).join('');
basicUl.innerHTML = basicLi;
// Card 2
const services_card2 = document.createElement("div");
services_card2.classList.add('service__card');
const professional = document.createElement("h3");
professional.innerText = "Professional Plan";
const proPrice = document.createElement("p");
proPrice.innerText = "$1500";
const proList = ['Unlimited Pages', '5 Revisions', 'Great Customer Service', 'Template of your choice', 'Hosting', 'Database Support', 'Content Writing'];
const proUl = document.createElement("ul");
const proLi = proList.map(item => `<li>${item}</li>`).join('');
proUl.innerHTML = proLi;

section_div_white.appendChild(servicesHeader);
section_div_white.appendChild(service_card_container);
service_card_container.appendChild(services_card1);
services_card1.appendChild(basic);
services_card1.appendChild(basicPrice);
services_card1.appendChild(basicUl);
service_card_container.appendChild(services_card2);
services_card2.appendChild(professional);
services_card2.appendChild(proPrice);
services_card2.appendChild(proUl);

// Append the above div to the body tag
document.body.appendChild(content_div);
content_div.appendChild(showcase_div);
content_div.appendChild(section_container);
section_container.appendChild(section_div);
section_container.appendChild(section_div_dark);
section_container.appendChild(section_div_white);
