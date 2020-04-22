/* ====== About Page ====== */
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
showcase_header.innerText = "I'm The CIY Guy";

/* ====== About Me Section ====== */
const section_div_one = document.createElement("section");
section_div_one.classList.add('section', 'section__white');
const about_me_profile = document.createElement("div");
about_me_profile.classList.add('profile__pic');
const about_me_intro = document.createElement("p");
about_me_intro.classList.add('about__text');

// Adding content
about_me_profile.src = "img/profile.jpg";
about_me_intro.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

/* ====== Social Media Section ====== */
const section_div_two = document.createElement("section");
section_div_two.classList.add('section', 'section__white');
const social_media_info = document.createElement("div");
social_media_info.classList.add('social__icons');

// Icon facebook
const social_facebook_link = document.createElement("a");
const social_facebook = document.createElement("i");
social_facebook.classList.add('fab', 'fa-facebook-square');

// Icon Instagram
const social_insta_link = document.createElement("a");
const social_insta = document.createElement("i");
social_insta.classList.add('fab', 'fa-instagram-square');

// Icon Pinterest
const social_pin_link = document.createElement("a");
const social_pin = document.createElement("i");
social_pin.classList.add('fab', 'fa-pinterest-square');

// Icon Youtube
const social_tube_link = document.createElement("a");
const social_tube = document.createElement("i");
social_tube.classList.add('fab', 'fa-youtube-square');

/* Contact Form Section */
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

/* ====== Create structure ====== */
document.body.appendChild(content_div);
content_div.appendChild(showcase_div);
showcase_div.appendChild(showcase_img);
showcase_div.appendChild(showcase_header);

// Section One
content_div.appendChild(section_div_one);
section_div_one.appendChild(about_me_profile);
section_div_one.appendChild(about_me_intro);

// Section Two
content_div.appendChild(section_div_two);
section_div_two.appendChild(social_media_info);
// Facebook icon
social_media_info.appendChild(social_facebook_link);
social_facebook_link.appendChild(social_facebook);
// Instagram icon
social_media_info.appendChild(social_insta_link);
social_insta_link.appendChild(social_insta);
// Pinterest icon
social_media_info.appendChild(social_pin_link);
social_pin_link.appendChild(social_pin);
// Youtube icon
social_media_info.appendChild(social_tube_link);
social_tube_link.appendChild(social_tube);

// Contact Section
content_div.appendChild(section_form_div);
section_form_div.appendChild(form_div);
