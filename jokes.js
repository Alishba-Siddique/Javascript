const URL = 'https://icanhazdadjoke.com';
const jokes = document.getElementById('jokes');
const btn = document.getElementById('btn');

const getRandomJokes = async () => {
  const res = await fetch(URL, {
    headers: {
      Accept: 'application/json',
       'User-Agent': 'MyJokesApp (https://mywebsite.com)'
    },
  });

  if(!res.ok){
    jokes.innerText = 'Failed to fetch a joke. Please try again later.';
    return;
  }
  console.log(res);
  let data = await res.json();
  jokes.value = data.joke;
};

btn.addEventListener('click', getRandomJokes);


function copyJokes() {
    var copyText = document.getElementById("jokes");
    copyText.select();
    copyText.setSelectionRange(0, 999);
    document.execCommand("copy");
}