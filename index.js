let textArea = document.querySelector("textarea");
let tagsContainer = document.getElementById("tag");

textArea.focus();

textArea.addEventListener("keyup", function (e) {
  let input = e.target.value;
  let tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  // console.log(tags.length);

  let tag;
  tagsContainer.innerHTML = "";
  for (let i = 0; i < tags.length; i++) {
    tag = document.createElement("span");
    tag.innerText = tags[i];
    tag.classList.add("tag");
    tagsContainer.appendChild(tag);
  }

  if (e.key === "Enter") {
    if (tags.length == 1) {
      setTimeout(function () {
        e.target.value = "";
      }, 10);
      document.getElementsByClassName("tag")[0].classList.add("highlight");
    } else if (tags.length > 0) {
      setTimeout(function () {
        e.target.value = "";
      }, 10);

      let intervals = setInterval(function () {
        let randomChoice = Math.floor(Math.random() * tags.length);
        console.log(randomChoice);
        document
          .getElementsByClassName("tag")
          [randomChoice].classList.add("highlight");
        setTimeout(function () {
          document
            .getElementsByClassName("tag")
            [randomChoice].classList.remove("highlight");
        }, 100);
      }, 100);

      setTimeout(function () {
        clearInterval(intervals);
        setTimeout(function () {
          let random = Math.floor(Math.random() * tags.length);
          console.log(random);
          document
            .getElementsByClassName("tag")
            [random].classList.add("highlight");
        }, 100);
      }, 30 * 100);
    } else {
      tagsContainer.innerHTML = "<Span>0 Choices entered</Span>";
    }
  }
});
