console.log("This is index.js file");

// Initialize the news parameters
let apiKey = "2eeaaece4be74fc5bd27ed86ca240977";
let source = "country=us";

// Grab the news container
let newsAccordion = document.getElementById("newsAccordion");

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
    "GET",
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=2eeaaece4be74fc5bd27ed86ca240977`,
    true
);
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=us&apiKey=77d2623a3fab4d9db4cbfceac94e265f`, true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHTML = "";
        articles.forEach(function (element, index) {
            // console.log(element, index);
            let news = `<div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"
                                aria-expanded="true" aria-controls="collapse${index}"><b>Breaking News ${index + 1} :</b>${element["title"]}</button>
                            </h2>
                            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                                data-bs-parent="#newsAccordion">
                                <div class="accordion-body">${element["content"]}. <a href='${element["url"]}' target='_main'>Read more</a></div>
                            </div>
                        </div>`;
            newsHTML += news;
        });
        newsAccordion.innerHTML = newsHTML;
    } else {
        console.log("Some error occured");
    }
};

xhr.send();
