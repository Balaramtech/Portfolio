/* Toggle (display none and block) for main comment input */
function toggleContent() {
  var content = document.getElementById("comments");
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

/* Post Img Like Count */
var like = document.getElementById("likeme");
var count = 0;
like.onclick = function () {
  count += 1;
  like.innerHTML = "Likes: " + count;
};

/* Function to handle posting the main reply */
function postMainReply() {
  const mainReplyContent = document.getElementById("main-reply").value;
  if (mainReplyContent.trim() !== "") {
    addReply(mainReplyContent);
    document.getElementById("main-reply").value = "";
  }
}

/* Add event listener for post main reply button */
const postMainReplyButton = document.getElementById("post-main-reply");
postMainReplyButton.addEventListener("click", postMainReply);

/* Function to create a new reply element */
function createReplyElement(content) {
  const replyElement = document.createElement("div");
  replyElement.classList.add("reply");
  replyElement.innerHTML = `
      <p>${content}</p>
      <div class="forgap">
      <button class="like">Like</button>
      <span class="likes">0</span>
      <button class="reply">Reply</button>
      <button class="delete">Delete</button>
      </div>
      <div class="reply-box" style="display: none;">
        <input class="reply-input" placeholder="Enter your reply"></input>
        <button class="post-reply">Post</button>
      </div>
      <div class="replies"></div>
    `;

  const replyButton = replyElement.querySelector(".reply");
  const replyBox = replyElement.querySelector(".reply-box");

  /* Function to handle toggling reply input visibility the focus is used to inspect or focus on input */
  function toggleReplyBox() {
    if (replyBox.style.display === "none") {
      replyBox.style.display = "block";
      replyBox.querySelector(".reply-input").focus();
    } else {
      replyBox.style.display = "none";
    }
  }

  /* Add event listener for reply button */
  replyButton.addEventListener("click", toggleReplyBox);

  return replyElement;
}

/* Function to add a new reply to the thread */
function addReply(content, parentReply = null) {
  const replyElement = createReplyElement(content);
  const replyBox = replyElement.querySelector(".reply-box");
  const postReplyButton = replyElement.querySelector(".post-reply");

  /* Function to handle posting a reply */
  function postReply() {
    const replyContent = replyBox.querySelector(".reply-input").value;
    if (replyContent.trim() !== "") {
      addReply(replyContent, replyElement);
      replyBox.style.display = "none";
      replyBox.querySelector(".reply-input").value = ""; // Clear the input field
    }
  }

  /* Add event listener for post reply button */
  postReplyButton.addEventListener("click", postReply);

  if (parentReply) {
    const repliesContainer = parentReply.querySelector(".replies");
    repliesContainer.appendChild(replyElement);
  } else {
    const thread = document.getElementById("comments");
    thread.appendChild(replyElement);
  }

  /* Function to handle deleting a reply */
  function deleteReply() {
    replyElement.remove();
  }

  /* Add event listener for delete button */
  const deleteButton = replyElement.querySelector(".delete");
  deleteButton.addEventListener("click", deleteReply);

  /* Function to handle liking a reply */
  function likeReply() {
    const likesElement = replyElement.querySelector(".likes");
    let likes = parseInt(likesElement.innerText);
    likes++;
    likesElement.innerText = likes.toString();
  }

  /* Add event listener for like button */
  const likeButton = replyElement.querySelector(".like");
  likeButton.addEventListener("click", likeReply);
}

/* Function to handle editing a comment */
function editComment() {
  const commentElement = this.parentNode;
  const commentContentElement = commentElement.querySelector("p");
  const editInputElement = commentElement.querySelector(".edit-input");

  if (commentContentElement.style.display === "none") {
    // Save changes
    commentContentElement.innerText = editInputElement.value;
    commentContentElement.style.display = "block";
    editInputElement.style.display = "none";
    this.innerText = "Edit";
  } else {
    // Enter edit mode
    editInputElement.value = commentContentElement.innerText;
    commentContentElement.style.display = "none";
    editInputElement.style.display = "block";
    this.innerText = "Save";
  }
}

/* Add event listeners for editing comments */
const editCommentButtons = document.querySelectorAll(".edit-comment");
editCommentButtons.forEach(button => {
  button.addEventListener("click", editComment);
});
