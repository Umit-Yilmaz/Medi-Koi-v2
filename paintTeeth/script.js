document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("pixel-form");
    const image = document.getElementById("image");
    const pointX = [103, 107, 107, 110, 126, 140, 180, 214, 265, 311, 347, 362, 377, 381, 385, 385, 388, 378, 368, 355, 340, 316, 289, 263, 231, 196, 169, 146, 136, 119, 109, 96];
    const pointY = [340, 291, 243, 198, 153, 125, 95, 70, 70, 87, 121, 156, 197, 245, 294, 338, 447, 500, 546, 580, 611, 639, 659, 675, 675, 659, 640, 616, 586, 539, 496, 445];

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const number = parseInt(document.getElementById("number").value);

        if (!isNaN(number) && number >= 1 && number <= pointX.length) {
            const x = pointX[number - 1];
            const y = pointY[number - 1];
            drawBlackSquare(x, y);
        }
    });

    function drawBlackSquare(x, y) {
        const canvas = document.createElement("canvas");
        canvas.width = image.width;
        canvas.height = image.height;
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, image.width, image.height);
        context.fillStyle = "black";
        context.fillRect(x, y, 10, 10); // 10x10 piksel siyah kare çizimi
        image.src = canvas.toDataURL("image/png");
    }
});