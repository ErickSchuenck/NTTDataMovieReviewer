# NTTDataMovieReviewer
NTTDataMovieReviewer is a project made for NTT Data where you can get information about released movies. In this project, I used the following technologies in the frontend: React, Redux, and Sass.

Warning: The frontend of this project runs on http://localhost:3000/, while the backend runs on http://localhost:5000/, so please avoid port conflicts.

# Getting Started
Clone the following repositories:

Frontend: https://github.com/ErickSchuenck/NTTDataMovieReviewer.git
Backend: https://github.com/ErickSchuenck/NTTbackend.git
Use the cd command to enter inside both the front and the backend folder using 2 terminals.
Use the npm i command on each terminal to install dependencies, and npm start to initiate.

# Common errors
There is a bug in windows where after installing the dependancies in react with npm i and starting the project with npm start for the first time you will be presented with the following message: ERROR in Plugin "react" was conflicted between "package.json » eslint-config-react-app »(...)
If this happens just open the package.json and type control+s to save the file, then the error disappears.

# How to Use
Type the name of the movie you want to get information about in the search bar and click the search button. The default movie is Whiplash, which is my favorite movie. 😉

# Restrictions
Since this project uses the OMDb API, usage is restricted to 1000 requests/day.

# Author
Erick Schuenck F Mokdeci - 08/03/2023
