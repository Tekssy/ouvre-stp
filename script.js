document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".wrapper");
    const question = document.querySelector(".question");
    const gif = document.querySelector(".gif");
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");

    yesBtn.addEventListener("click", () => {
        question.innerHTML = "Youpiii <33";
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

    var clickCounter = 0;

    noBtn.addEventListener('mouseover', function () {
        clickCounter++;

        if (clickCounter === 10) {
            question.innerHTML = "Comment ça non ?";
            gif.src = "https://media1.giphy.com/media/nwvbh2OTDp8p9mOM4s/giphy.gif?cid=ecf05e47brvu7ljojxn4p7vpcmlxj0vi6gwpn25o4wvjjlnr&ep=v1_gifs_search&rid=giphy.gif&ct=g";
            noBtn.disabled = true;
        }

if (clickCounter === 15) {
    document.body.classList.add("dark-mode");

    gif.style.display = "none"; 

    var imagejavascript = document.createElement("img");
    imagejavascript.src = "https://i.pinimg.com/564x/b8/e1/a9/b8e1a993358f7e5405d6db18d57b8969.jpg";
    imagejavascript.classList.add("image-javascript");
    document.body.appendChild(imagejavascript);


    wrapper.style.display = "none";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    clickCounter = 0;
}



    });
});


