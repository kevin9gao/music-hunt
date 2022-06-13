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

## Notable Features

### Dynamic Upvotes and Comments

All users can see how many upvotes a song has, in addition to the comments other users have made on the song. Logged in users have the ability to add a single upvote to a song, and make and edit comments. Upvotes and comments are done dynamically, so a page refresh is not needed to display the updated upvote counts and new comments.


_Songs Pug File:_

![/songs Pug File](./images/songs%20pug%20AAW13.png)

Javascript is incorporated into the Pug file HTML so that, upon refresh of the /songs page, the total number of upvotes for a certain song is fetched from the _songUpvotes_ table and set to the innerHTML of the upvotes button. The _hasBeenClicked_ property checks whether the currently logged in user has clicked the upvote button on that specific song or not.


_Songs Route:_

![/songs Route File](./images/songs%20router%20AAW13.png)

In the `GET /songs` route: songs, songUpvotes, and a count variable are passed into the _songs_ pug file. In the `POST /upvotes/:id` route, when a POST request is made to /upvotes/:id, an upvote is either created or destroyed in the database, based on whether an upvote currently exists for that song or not.

_Song Upvotes Frontend Javascript (Dynamic Factor):_

![Song Upvotes Frontend Javascript](./images/songs-upvotes%20frontend%20javascript%20AAW13.png)

In the frontend JavaScript, an event listener is added to the upvote button. Upon click, a POST request is made to `/songs/upvote/${songId}` using a fetch call. If the upvote button has been clicked for the currently logged in user, the click status is set to false, and vice versa. This whole process allows for dynamic upvoting of a song. Dynamic posting and editing of comments is done with a similar process.


### Listing Songs From A Specific Artists Within Their Row On /users Page

In the `/users` page, a list of users is displayed using a table, and a column for 5 of each user's uploaded tracks (if they have uploaded any tracks) exists.

![Users Page](./images/users%20page%20AAW13.png)

_Users Route:_

![Users Route](./images/users%20route%20AAW13.png)

The `GET /users` route handler here is quite simple, just rendering the _users_ Pug file, passing in a list of all users, with their associated songs in the Songs table.

_Users Pug:_

![Users Pug](./images/users%20pug%20AAW13.png)

In the _users_ Pug file, a column is created for listing all of the songs of a specific user _if they have uploaded any songs._ If they have, a JavaScript array.filter method is called upon the total list of songs that an artist has and the resulting 5 songs are displayed in the pug.
