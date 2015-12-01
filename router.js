var Profile = require("./profile.js");

// Handle HTTP route GET / and POST /
function home(request, response) {
  if(request.url === "/") {
    // Show search
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    response.write("Search\n");
    response.end("Footer\n");
  }
}

// Handle HTTP route GET /:username
function user(request, response) {
  var username = request.url.replace("/", "");
  if(username.length > 0) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");

      //get JSON from Treehouse
      var studentProfile = new Profile(username);
      // on "end"
      studentProfile.on("end", function(profileJSON){
      // show profile

      // store the values which we need
      var values = {
        avatarUrl: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSOn.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      }

      // Simple response
        response.write(values.username + " has " + values.badges + " badges\n");
        response.end("Footer\n");
    });

    // on "error"
    studentProfile.on("error", function(error){
    // show error
    response.write(error.message + "\n");
    response.end('Footer\n');
    });

  }
}

module.exports.home = home;
module.exports.user = user;
