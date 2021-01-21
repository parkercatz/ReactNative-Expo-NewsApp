const initialState = {
  clips: [],
};

// stateの初期値を設定
// actionのtypeごとに定義
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // actionで渡ってきたclipを追加
    case 'ADD_CLIP':
      return {
        // 前回のstateを展開
        ...state,
        // 前回のstateを展開して新しいclipを末尾に追加
        clips: [...state.clips, action.clip],
      };
    case 'DELETE_CLIP':
      return {
        ...state,
        // actionに渡ってきたclipだけを削除して新たなclips配列を返す
        // actionのclipとURLが一致したら除く
        clips: state.clips.filter((clip) => clip.url !== action.clip.url),
      };
    default:
      return state;
  }
};

export default reducer;
