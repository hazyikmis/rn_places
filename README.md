expo install expo-image-picker

expo install expo-permissions

expo install expo-file-system

expo install expo-sqlite

expo install expo-location

npm install react-native-dotenv

# Google: Maps Static API

https://developers.google.com/maps/documentation/maps-static/overview

The Maps Static API lets you embed a Google Maps image on your web page without requiring JavaScript or any dynamic page loading. The Maps Static API service creates your map based on URL parameters sent through a standard HTTP request and returns the map as an image you can display on your web page. You don't need to do anything "special" to get this image to show up on the page. No JavaScript is required. All we needed to do was create a URL, and place it within an <img> tag. You can place a Google Static Maps anywhere on your webpage where you can place an image.

```
https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
&markers=color:red%7Clabel:C%7C40.718217,-73.998284
&key=YOUR_API_KEY
```
