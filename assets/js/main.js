// General JavaScript functions.

// Navbar
const my_navbar = document.createElement('nav');
const my_logo = document.createElement(`a`);
my_logo.classList.add('logo');
my_logo.innerHTML = "Logo";
my_logo.setAttribute("href", "home.html");
const menu_toggle = document.createElement('span');
menu_toggle.classList.add('navbar__toggle');
menu_toggle.setAttribute("id", "js_navbar_toggle");
const menu_bars = document.createElement('i');
menu_bars.setAttribute("class", "fas fa-bars");
const my_navbar_ul = document.createElement('ul');
my_navbar_ul.classList.add('ul_nav');
my_navbar_ul.setAttribute("id", "js_menu");
function navbar()
{
    const names = [
        [
            `home.html`,
            `home`
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
    const my_navbar_li = names.map(item => `<li><a href="${item[0]}">${item[1]}</a></li>`).join('');
    my_navbar_ul.innerHTML = my_navbar_li;
}
navbar();

my_navbar.classList.add('main__nav');

my_navbar.appendChild(my_logo);
my_navbar.appendChild(menu_toggle);
menu_toggle.appendChild(menu_bars);
my_navbar.appendChild(my_navbar_ul);
document.body.appendChild(my_navbar);

/* ====== Navigation functions ====== */
const mainNav = document.getElementById('js_menu');
const navbarToggle = document.getElementById('js_navbar_toggle');
navbarToggle.addEventListener('click', function()
{
    mainNav.classList.toggle('active');
});


