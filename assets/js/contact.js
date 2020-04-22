/* ====== Contact Page ====== */
// Main div
const content_div = document.createElement("div");
content_div.setAttribute("id", "container");

/* ====== Showcase ====== */
const showcase_div = document.createElement("div");
showcase_div.setAttribute("class", "showcase");
const showcase_img = document.createElement("header_img");
showcase_img.style.backgroundImage = "url('img/showcase.jpg')";
const showcase_header = document.createElement("h1");
showcase_header.innerText = "Contact";

/* ====== Intro Section ====== */
const section_intro = document.createElement("section");
section_intro.classList.add('section', 'section__dark');
const intro_header = document.createElement("h2");
intro_header.innerText = "Why Contact us";
const intro_text = document.createElement("p");
intro_text.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

/* ====== Social Icon Section ====== */
const section_icons = document.createElement("section");
section_icons.classList.add('section', 'section__white');
function social_icons()
{
    const social_icons = [
        [
            'http://www.instagram.com',
            '<i class="fab fa-instagram-square"></i>'
        ],
        [
            'http://www.facebook.com',
            '<i class="fab fa-facebook"></i>'
        ],
        [
            'http://www.twitter.com',
            '<i class="fab fa-twitter-square"></i>'
        ],
        [
            'http://www.pinterest.com',
            '<i class="fab fa-pinterest-square"></i>'
        ]
    ];
    const social_icons_list = social_icons.map(icon => `<li><a href="${icon[0]}">${icon[1]}</a></li>`).join('');
    section_icons.innerHTML = social_icons_list;
}
social_icons();

/* ====== Contact Section ====== */
const section_contact_form = document.createElement("section");
section_contact_form.classList.add('section', 'section__dark');
const form_div = document.createElement("div");
form_div.classList.add('showcase__form');

function email_form()
{
    const form = document.createElement("form");
    form_div.appendChild(form);
    form.method = "get";
    form.action = "message.html";
    const element1 = document.createElement("input");
    element1.type = "text";
    element1.setAttribute("id", "my_form");
    element1.placeholder = "Subject";
    element1.required = "on";
    element1.autocomplete = "off";
    form.appendChild(element1);
    const element2 = document.createElement("input");
    element2.type = "email";
    element2.setAttribute("id", "my_form");
    element2.placeholder = "Email";
    element1.required = "on";
    element2.autocomplete = "off";
    form.appendChild(element2);
    const element3 = document.createElement("textarea");
    element3.type = "text";
    element3.setAttribute("id", "my_form");
    element3.placeholder = "Message";
    element1.required = "on";
    element3.autocomplete = "off";
    form.appendChild(element3);
    const form_button = document.createElement("button");
    form_button.type = "submit";
    form_button.innerText = "Submit";
    form.appendChild(form_button);
}
email_form();

/* ====== Create Structure ====== */
document.body.appendChild(content_div);
content_div.appendChild(showcase_div);
showcase_div.appendChild(showcase_img);
showcase_div.appendChild(showcase_header);

/* ====== Intro Section ====== */
content_div.appendChild(section_intro);
section_intro.appendChild(intro_header);
section_intro.appendChild(intro_text);

/* ====== Social Icons List ====== */
content_div.appendChild(section_icons);

/* ====== Contact Section ====== */
content_div.appendChild(section_contact_form);
section_contact_form.appendChild(form_div);