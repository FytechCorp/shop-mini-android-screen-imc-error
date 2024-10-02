import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {
  Box,
  ImageMultipleChoice,
} from '@shopify/shop-minis-platform-sdk'
import {useState} from 'react'

function HomeScreen() {
  const [selectedImage, setSelectedImage] = useState<number>(0)

  return (
    <Box
      flex={1}
    >
      <ImageMultipleChoice
        snap
        imageSize={300}
        choices={[
          {
            label: 'Option 1',
            value: 1,
            imageUrl: 'https://picsum.photos/200'
          },
          {
            label: 'Option 2',
            value: 2,
            imageUrl: 'https://picsum.photos/200'
          }
        ]}
        onChoiceSelected={(index) => setSelectedImage(index)}
        selectedIndexes={[selectedImage]}
      />
    </Box>
  )
}

const Stack = createNativeStackNavigator()

export function App() {
  return (
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
