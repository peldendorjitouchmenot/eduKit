

document.addEventListener("DOMContentLoaded", function () {
    // =========================
    // MENU TOGGLE
    // =========================
    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector("nav");
    const overlay = document.querySelector(".nav-overlay");

    if (menuBtn && nav && overlay) {
        menuBtn.addEventListener("click", () => {
            nav.classList.toggle("active");
            overlay.classList.toggle("active");
        });

        overlay.addEventListener("click", () => {
            nav.classList.remove("active");
            overlay.classList.remove("active");
        });

        document.querySelectorAll("nav a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
                overlay.classList.remove("active");
            });
        });
    } else {
        console.error("Menu elements not found");
    }


    // =========================
    // CHATBOT
    // =========================
    const botIcon = document.querySelector(".botIcon");
    const iconInner = document.querySelector(".iconInner");
    const closeBtn = document.querySelector(".chat_close_icon");
    const messenger = document.getElementById("messenger");
    const msgInput = document.querySelector("[name='msg']");
    const messagesList = document.querySelector(".Messages_list");

    if (!botIcon || !iconInner || !closeBtn || !messenger || !msgInput || !messagesList) {
        console.error("Missing chatbot HTML elements");
        return;
    }

    // OPEN CHATBOT
    iconInner.addEventListener("click", () => {
        botIcon.classList.add("showBotSubject");
        msgInput.focus();
    });

    // CLOSE CHATBOT
    closeBtn.addEventListener("click", () => {
        botIcon.classList.remove("showBotSubject");
    });

    // SEND MESSAGE
    messenger.addEventListener("submit", e => {
        e.preventDefault();

        let val = msgInput.value.toLowerCase().trim();
        let mainval = msgInput.value.trim();
        let nowhour = new Date().getHours();

        if (val === "") return;

        // USER MESSAGE
        function userMsg(text) {
            messagesList.innerHTML += `
                <div class="msg user">
                    <span class="responsText">${text}</span>
                </div>`;
        }

        // BOT MESSAGE
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
            if (nowhour < 12) {
                botMsg("Kuzuzangpo la 🌞 Good Morning! Welcome to Edu Kit Bhutan.");
            } else if (nowhour < 18) {
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
});
