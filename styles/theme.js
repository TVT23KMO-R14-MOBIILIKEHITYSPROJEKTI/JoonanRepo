import { Colors } from './Colors'

import {
    MD3LightTheme as DefaultTheme,
    PaperProvider,
} from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
        //...DefaultTheme.colors,
        ...Colors.colors,
    },
};

export default theme;