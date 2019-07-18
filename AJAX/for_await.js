// for await of 

const urls = [
    "http://jsonplaceholder.typicode.com/users",
    "http://jsonplaceholder.typicode.com/posts",
    "http://jsonplaceholder.typicode.com/albums"
  ];
  
  const loopThroughUrls = urls => {
    for (url of urls) {
      console.log(url)
    }
  }
  
  const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
      const data = await request.json();
      console.log(data);
    }
  }
  // use await always before a promisse stuff