

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {Button, Text} from 'react-native';
import { View } from 'react-native';
import { StackParamsList } from './StackNavigationDemo';





type Screen1Props = StackNavigationProp<StackParamsList,'Screen1'>;
const Screen1:React.FC=()=>{
    
    const navigation = useNavigation<Screen1Props>();
    return(
        <View>

        <Text>Screen1</Text>
        <Button title='Go to Screen2' onPress={()=>navigation.navigate('Screen2',{itemId:1000})}/>
        </View>
    )
}

export default Screen1;