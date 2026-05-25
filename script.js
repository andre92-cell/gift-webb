const giftBox = document.getElementById("giftBox");
const title = document.getElementById("title");
const music = document.getElementById("music");

giftBox.onclick = () => {

  // musik
  music.play();

  // animasi gift
  giftBox.classList.add("open");

  title.innerHTML = "Opening Surprise 💖";

  setTimeout(() => {

    document.body.innerHTML = `

    <div class="surprise">

      <img src="foto.jpg" class="photo">

      <h1>✨ For You ✨</h1>

      <p>
        Makasih udah hadir 💖
      </p>

    </div>

    `;

  },1000);

};
