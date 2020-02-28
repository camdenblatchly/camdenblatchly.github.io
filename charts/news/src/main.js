var news;

window.addEventListener('resize', function(){
  adapt();
}, true);

function adapt() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  d3.select(".site-container")
                    .attr("width", w)
                    .attr("height", h);

  d3.selectAll(".article-image")
            .style("width", (w/10) - 2 + "px")
            .style("height", (w/10) - 2 + "px")
              .style("top", function(d, i) {
                return getTop(i) + "px";
              })
              .style("left", function(d, i) {
                return getLeft(i) + "px";
              });
}

function getTop(i) {

  var w = window.innerWidth;
  var tile_height = w/10;

  if (i < 10)
    return 0 * tile_height;
  else if (i < 20) {
    return 1 * tile_height;
  }
  else if (i < 30) {
    return 2 * tile_height;
  }
  else if (i < 40) {
    return 3 * tile_height;
  }
  else if (i < 50) {
    return 4 * tile_height;
  }
  else if (i < 60) {
    return 5 * tile_height;
  }
  else if (i < 70) {
    return 6 * tile_height;
  }
  else if (i < 80) {
    return 7 * tile_height;
  }
  else if (i < 90) {
    return 8 * tile_height;
  }
  else {
    return 9 * tile_height;
  }
}


function getLeft(i) {

  var w = window.innerWidth;
  var tile_width = w/10;

  return (i % 10) * tile_width;

}

function getNews() {


  var url = 'http://newsapi.org/v2/everything?' +
            'q=climate&' +
            'sortBy=popularity&' +
            'pageSize=100&' +
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

      var new_rows = [10, 20, 30, 40, 50, 60, 70, 80, 90]

      var divs = body.selectAll("articles")
          .data(news.articles)
          .enter()
          .append("a")
            .attr("class", "article-image")
            .attr("href", function(d) {
              return d.url;
            })
            .attr("target", "_blank")
            .style("width", (w/10) - 2 + "px")
            .style("height", (w/10) - 2 + "px")
            .style("top", function(d, i) {
              return getTop(i) + "px";
            })
            .style("left", function(d, i) {
              return getLeft(i) + "px";
            })
            .style("margin", "1px")
            .style("background-image", function(d) {
              var value = "url(" + d.urlToImage + ")";

              return value;
            })
            .on('mouseover', function(d) {
                /*
                d3.select(this)
                  .html(d.title)
                  .style("background", "lightgrey");
                  */

                var hover_tile = d3.select(this);

                hover_tile.select('div')
                  .style('display', 'block');

            })
            .on('mouseout', function(d) {
              var hover_tile = d3.select(this);

                hover_tile.select('div')
                  .style('display', 'none');
            });

        console.log(w/10);
        var info_panels = divs.append("div")
                            .attr("width", 300 + "px")
                            .attr("height", 300 + "px")
                            .style("background-color", "orange")
                            .style('display', 'none')
                            .html(function(d) {
                              console.log(d);
                              return d.title;
                            });
            

      })
}
