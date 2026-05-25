const giftBox = document.getElementById("giftBox");
const title = document.getElementById("title");
const music = document.getElementById("music");

giftBox.onclick = () => {

  // play musik
  music.play();

  // animasi buka
  giftBox.classList.add("open");

  title.innerHTML = "Opening Surprise 💖";

  setTimeout(() => {

    document.body.innerHTML = `

    <div class="surprise">

      <h1>✨ Surprise ✨</h1>

      <p>
        Makasih udah hadir 💖
      </p>

    </div>

    `;

    document.body.style.background = "black";

  },1000);

};
