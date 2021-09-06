let jsondata = [];

const app = async () => {
  document.body.innerHTML = `<div class="loader text-center">
    <span class="span"></span>
</div>`;
  try {
    const fetching = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=3fbcb81669864b94af12e1432ae54e46"
    );
    let data = await fetching.json();
    jsondata = data;
    getData(jsondata.articles);
  } catch (error) {
    console.log(error);
  }
};

const getData = data => {
  const finallData = data
    .map((item, key) => {
      console.log(item);
      return `<div class="card border w-50 mt-3 mx-auto" style="width: 18rem;">
  <img src=${item.urlToImage} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.description}</p>
    <a href=${item.url} target="_blank" class="btn btn-primary">Read More</a>
  </div>
</div>`;
    })
    .join("");
  document.body.innerHTML = finallData;
};

app();
