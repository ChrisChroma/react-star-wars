const BASE_URL = "https://swapi.dev/api/starships/";

export function getAllStarships() {
  return fetch(`${BASE_URL}`, { mode: "cors" }).then((res) => res.json());
}

export function getStarshipDetails(id) {
  return fetch(`${BASE_URL}${id}`, { mode: "cors" }).then((res) => res.json());
}

const pilotUrls = [
  "https://swapi.co/api/people/13/",
  "https://swapi.co/api/people/14/",
  "https://swapi.co/api/people/25/",
  "https://swapi.co/api/people/31/",
];

async function getPilots(urls) {
  const promises = urls.map((url) => fetch(url).then((res) => res.json()));
  const pilotObjects = await Promise.all(promises);
  return pilotObjects;
}

getPilots(pilotUrls).then((pilots) => console.log(pilots));
