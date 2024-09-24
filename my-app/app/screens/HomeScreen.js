import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { ActivityIndicator, FlatList, View, Image, Text, Alert } from 'react-native';

const FLICKR_API = ' https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s';

const HomeScreen = () => { 
  const [images, setImages] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchImages = async () => {
      try {
    
        const cachedImages = await AsyncStorage.getItem('cachedImages');
        
        if (cachedImages) {
          console.log('Using cached images.');
          setImages(JSON.parse(cachedImages));
          setLoading(false);
        } else {
          console.log('No cached images found.');
        }

        
        const response = await axios.get(FLICKR_API);

      
        console.log('Raw API Response:', response.data);

        
        if (response.status === 200 && response.data && response.data.photos) {
          const newImages = response.data.photos.photo;

          console.log('New Images:', newImages);

          
          if (JSON.stringify(newImages) !== JSON.stringify(images)) {
            setImages(newImages);
            await AsyncStorage.setItem('cachedImages', JSON.stringify(newImages));
          }
        } else {
          console.error('Invalid API response:', response.data);
          Alert.alert('Error', 'Unable to fetch images from Flickr. Check the API response.');
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching images:', error.message);
        Alert.alert('Error', 'Failed to fetch images from the API.');
        setLoading(false);
      }
    };

    fetchImages();
  }, [images]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          item.url_s ? (
            <Image
              source={{ uri: item.url_s }}
              style={{ width: 200, height: 200, margin: 10 }}
              resizeMode="contain"
            />
          ) : (
            <Text>No image available</Text>
          )
        )}
      />
    </View>
  );
};

export default HomeScreen;
