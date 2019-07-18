async function fetchUsers() {
  const resp = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  console.log(data);
}

const urls = [
  "http://jsonplaceholder.typicode.com/users",
  "http://jsonplaceholder.typicode.com/posts",
  "http://jsonplaceholder.typicode.com/albums"
];

const getData = async function() {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(url => fetch(url).then(response => response.json()))
    );
    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
  } catch (err) {
    console.log("oops", err);
  }
};
