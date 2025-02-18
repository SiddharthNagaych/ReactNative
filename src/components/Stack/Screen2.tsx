
import { StackNavigationProp } from '@react-navigation/stack';
import {Text} from 'react-native';
import { StackParamsList } from './StackNavigationDemo';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { View } from 'react-native';


type Screen2Props = StackNavigationProp<StackParamsList,'Screen2'>;

type Screen2Params=RouteProp<StackParamsList,'Screen2'>;



const Screen2:React.FC=()=>{
    const navigation = useNavigation<Screen2Props>();
    const route=useRoute<Screen2Params>();
    return(
        <View>

        <Text>Screen2</Text>
        <Text>Params are {route.params?.itemId}</Text>
        </View>
    )
}

export default Screen2;