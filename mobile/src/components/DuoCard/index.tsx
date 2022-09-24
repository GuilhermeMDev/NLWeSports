import { View } from 'react-native';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

export interface DuoCardProps{
    id: string;
    hourEnd: string;
    hourStart: string;
    name: string;
    useVoiceChanel: boolean;
    weekDays: string[];
    yearsPlaying: number;
}

interface Props {
    data: DuoCardProps;
}


export function DuoCard({data}: Props) {
    
    return (
        <View style={styles.container}>

            <DuoInfo
                label="Nome"
                value={data.name}
            />

            <DuoInfo
                label="Nome"
                value={`${data.yearsPlaying} anos`}
            />

            <DuoInfo
                label="Nome"
                value={`${data.weekDays.length} dias`}
            />
            
            <DuoInfo
                label="Nome"
                value="Guilherme Magioni"
                colorValue="#984"
            />
        </View>
    );
}