
$("#searchButton").click(function(){

    var Data;
    let MovieInfo = $("input").val()
    $("input").val('') // clear the vaule after search 
    $.get("https://www.omdbapi.com/?s="+MovieInfo+"&apikey=fe8df824", 
    function(RawData){
    var RawString =JSON.stringify(RawData);
    Data =JSON.parse(RawString);
    console.log(Data);


let moviesArray = Data.Search
for (var i = 0; i < moviesArray.length ; i++) {
    //console.log(i);


  var title = Data.Search[i].Title;
  var year = Data.Search[i].Year; 
  var imdburl="https://www.imdb.com/title/"+Data.Search[i].imdbID+"/";
  var posterurl =Data.Search[i].Poster;

  $('#answer').append("<h1>"+title+"</h1><br> <img src= '"+posterurl+"'><br><p> Year Released:"+year+"</p> <br> <p> IMDB page: <a href='"+imdburl+"'target='_blank'>"+imdburl+"</a></p>"); 
 

}
  }); }
)

