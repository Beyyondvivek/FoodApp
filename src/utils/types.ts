export interface Chef {
  id: number;
  name: string;
  image: string;
  title: string;
  description: string;
  rating: number;
  isBookmarked: boolean;
  likes: number; // e.g., 26,000
  difficulty: 'Easy' | 'Hard' | 'Normal'; // Difficulty level
}
export interface Recipe {
  id: number;
  name: string;
  image: string; // Filename of the local image (e.g., "recipe1.png")
  description: string;
  carbs: number; // in grams
  nutrients: string[]; // Array of nutrient benefits
  calories: number; // in kcal
  protein: number; // in grams
  fat: number; // in grams
}

export interface Profile {
  id: number;
  name: string;
  email: string;
  avatar: string; // Filename of the local image (e.g., "avatar1.png")
  dietaryPreferences: string[];
  notificationsEnabled: boolean;
}
