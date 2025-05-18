import {useNavigation} from '@react-navigation/native';

export default function useNavigate() {
  const navigation = useNavigation();

  return {

    // gotoHomeScreen(params: {
    //   inventoryId: string;
    //   productId: string;
    //   sku: string;
    // }) {
    //   navigation.push('HomeScreen', params);
    // },
    gotoHomeScreen() {
      navigation.push('HomeScreen');
    },
    gotoLoginScreen() {
      navigation.push('LoginScreen');
    },
    gotoProfileScreen() {
      navigation.push('ProfileScreen');
    },
    gotoRecipeScreen() {
      navigation.push('RecipeScreen');
    },
    gotoNotificationScreen() {
      navigation.push('NotificationScreen');
    },
    gotoRecipePage() {
      navigation.push('RecipePage');
    },
  };
}
