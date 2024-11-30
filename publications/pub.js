const publications = [];

function render() {
  const publicationsDiv = document.getElementById("publications");
  publicationsDiv.innerHTML = "";

  publications.forEach((pub, pubIndex) => {
    const pubDiv = document.createElement("div");
    pubDiv.classList.add("publication");

    const pubText = document.createElement("p");
    pubText.textContent = pub.text;
    pubDiv.appendChild(pubText);

    const commentInput = document.createElement("textarea");
    commentInput.placeholder = "Ajouter un commentaire...";
    pubDiv.appendChild(commentInput);

    const addCommentBtn = document.createElement("button");
    addCommentBtn.textContent = "Ajouter Commentaire";
    addCommentBtn.onclick = () => {
      if (commentInput.value.trim()) {
        pub.comments.push(commentInput.value.trim());
        commentInput.value = "";
        render();
      }
    };
    pubDiv.appendChild(addCommentBtn);

    pub.comments.forEach((comment) => {
      const commentDiv = document.createElement("div");
      commentDiv.classList.add("comment");
      commentDiv.textContent = comment;
      pubDiv.appendChild(commentDiv);
    });

    publicationsDiv.appendChild(pubDiv);
  });
}

function addPublication() {
  const publicationInput = document.getElementById("publicationInput");
  const text = publicationInput.value.trim();
  if (text) {
    publications.push({ text, comments: [] });
    publicationInput.value = "";
    render();
  }
}

render();
