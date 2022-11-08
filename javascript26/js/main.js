// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables, and Async/Await

// abstract into functions

// maybe from a form
const getDataFromForm = () => {
  const requestObj = {
    firstname: "Bruce",
    lastname: "Lee",
    categories: ["nerdy"]
  };
  return requestObj;
}

const buildRequestUrl = (requestData) => {
  return `https://api.icndb.com/jokes/random?firstName=${requestData.firstname}&lastname=${requestData.lastname}&limitTo=${requestData.categories}`;
}

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value.joke;
  postJokeToPage(joke);
}

const postJokeToPage = (joke) => {
  console.log(joke);
}

// Procedural "workflow" function
const processJokeRequest = async () => {
  const requestData = getDataFromForm();
  const requestUrl = buildRequestUrl(requestData);
  await requestJoke(requestUrl);
  console.log("finished!");
}

processJokeRequest();
