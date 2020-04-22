/* ====== Services Page ====== */
// Main div
const content_div = document.createElement("div");
content_div.setAttribute("id", "container");

/* ====== Showcase ====== */
const showcase_div = document.createElement("div");
showcase_div.setAttribute("class", "showcase");
const showcase_img = document.createElement("header_img");
const showcase_header = document.createElement("h1");

// Adding content
showcase_img.style.backgroundImage = "url('img/showcase.jpg')";
showcase_header.innerText = "Our Services";

/* ====== Services Section ====== */
const section_div_white = document.createElement("section");
section_div_white.classList.add('section', 'section_white');
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
const button = document.createElement("a");
button.classList.add('pay_button');
button.setAttribute("href", "pay.html");
button.innerHTML = "Sign Up";
    
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
const button2 = document.createElement("a");
button2.classList.add('pay_button');
button2.setAttribute("href", "pay.html");
button2.innerHTML = "Sign Up";

/* ====== Contact Section ====== */
const section_form_div = document.createElement("section");
section_form_div.classList.add('section', 'section__dark');
const form_div = document.createElement("div");
form_div.classList.add("showcase__form");

function emailForm() {
    const form = document.createElement("form");
    form_div.appendChild(form);
    form.method = "post";
    form.action = "message.html";
    const element1 = document.createElement("input");
    element1.type = "text";
    element1.setAttribute("id", "my_form");
    element1.placeholder = "Your Email";
    element1.autocomplete = "off";
    form.appendChild(element1);
    const element2 = document.createElement("textarea");
    element2.type = "text";
    element2.setAttribute("id", "my_message");
    element2.placeholder = "Your Message";
    element2.autocomplete = "off";
    form.appendChild(element2);
    const formButton = document.createElement("button");
    formButton.type = "submit";
    formButton.innerText = "Submit";
    form.appendChild(formButton);
}

emailForm();

/* ====== Create Structure ====== */
document.body.appendChild(content_div);
content_div.appendChild(showcase_div);
showcase_div.appendChild(showcase_img);
showcase_div.appendChild(showcase_header);

// Section Services
content_div.appendChild(section_div_white);
section_div_white.appendChild(servicesHeader);
section_div_white.appendChild(service_card_container);
service_card_container.appendChild(services_card1);
services_card1.appendChild(basic);
services_card1.appendChild(basicPrice);
services_card1.appendChild(basicUl);
services_card1.appendChild(button);
service_card_container.appendChild(services_card2);
services_card2.appendChild(professional);
services_card2.appendChild(proPrice);
services_card2.appendChild(proUl);
services_card2.appendChild(button2);

// Contact Section
content_div.appendChild(section_form_div);
section_form_div.appendChild(form_div);