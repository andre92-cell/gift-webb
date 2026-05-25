const giftBox = document.getElementById("giftBox");
const text = document.getElementById("text");

giftBox.onclick = () => {

  giftBox.classList.add("open");

  text.innerHTML = "Hadiah terbuka 💖";

  setTimeout(() => {
    document.body.innerHTML = `
    
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      background:black;
      color:white;
      font-family:sans-serif;
    ">

      <h1 style="font-size:50px;">
        Surprise ✨
      </h1>

      <p style="margin-top:20px;font-size:22px;">
        Kamu spesial 💖
      </p>

    </div>

    `;
  }, 1000);

};
