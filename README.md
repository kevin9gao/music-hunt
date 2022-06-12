# music-hunt

_For a live version of Music Hunt, click here: [Music Hunt](https://music--hunt.herokuapp.com/)._

Music Hunt is a product hunt clone that allows users to discover and interact with their favorite songs. Users may sign up, log in, log out, browse and discover songs, discover new artists, and upload their own songs.

_For a link to the Music Hunt wiki, click here: [Wiki](https://github.com/kevin9gao/music-hunt/wiki)_

## Features and Implementation

### Routes and Navbar

_Express Based Router_

Music Hunt is an express based app that handles all route requests using express-based route handlers. Most routes may be accessed using the persistent navbar, which is present on most pages except for the Sign-Up page.

_Frontend and Backend Interaction_

All of Music Hunt's HTML is done through Pug, which is a JavaScript framework that allows for features that make use of JavaScript, such as for loops, within the HTML. Frontend features such as dynamic comments and upvotes are done through vanilla JavaScript using event listeners.

### Authentication

_Features Available Without Logging In_

Music Hunt has a few features available to all users, whether or not they are logged in. All users may access the home page, which contains a list of the most trending songs, and may view the names of the artists who made them, as well as how many upvotes each song has. All users may also view the `/songs` page, and may demo listen to a snippet of the song, however users must sign up or log in before submitting upvotes on these songs (both on the home page and the songs page). All users may view a list of users through the users tab on the navbar, as well as the "About" tab, which contains information about the developers. A user that is not logged in also has access to a "Log In" and "Sign Up" form, accessible through the navbar.

_Features Available To Logged In Users_

A logged in user has access to a few more features than a standard user. Firstly, logged in users can upload their own songs through a tab on the navbar. Secondly, logged in users have access to their profile page, and may edit their profile through the navbar. Finally, logged in users may submit upvotes on songs, as well as comment on songs. These features are dynamic and will update the page with their upvotes and comments in real time.


7. Production README
* Discussion of two features that show off the team's technical abilities
* Discussion of both challenges faced and the way the team solved them
* Code snippets to highlight the best code
