// Remplacez cette URL par l'API que vous souhaitez utiliser
const apiUrl = "https://newsapi.org/v2/top-headlines?country=fr&pageSize=5&apiKey=109cae79d48c42e888bf9eba48ad34c8";


async function fetchNews() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status === "ok") {
      displayNews(data.articles);
    } else {
      console.error("Erreur lors de la récupération des actualités:", data.message);
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des actualités:", error);
  }
}

function displayNews(articles) {
  const newsTicker = document.getElementById("newsTicker");

  articles.forEach(article => {
    const listItem = document.createElement("li");
    listItem.classList.add("headline");

    const link = document.createElement("a");
    link.href = article.url;
    link.textContent = `${article.title} - ${article.source.name}`;
    link.target = "_blank";
    link.style.color = "white";
    link.style.textDecoration = "none";

    listItem.appendChild(link);
    newsTicker.appendChild(listItem);
  });
}

fetchNews();