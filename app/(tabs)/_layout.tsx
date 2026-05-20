
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs 
        screenOptions={{
            tabBarActiveTintColor: '#3dff87ff',
            headerStyle: 
            { backgroundColor: '#25292e',

             },
            headerShadowVisible: false,
            headerTintColor: '#fff',
            tabBarStyle: { 
            backgroundColor: '#25292e', 
            },
        }}
        >
              <Tabs.Screen 
            name="index" 
            options={{ 
                title: 'Início', 
                tabBarIcon: ({ color, focused, }) => (
                    <MaterialCommunityIcons name={focused ? 'home-circle' : 'home-circle-outline'} size={24} color={color} />
                ),
            }}
          />
            <Tabs.Screen 
            name="about" 
            options={{
                title: 'Sobre',
                tabBarIcon: ({ color, focused, }) => (
                    <AntDesign name={focused ? 'info-circle' : 'info'} size={24} color={color} />
                ),
            }}
          />
           <Tabs.Screen 
            name="toDoList" 
            options={{
                title: 'Nadadores',
                tabBarIcon: ({ color, focused, }) => (
                    <Ionicons name={focused ? 'list-circle' : 'list-circle-outline'} size={24} color={color} />
                ),
            }}
          />
           <Tabs.Screen 
            name="training" 
            options={{
                title: 'Treinamento',
                tabBarIcon: ({ color, focused, }) => (
                    <FontAwesome5 name={focused ? 'swimming-pool' : 'swimmer'} size={24} color={color} />
                ),
            }}
          />
        </Tabs>
        );
}       

   
        