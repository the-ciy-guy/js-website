/* ====== Thank You Page ====== */
// Main Div
const content_div = document.createElement("div");
content_div.setAttribute("id", "container");

/* ====== Thank You Message ====== */
const thank_you_section = document.createElement("section");
thank_you_section.classList.add('message__section');
const thank_you_header = document.createElement("h2");
thank_you_header.innerText = "Message Sent!";
const thank_you_content = document.createElement("h4");
thank_you_content.innerText = "Thank You For Your Message!";
const thank_you_text = document.createElement("p");
thank_you_text.innerText = "I will get back to you as soon as I can!";

/* ====== Structure ====== */
document.body.appendChild(content_div);
content_div.appendChild(thank_you_section);
thank_you_section.appendChild(thank_you_header);
thank_you_section.appendChild(thank_you_content);
thank_you_section.appendChild(thank_you_text);

/* ====== Redirect to contact page ====== */
function redirect()
{
    window.location = "contact.html";
}
document.write(`<p class="redirect__message">You will be redirected back in 5 seconds!</p>`);
setTimeout('redirect()', 5000);