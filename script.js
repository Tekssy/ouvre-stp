document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".wrapper");
    const question = document.querySelector(".question");
    const gif = document.querySelector(".gif");
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");

    yesBtn.addEventListener("click", () => {
        question.innerHTML = "Youpi, à demain <33";
        gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
    });

    noBtn.addEventListener("mouseover", () => {
        const noBtnRect = noBtn.getBoundingClientRect();
        const maxX = window.innerWidth - noBtnRect.width;
        const maxY = window.innerHeight - noBtnRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    });

    // Initialisez le compteur de clics
    var clickCounter = 0;

    // Ajoutez un gestionnaire d'événements au bouton "Non"
    noBtn.addEventListener('mouseover', function () {
        // Incrémente le compteur de clics
        clickCounter++;

        // Vérifie si le nombre de clics atteint 10
        if (clickCounter === 20) {
            // Ajoutez ici le code que vous souhaitez exécuter après 10 clics sur "Non"
            question.innerHTML = "Comment ça non ?";
            gif.src = "https://media1.giphy.com/media/nwvbh2OTDp8p9mOM4s/giphy.gif?cid=ecf05e47brvu7ljojxn4p7vpcmlxj0vi6gwpn25o4wvjjlnr&ep=v1_gifs_search&rid=giphy.gif&ct=g";

            // Désactive le bouton "Non"
            noBtn.disabled = true;

            // Réinitialise le compteur pour permettre de détecter à nouveau 10 clics
            clickCounter = 0;
        } else {
            // Si moins de 10 clics, vous pouvez ajouter un autre traitement ou laisser vide
        }
    });
});

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
