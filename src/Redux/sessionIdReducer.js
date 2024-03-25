// sessionIdReducer.js

const initialState = ''; // 初始状态为空字符串

const sessionIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SESSION_ID':
            return action.payload; // 设置会话 ID 为 action 的 payload
        default:
            return state;
    }
};

export default sessionIdReducer;
