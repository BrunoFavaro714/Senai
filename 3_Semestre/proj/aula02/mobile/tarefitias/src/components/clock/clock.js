import { useState } from 'react';
import { View } from 'react-native';
import TimePicker from 'react-time-picker';

const Clock = () => {
    const [time, setTime] = useState('00:00');

    return(
        <TimePicker disableClock={true} onChange={setTime} value={time} />
    )
}

export default Clock;