Image Gallery Mobile App
This is a React Native mobile application that displays a gallery of recent images from Flickr. The app fetches images using the Flickr API and caches the images locally using AsyncStorage, allowing users to view the last cached images even when offline.

Features
Fetches recent images from Flickr's public API.
Caches image links using AsyncStorage to enable offline access.
Refreshes the view if the API response changes.
A clean and minimal user interface with a left navigation bar and a “Home” option.
Screenshots
(Add screenshots of the app here if available)

Requirements
Node.js >= 14.x
React Native CLI
Android Studio / Xcode (for emulators or real device testing)
Flickr API Key (already integrated in the code)
API Used
The app uses the following Flickr API:

API URL: https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s
This API returns a list of recent public photos from Flickr, along with small image URLs (url_s).

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/bultimistry/assignment.git
cd my-app
Install dependencies:

bash
Copy code
npm install
Start the application:

bash
Copy code
npx react-native run-android  # For Android
npx react-native run-ios      # For iOS
If you're using an emulator or a real device, ensure that the development server is running:

bash
Copy code
npx react-native start
How It Works
API Fetch: The app fetches recent images from the Flickr API on the homepage.

Image Caching: The app stores image URLs in local storage (using AsyncStorage). When the app is reopened offline, the cached images are loaded.

Image Refresh: If the API returns a new set of images (different from the cached ones), the images will be updated in the gallery, and the cache is refreshed.

Code Explanation
HomeScreen.js: This is the main screen of the app where the images are fetched and displayed. The images are cached using AsyncStorage and displayed using a FlatList.

Image Caching: The image URLs are cached locally to AsyncStorage so that users can see the last-viewed images if they open the app without an internet connection.

Potential Improvements
Add a pull-to-refresh functionality.
Add more detailed navigation and additional features like image search, categories, etc.
Implement error screens for a better user experience during API failures or network issues.
Troubleshooting
If you encounter any issues with API requests, ensure that your device/emulator has internet access.
If images don't display, check the console logs for any issues related to the API response or image URL loading.
License
This project is licensed under the MIT License - see the LICENSE file for details.
