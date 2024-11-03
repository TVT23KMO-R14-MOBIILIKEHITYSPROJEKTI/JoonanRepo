import { Colors } from './Colors'

import {
    MD3LightTheme as DefaultTheme,
    MD3DarkTheme,
    PaperProvider,
} from 'react-native-paper';


const useTheme = (isDarkTheme) => {
  
    const theme = isDarkTheme
      ? {
          ...MD3DarkTheme,
          colors: {
            ...MD3DarkTheme.colors,
            ...Colors.dark,  // Käytä dark-värit colors.js:stä
          },
        }
      : {
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            ...Colors.light,  // Käytä light-värit colors.js:stä
          },
        };
  
    return theme;
  };
  
  export default useTheme;