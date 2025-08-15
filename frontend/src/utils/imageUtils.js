import { assets } from "../assets/frontend_assets/assets";

// Function to get the correct image from assets based on image name
export const getImageFromAssets = (imageName) => {
  // Extract the image number from the filename (e.g., "food_1.png" -> "1")
  const imageNumber = imageName.replace('food_', '').replace('.png', '');
  
  // Map of image numbers to actual imported images
  const imageMap = {
    '1': assets.food_1, '2': assets.food_2, '3': assets.food_3, '4': assets.food_4,
    '5': assets.food_5, '6': assets.food_6, '7': assets.food_7, '8': assets.food_8,
    '9': assets.food_9, '10': assets.food_10, '11': assets.food_11, '12': assets.food_12,
    '13': assets.food_13, '14': assets.food_14, '15': assets.food_15, '16': assets.food_16,
    '17': assets.food_17, '18': assets.food_18, '19': assets.food_19, '20': assets.food_20,
    '21': assets.food_21, '22': assets.food_22, '23': assets.food_23, '24': assets.food_24,
    '25': assets.food_25, '26': assets.food_26, '27': assets.food_27, '28': assets.food_28,
    '29': assets.food_29, '30': assets.food_30, '31': assets.food_31, '32': assets.food_32
  };
  
  return imageMap[imageNumber] || assets.food_1; // fallback to food_1 if not found
};
