const postList = document.querySelector("#post-list");

// Function to display posts
function displayPosts(posts) {
  posts.forEach((post) => {

    // Create li
    const li = document.createElement("li");

    // Create h1
    const h1 = document.createElement("h1");
    h1.textContent = post.title;

    // Create p
    const p = document.createElement("p");
    p.textContent = post.body;

    // Append h1 and p to li
    li.appendChild(h1);
    li.appendChild(p);

    // Append li to ul
    postList.appendChild(li);
  });
}

// Fetch posts
async function fetchPosts() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const posts = await response.json();

    displayPosts(posts);

  } catch (error) {
    console.error(error);
  }
}

// Call function
fetchPosts();