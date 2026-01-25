


export function getPhoto(q) {
  const BASE_URL = "https://pixabay.com/api/"
  const PARAMS = new URLSearchParams({
    key: "54125236-595e0c257ca7120b96734fe1b",
     q: q,
     image_type: "photo",
    orientation:  "horizontal",
      safesearch: true
  })

  const url = `${BASE_URL}?${PARAMS}`
  return fetch(url).then(res=>res.json())
}