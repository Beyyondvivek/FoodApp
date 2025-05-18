// export interface Comment {
//   id: string;
//   user: string;
//   text: string;
//   likes: number;
//   isLiked: boolean;
// }

export interface Reel {
  id: string;
  video: any;
  title: string;
  likes: number;
  comments: Comment[];
  user: string;
  isLiked: boolean;
}

export type VideoPlayerProps = {
  source: any;
  paused: boolean;
};

export interface Activity {
  name: string;
  caloriesPerHour: number; // Approx calories burned per hour for an average person
}
export interface UserProfile {
  age: number;
  weight: number; // in kg
  height: number; // in cm
  sex: 'male' | 'female';
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'veryActive';
}

export interface Recipe {
  id: number;
  name: string;
  image: string; // Filename of the local image (e.g., "recipe1.png")
  description: string;
  ingredients: string[]; // List of ingredients
  instructions: string[]; // Step-by-step instructions
  carbs: number; // in grams
  nutrients: string[]; // Array of nutrient benefits
  calories: number; // in kcal
  protein: number; // in grams
  fat: number; // in grams
}

export interface Comment {
  id: number;
  user: string;
  text: string;
  timestamp: string;
  likes: number; // Number of likes on the comment
  isLiked: boolean; // Whether the current user has liked it
}
