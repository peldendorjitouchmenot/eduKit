const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".nav-overlay");

// OPEN / CLOSE MENU
menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    overlay.classList.toggle("active");
});

// CLOSE WHEN CLICKING OUTSIDE (OVERLAY)
overlay.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.remove("active");
});

// OPTIONAL: CLOSE MENU WHEN CLICKING A LINK
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        overlay.classList.remove("active");
    });
});



const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(name === "" || email === "" || message === ""){
        alert("Please fill all fields.");
        return;
    }

    alert("Message sent successfully!");

    form.reset();
});

// =========================
    // CHATBOT
    // =========================
    const botIcon      = document.querySelector(".botIcon");
    const iconInner    = document.querySelector(".iconInner");
    const closeBtn     = document.querySelector(".chat_close_icon");
    const messenger    = document.getElementById("messenger");
    const msgInput     = document.querySelector("[name='msg']");
    const messagesList = document.querySelector(".Messages_list");

    if (!botIcon || !iconInner || !closeBtn || !messenger || !msgInput || !messagesList) {
        console.error("Missing chatbot HTML elements");
    }

    // OPEN CHATBOT
    iconInner.addEventListener("click", () => {
        botIcon.classList.add("showBotSubject");
        msgInput.focus();
    });

    // CLOSE CHATBOT — also clears history
    closeBtn.addEventListener("click", () => {
        botIcon.classList.remove("showBotSubject");
        messagesList.innerHTML = "";
        msgInput.value = "";
    });

    // SEND MESSAGE
    messenger.addEventListener("submit", e => {
        e.preventDefault();

        const val     = msgInput.value.toLowerCase().trim();
        const mainval = msgInput.value.trim();
        const hour    = new Date().getHours();

        if (val === "") return;

        function userMsg(text) {
            messagesList.innerHTML += `
                <div class="msg user">
                    <span class="responsText">${text}</span>
                </div>`;
        }

        function botMsg(text) {
            messagesList.innerHTML += `
                <div class="msg">
                    <span class="responsText">${text}</span>
                </div>`;
        }

        userMsg(mainval);
        msgInput.value = "";

        // ---------------- EDU KIT BHUTAN RESPONSES ----------------
        if (val.includes("hello") || val.includes("hi")) {
            if (hour < 12) {
                botMsg("Kuzuzangpo la 🌞 Good Morning! Welcome to Edu Kit Bhutan.");
            } else if (hour < 18) {
                botMsg("Kuzuzangpo la ☀️ Good Afternoon! Welcome to Edu Kit Bhutan.");
            } else {
                botMsg("Kuzuzangpo la 🌙 Good Evening! Welcome to Edu Kit Bhutan.");
            }
            botMsg("You can ask about kits, price, delivery, subjects, or schools.");
        } else if (val.includes("what is edu kit") || val.includes("about")) {
            botMsg("Edu Kit Bhutan provides educational kits and learning materials for students across Bhutan.");
        } else if (val.includes("price") || val.includes("cost")) {
            botMsg("Prices depend on the kit type. Basic, Standard, and Premium kits are available.");
        } else if (val.includes("delivery")) {
            botMsg("We deliver across Bhutan using local delivery partners and school distribution.");
        } else if (val.includes("school")) {
            botMsg("We partner with schools to provide learning materials and STEM kits.");
        } else if (val.includes("subjects")) {
            botMsg("Our kits include Mathematics, Science, English, ICT, and STEM activities.");
        } else if (val.includes("contact")) {
            botMsg("You can contact us through our website or social media pages.");
        } else if (val.includes("thank")) {
            botMsg("You're welcome 😊 Happy learning with Edu Kit Bhutan!");
        } else {
            botMsg("Sorry, I didn't understand. Try asking about price, delivery, subjects, or Edu Kit.");
        }

        // SCROLL TO BOTTOM
        messagesList.scrollTop = messagesList.scrollHeight;
    });
