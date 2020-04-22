/* ====== Footer ====== */
const my_footer = document.createElement('footer');

/* ====== Footer Menu ====== */
const my_footer_menu = document.createElement('div');
my_footer_menu.classList.add('footer__menu');
function footer_menu()
{
    const menu_list = [
        [
            'home.html',
            'home'
        ],
        [
            'about.html',
            'about'
        ],
        [
            'services.html',
            'services'
        ],
        [
            'portfolio.html',
            'portfolio'
        ],
        [
            'contact.html',
            'contact'
        ]    
    ];
    const footer_list = menu_list.map(item => `<li><a href="${item[0]}">${item[1]}</a></li>`).join('');
    my_footer_menu.innerHTML = footer_list;
}
footer_menu();

/* ====== Social Media ====== */
const my_footer_social = document.createElement('div');
my_footer_social.classList.add('footer__social');
function footer_social_icons()
{
    const social_icons = [
        [
            'http://www.instagram.com',
            '<i class="fab fa-instagram-square"></i>'
        ],
        [
            'http://www.instagram.com',
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
    my_footer_social.innerHTML = social_icons_list;
}
footer_social_icons();

/* ====== Contact ====== */
const my_footer_contact = document.createElement('div');
my_footer_contact.classList.add('footer__contact');
const my_footer_contact_title = document.createElement('h2');
my_footer_contact_title.innerText = 'Sign Up';
const form_div_footer = document.createElement("div");
form_div_footer.classList.add("showcase__form");

function email_form()
{
    form_div_footer.appendChild(my_footer_contact_title);
    const form = document.createElement("form");
    form_div_footer.appendChild(form);
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
email_form();

document.body.appendChild(my_footer);
my_footer.appendChild(my_footer_menu);
my_footer.appendChild(my_footer_social);
my_footer.appendChild(my_footer_contact);
my_footer_contact.appendChild(form_div_footer);

