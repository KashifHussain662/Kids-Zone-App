import React, {useState} from 'react';
import {Switch} from 'react-native';

const SwitchButton = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <Switch
      trackColor={{
        false: 'rgba(0, 9, 31, 0.1)',
        true: 'rgba(24, 91, 255, 1)',
      }}
      thumbColor={
        isEnabled ? 'rgba(247, 247, 247, 1)' : 'rgba(247, 247, 247, 1)'
      }
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default SwitchButton;
