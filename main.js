const responseElement = document.getElementById("response");
const responseContent = document.querySelectorAll(".content_response");

const addAnimation = () => {
    responseContent.forEach((element) => {
        element.classList.add("animation");
    });
    responseElement.classList.add("animation");
}

const removeAnimation = () => {
    responseContent.forEach((element) => {
        element.classList.remove("animation");
    });
    responseElement.classList.remove("animation");
}

const onGenerateResponse = async () => {
    removeAnimation();
    const bit = Math.floor(Math.random() * 2);
    const response = `Mandeha ${bit === 1 ? 'bus' : 'car'} tsika...`;
    
    const interval = setInterval(() => {
        if (responseElement.textContent.length > 4) responseElement.textContent = '';
        responseElement.textContent += '.';
    }, 631);

    await new Promise(response => setTimeout(response, 7131));
    clearInterval(interval);
    addAnimation();
    responseElement.textContent = response;
}