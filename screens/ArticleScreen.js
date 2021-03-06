import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { useDispatch, useSelector } from 'react-redux';
import { addClip, deleteClip } from '../store/actions/user';
import ClipButton from '../components/ClipButton';

export default ArticleScreen = ({ route }) => {
  const { article } = route.params;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { clips } = user;

  // clipのON/OFF判定
  const isCliped = () => {
    return clips.some((clip) => clip.url === article.url);
  };

  // clipButtonが押されたときの処理
  const toggleCliped = () => {
    if (isCliped()) {
      dispatch(deleteClip({ clip: article }));
    } else {
      dispatch(addClip({ clip: article }));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ClipButton onPress={toggleCliped} enabled={isCliped()} />
      <WebView source={{ uri: article.url }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
