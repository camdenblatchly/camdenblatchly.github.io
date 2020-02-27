var news;

window.addEventListener('resize', function(){
  console.log("TESTING");
  adapt();
}, true);

function adapt() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  d3.select(".site-container")
                    .attr("width", w)
                    .attr("height", h);

  d3.selectAll("article-image")
      .style("width", (w/3) - 26 + "px")
      .style("height", h/2 + "px");
}

function getNews() {


  var url = 'http://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=810bc4fe4b3647a9b4490cee1793528c';
  var req = new Request(url);
  fetch(req)
      .then(response => response.json())
      .then((json) => {
        console.log("This is json ", json);
        news = json;

        //for (var i = 0; i < news.totalResults; i++) {}

      var w = window.innerWidth;
      var h = window.innerHeight;
  
      var body = d3.select(".site-container")
                    .attr("width", w)
                    .attr("height", h);


      var divs = body.selectAll("articles")
          .data(news.articles)
          .enter()
          .append("div")
            .attr("class", "article-image")
            .style("width", (w/3) - 26 + "px")
            .style("height", h/2 + "px")
            .style("margin", "10px")
            .style("background-image", function(d) {
              console.log(d.urlToImage, d.title, );
              var value = "url(" + d.urlToImage + ")";

              return value;
            });
            

      })
}
