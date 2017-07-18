$(document).ready(function() {
  var url = 'https://www.reddit.com/r/goldenretrievers/.json'

  $.get(url).done(function(redditInfo) { //this calls to get the data from the server
    var title = redditInfo.data.children[0].data.title

    payload = redditInfo.data.children;//this stores that data from the server in a variable
    //console.log(redditInfo.data.children);
    payload.forEach(function(i){//this prints out the data from the server onto our webpage.
      $('.container')
      .append('<div class="post"><p class = "title">' + i.data.title +
      '</p><p class = "author">Posted by: ' + i.data.author + ' to /r/' + i.data.subreddit +
      '</p><p class = "score">Score: +' + i.data.score + '<br><img src=' + i.data.thumbnail + '></div>');
      //this function is spaced for my working window, not to organize it
    })
  });
});
