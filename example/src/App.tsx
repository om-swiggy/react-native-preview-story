import { StoryView } from 'react-native-preview-story';
import { Button, SafeAreaView, StatusBar } from 'react-native';
import styles from '../../src/Styled';
import React from 'react';

export default function App() {
  const [visible, setVisible] = React.useState(true);
  return (
    <SafeAreaView style={styles.flex1}>
      <StatusBar />
      {visible ? (
        <StoryView
          stories={[
            {
              url: 'https://media.giphy.com/media/3o7TKz9b4v8l5ZjGxi/giphy.gif',
              type: 'image',
              id: 3,
              duration: 5,
            },
            {
              url: 'https://media.giphy.com/media/3o7TKz9b4v8l5ZjGxi/giphy.gif',
              type: 'image',
              id: 4,
              duration: 5,
            },
            {
              url: 'https://media.giphy.com/media/3o7TKz9b4v8l5ZjGxi/giphy.gif',
              type: 'image',
              id: 5,
              duration: 5,
            },
            {
              type: 'component',
              component: <Button title="Hello" onPress={() => {}} />,
              id: 1,
              duration: 5,
            },
          ]}
          visible
          onComplete={() => {
            setVisible(false);
            console.log('close');
          }}
          noControls
        />
      ) : (
        <Button title="Show Story" onPress={() => setVisible(true)} />
      )}
    </SafeAreaView>
  );
}
