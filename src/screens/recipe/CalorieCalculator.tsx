/* eslint-disable radix */
/* eslint-disable @typescript-eslint/no-shadow */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {UserProfile, Activity} from '../feed/types';

const CalorieCalculatorScreen: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    age: 25,
    weight: 70,
    height: 170,
    sex: 'male',
    activityLevel: 'sedentary',
  });
  const [calories, setCalories] = useState<number | null>(null);

  const calculateCalories = () => {
    let bmr: number;
    if (profile.sex === 'male') {
      bmr = 10 * profile.weight + 6.25 * profile.height - 5 * profile.age + 5;
    } else {
      bmr = 10 * profile.weight + 6.25 * profile.height - 5 * profile.age - 161;
    }

    const activityFactors = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    };
    const tdee = bmr * activityFactors[profile.activityLevel];
    setCalories(Math.round(tdee));
  };

  const suggestActivities = (calories: number) => {
    const activities: Activity[] = [
      {name: 'Walking (3 mph)', caloriesPerHour: 250},
      {name: 'Cycling (moderate, 12-14 mph)', caloriesPerHour: 500},
      {name: 'Running (6 mph)', caloriesPerHour: 700},
      {name: 'Swimming (moderate)', caloriesPerHour: 400},
      {name: 'Yoga', caloriesPerHour: 240},
    ];

    const suggestions = activities
      .filter(activity => activity.caloriesPerHour <= calories)
      .map(activity => ({
        ...activity,
        duration: Math.ceil((calories * 0.3) / activity.caloriesPerHour), // Suggest 30% of daily calories
      }));
    return suggestions;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Calorie Calculator</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Age"
        value={profile.age.toString()}
        onChangeText={text =>
          setProfile({...profile, age: parseInt(text) || 0})
        }
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Weight (kg)"
        value={profile.weight.toString()}
        onChangeText={text =>
          setProfile({...profile, weight: parseFloat(text) || 0})
        }
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Height (cm)"
        value={profile.height.toString()}
        onChangeText={text =>
          setProfile({...profile, height: parseFloat(text) || 0})
        }
      />

      <Picker
        selectedValue={profile.sex}
        style={styles.picker}
        onValueChange={itemValue =>
          setProfile({...profile, sex: itemValue as 'male' | 'female'})
        }>
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>

      <Picker
        selectedValue={profile.activityLevel}
        style={styles.picker}
        onValueChange={itemValue =>
          setProfile({...profile, activityLevel: itemValue as any})
        }>
        <Picker.Item
          label="Sedentary (little or no exercise)"
          value="sedentary"
        />
        <Picker.Item
          label="Light (light exercise 1-3 days/week)"
          value="light"
        />
        <Picker.Item
          label="Moderate (moderate exercise 3-5 days/week)"
          value="moderate"
        />
        <Picker.Item
          label="Active (hard exercise 6-7 days/week)"
          value="active"
        />
        <Picker.Item
          label="Very Active (very hard exercise & physical job)"
          value="veryActive"
        />
      </Picker>

      <TouchableOpacity style={styles.button} onPress={calculateCalories}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>

      {calories && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>
            Your daily calorie need: {calories} kcal
          </Text>
          <Text style={styles.subtitle}>
            Suggested Activities (30% of calories):
          </Text>
          {suggestActivities(calories).map((activity, index) => (
            <Text key={index} style={styles.activityText}>
              - {activity.name} for {activity.duration} hours (~
              {Math.round(activity.caloriesPerHour * activity.duration)} kcal)
            </Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default CalorieCalculatorScreen;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  picker: {
    width: '80%',
    height: 50,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  button: {
    backgroundColor: '#6A5ACD',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  resultContainer: {
    width: '80%',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  resultText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
    marginBottom: 10,
  },
  activityText: {
    fontSize: 14,
    color: '#444',
    marginBottom: 5,
  },
});
