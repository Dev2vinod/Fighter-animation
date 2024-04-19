var img1 = document.getElementById("guile");
var img2 = document.getElementById("spidersense");


const fighter1 = () => {
  Swal.fire(`Left move =Arrow down  \n
               right move = w \n
                kick = a \n

    `);
};

const fighter2 = () => {
  Swal.fire(
    `Move right =Arrow right  \n move left =Arrow left \n mukka = m\n  jump =Arrow up \n kick =k `
  );
};

var count = 50;
var counting = 50;

window.onkeyup = () => {
  if (event.key === "ArrowDown") {
    img2.src = "./spidersense.gif";
    count = count - 50;
    img2.style.left = count + "px";
    // console.log(count,"spidey left")
  }
  if (event.key === "a") {
    img2.src = "./spidersense.gif";

    img2.src = "./spidey-flipkick-fk.gif";
  }
  if (event.key === "w") {
    img2.src = "./spidersense.gif";
    img2.src = "./spidey-walk1.gif";
    count = count + 50;
    img2.style.left = count + "px";
    // console.log(count,"right")
  }
};

window.onkeydown = () => {
  // console.log(event.key,event.keyCode)
  if (event.key === "ArrowUp") {
    img1.src = "./guile-cfe-jump.gif";
    // console.log("jump on")
  }
  if (event.key === "ArrowLeft") {
    img1.src = "./guile-cfe-turn.gif";
    counting = counting - 50;
    img1.style.left = counting + "px";
    // console.log("move left",counting)
  }
  if (event.key === "ArrowRight") {
    img1.src = "./guile-cfe-turn.gif";

    counting = counting + 50;
    img1.style.left = counting + "px";
    // console.log("move right")
  }
  if (event.key === "k") {
    img1.src = "./guile-cfe-turn.gif";

    img1.src = "./guile-kick.gif";
  }
  if (event.key === "m") {
    img1.src = "./guile-cfe-turn.gif";

    img1.src = "./guile-mukka.gif";
  }
};
