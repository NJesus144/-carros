const doc = (el) => document.querySelector(el);

carsJson.map((item, index) => {
  let carItem = document
    .querySelector(".models .container-car1")
    .cloneNode(true);

  carItem.setAttribute("data-key", index);
  carItem.querySelector(".container-car1 img").src = item.img;
  carItem.querySelector(".car-item--name").innerHTML = item.name;
  carItem.querySelector(".car-item--desc").innerHTML = item.description;
  carItem.querySelector(".car-item--year").innerHTML = item.year;
  carItem.querySelector( ".car-item--price").innerHTML = `R$ ${item.price.toFixed(3)}`;

  doc(".cars").append(carItem);

  carItem.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();

    let key = e.target.closest(".container-car1").getAttribute("data-key");

    setTimeout(() => {
          doc(".aside").classList.add("show");
          doc(".aside").style.left = " ";
    }, 200);
    setTimeout(() => {
       
          doc(".cars").style.margin = 0;
    }, 500);
          doc(".modal--notice .car-name").innerHTML = carsJson[key].name;
          doc(".modal-img--container img").src = carsJson[key].img;
  });
});

  doc(".close-btn").addEventListener("click", () => {
      doc(".container-modal--notice").style.display = "none";
});

let closeModal = doc(".container-modal--notice");
closeModal.addEventListener("click", (evt) => {
  if (evt.target === closeModal) {
    doc(".container-modal--notice").style.display = "none";
  }
});

doc(".aside button").addEventListener("click", (e) => {
  e.preventDefault();
  
  var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
  let nome = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  
  if (nome = '' && email =='' || !er.test(email)) {
    doc(".text-msg").style.display = "flex";
        doc(".text-msg").innerHTML = "Por favor, preencha os campos corretamente!";
  } else {
   
      doc(".text-msg").style.display = "none";
      doc(".aside").classList.remove("show");

      doc(".cars").style.margin = "auto";

      doc(".container-modal--notice").style.opacity = 0;
      doc(".container-modal--notice").style.display = "flex";

    setTimeout(() => {
      doc(".container-modal--notice").style.opacity = 1;
    }, 200);
  }
});

