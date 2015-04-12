NEIGHBORHOOD MAP APP
--------------------

Project Overview:

I developed a single page application featuring a map of my neighborhood. You will find a history of my neighborhood narrated by Mr. Spock (the late Leonard Nimoy). Be sure to check it out. Then you will see a list of my favorite places and more things to discover.

How does the app work?

You start by double clicking the myNeighborhood.html file. Then you watch a video by the late Leonard Nimoy about the history of the neighborhood. The video is embedded in the app. The source is Youtube. Next, you scroll down and check out my neighborhood. The app also works on mobile phones and tablets, because of the responsive design. 

The app has interactivity: you can filter items already listed, you can search for items that you are looking for, like gas, food, coffee, etc.; and even drag an icon and place it on a location and let people know what you found interesting. The app uses Knockout for data binding of the locations already listed on the map, and uses Google Map API autocomplete function to search nearby locations.

Filter search results by typing a query in the search bar just on the left of the first map you see. The list contains list of favorite locations, and you can start type a letter (e.g. 'v') and you will see the list being filtered. Clicking on a marker opens an info window with a picture and a short fact about the location. There is also a special icon that you can drag and place on a location of your liking. 

At the bottom there is another map. Enter a location in the search bar at the bottom of the screen. Type coffee, and you find get a list of coffee places in my neighborhood. Pick a place from the list, and the map will take you there.

The Project:
 
This application uses the Google Map API. The first step is to visit the site at https://developers.google.com/maps/. Familiarize yourself with the Google map and its many, many features. 

Next, I recommend you visit YouTube for a great tutorial on how to build your own map using the Google Map API. This is Google Map API tutorial 101 at https://www.youtube.com/watch?v=ZE8ODPL2VPI&list=PLrtRjIOGYRowjKK0zR53AdAJzN7tqIV9H&index=1.

Once you learn how to add various components into a map, visit knockoujs.com to learn about knockout. Knockout is a JavaScript library that helps you to create rich, responsive display with a simple underlying data model. Any time you have sections of UI that update dynamically, KO can help you implement it more simply and maintainably. The tutorials are great! However, I am not sure if KO is the best solution for working with Google API for this project, but it is a good, simple way to learn data binding. 

Also, I used Materialize CSS framework. I like the colors and the responsive design and am just trying out. Let me know what you think of this framework. You can find more information at http://materializecss.com/.

What APIs are used?

As mentioned above, I used Google Map API. In addition I used Flickr's API and YouTube embedded video. I could have used more APIs, but for the specific project I didn't see the need for more APIs. I used more assets from the Google Map API. 

In addition to the simple map, I also used other assets, which I am keeping it as a surprise for the intripid adventurer, to discover on their own what they find on the map. I recommend you go and double click on the file myNeighborhood.html and come and discover my neighborhood!

------------------------------------------------------------------------------

List of resources:
1. Google Map API. https://developers.google.com/maps/
2. Youtube tutorial. https://www.youtube.com/watch?v=ZE8ODPL2VPI&list=PLrtRjIOGYRowjKK0zR53AdAJzN7tqIV9H&index=1.
3. MaterializeCSS. http://materializecss.com/
4. Knockout. www.knockoujs.com
5. Google Map Autocomplete. http://materializecss.com/
6. Flickr photos using JQuery. http://api.jquery.com/jquery.getjson/
7. Google Map Infowindow. https://developers.google.com/maps/documentation/javascript/infowindows
8. Google Map Data Layer: Earthquake data. https://developers.google.com/maps/documentation/javascript/examples/layer-data-quakes
9. Other interesting resources: Wikipedia API, Yelp API, FlightAware API (costs dollars though).