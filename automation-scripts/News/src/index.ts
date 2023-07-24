import fs from "fs";

interface Article {
  title: string;
  description: string;
  url: string;
}

async function fetchNews(apiKey: string): Promise<Article[]> {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=tesla&from=2023-06-23&sortBy=publishedAt&apiKey=${apiKey}`
  );
  const data = await response.json();
  return data.articles.map((article: any) => ({
    title: article.title,
    description: article.description,
    url: article.url,
  }));
}

async function saveDataToFile(data: any, filename: string): Promise<void> {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, JSON.stringify(data), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

async function main() {
  const apiKey = process.env.NEWS_API_KEY;
  if (!apiKey) {
    throw new Error("NEWS_API_KEY environment variable not set");
  }
  const articles = await fetchNews(apiKey);
  await saveDataToFile(articles, "data.json");
  console.log("Data saved to data.json");
}

main().catch((err) => {
  console.error(err);
});
