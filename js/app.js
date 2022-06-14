const posts = [
  {
    pseudo: "test1",
    isSponsored: false,
    ppUrl:
      "https://i.pinimg.com/236x/53/c3/74/53c37402c393a75d6ae60cd40d568b2c.jpg",
    imgUrl:
      "https://images.pexels.com/photos/8567864/pexels-photo-8567864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isLiked: false,
    likes: 354,
    isBooked: false,
  },
  {
    pseudo: "test2",
    isSponsored: true,
    ppUrl:
      "https://img.wattpad.com/9bfed39460f9daa324ce98683ddd5720c1b7aea2/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f627851706130366e50707a3968413d3d2d3334362e313632303634326165333763326663653431313835373232373739342e6a7067?s=fit&w=720&h=720",
    imgUrl:
      "https://images.pexels.com/photos/8478182/pexels-photo-8478182.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    isLiked: true,
    likes: 200458,
    isBooked: false,
  },
  {
    pseudo: "test3",
    isSponsored: true,
    ppUrl: "https://pbs.twimg.com/media/ETb5P4gXQAAwFmY.jpg",
    imgUrl:
      "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isLiked: true,
    likes: 12,
    isBooked: true,
  },
  {
    pseudo: "test4",
    isSponsored: false,
    ppUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTIxOBS6AOn8STZx5oJ0xDDC_FGOmmjQ6hGA&usqp=CAU",
    imgUrl:
      "https://images.pexels.com/photos/3389767/pexels-photo-3389767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    isLiked: false,
    likes: 8522,
    isBooked: true,
  },
];

const app = document.querySelector("#app");

for (const post of posts) {
  const article = document.createElement("article");
  const divUp = document.createElement("div");
  divUp.id = "divUp";
  const pp = document.createElement("img");
  divUp.appendChild(pp);
  pp.src = post.ppUrl;
  const divPseudo = document.createElement("div");
  const pseudo = document.createElement("p");
  pseudo.textContent = post.pseudo;
  divPseudo.appendChild(pseudo);
  divUp.appendChild(divPseudo);
  if (post.isSponsored) {
    const sponsored = document.createElement("p");
    sponsored.textContent = "sponsored";
    divPseudo.appendChild(sponsored);
  }
  const divImg = document.createElement("div");
  divImg.id = "divImg";
  divImg.style.background = `url('${post.imgUrl}')`;
  divImg.style.backgroundSize = "cover";
  //const img = document.createElement("img");
  //img.src = post.imgUrl;
  //divImg.appendChild(img);
  const divDown = document.createElement("div");
  divDown.id = "divDown";
  const actions = document.createElement("div");
  divDown.appendChild(actions);
  actions.innerHTML = `
    <div>
        <i class="fa-${post.isLiked ? "solid" : "regular"} fa-heart"></i>
        <i class="fa-regular fa-comment"></i>
        <i class="fa-regular fa-paper-plane"></i>
    </div> 
    <i class="fa-${post.isBooked ? "solid" : "regular"} fa-bookmark"></i>
  `;
  const likes = document.createElement("p");
  likes.textContent = post.likes.toLocaleString("en-US") + " likes";
  divDown.appendChild(likes);
  article.appendChild(divUp);
  article.appendChild(divImg);
  article.appendChild(divDown);
  app.appendChild(article);
}
