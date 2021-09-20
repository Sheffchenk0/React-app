const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_INPUT_VALUE = "UPDATE-INPUT-VALUE";
const UPDATE_CURRENT_DIALOG_ID = "UPDATE-CURRENT-DIALOG-ID";
const UPDATE_SEARCH_DIALOG_VALUE = "UPDATE_SEARCH_DIALOG_VALUE";

let initialState = {
    dialogs: [
        { userId: 0, fullname: "Nikita Shevchenko" },
        { userId: 1, fullname: "Ivan Shevchenko" },
        { userId: 2, fullname: "1 2" },
        { userId: 3, fullname: "Nikita Sh111evchenko" },
    ],
    messages: [
    {
        dialogId: 0,
        messages: [
            {
                messageId: 0,
                isOwn: 1,
                messageText: "1",
            },
            { messageId: 1, isOwn: 1, messageText: "1" },
        ],
    },
    {
        dialogId: 1,
        messages: [
            {
                messageId: 0,
                isOwn: 1,
                messageText: "2",
            },
            { messageId: 1, isOwn: 1, messageText: "2" },
            { messageId: 2, isOwn: 0, messageText: " 2" },
        ],
    },
    {
        dialogId: 2,
        messages: [
            {
                messageId: 0,
                isOwn: 1,
                messageText: "New Message! MessageNew MessageNew Message",
            },
            { messageId: 1, isOwn: 1, messageText: "1" },
            { messageId: 2, isOwn: 0, messageText: " Message!" },
            { messageId: 3, isOwn: 0, messageText: "New 546gd!" },
        ],
    },
    {
        dialogId: 3,
        messages: [
            {
                messageId: 0,
                isOwn: 1,
                messageText: "New Message! MessageNew MessageNew Message",
            },
            { messageId: 1, isOwn: 1, messageText: "1" },
            { messageId: 2, isOwn: 0, messageText: " Message!" },
            { messageId: 3, isOwn: 0, messageText: "New 546gd!" },
            { messageId: 4, isOwn: 1, messageText: "23!" },
        ],
    },
    ],
    searchDialogValue: "",
    inputValue: "",
    currentDialogId: 0,
};

let dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let stateCopy = {
                ...state,
                inputValue:"",
                messages: [...state.messages],                         
            };
            let newMsg = {
                messageId: 5,
                isOwn: 1,
                messageText: state.inputValue,
            };
            stateCopy.messages[state.currentDialogId].messages.push(newMsg); 
            return stateCopy;
        case UPDATE_INPUT_VALUE:
            return{
                ...state,
                inputValue: action.text,
            }
        case UPDATE_CURRENT_DIALOG_ID:
            return{
                ...state,
                currentDialogId: action.id,
            }
        case UPDATE_SEARCH_DIALOG_VALUE:
            return{
                ...state,
                searchDialogValue: action.text,
            }
        default:
            return state
    }
};

export const addMessageAC = () => ({
    type: ADD_MESSAGE,
});
export const updateInputValueAC = (text) => ({
    type: UPDATE_INPUT_VALUE,
    text: text,
});
export const updateCurrentDialogIdAC = (id) => ({
    type: UPDATE_CURRENT_DIALOG_ID,
    id: id,
});
export const updateSearchDialogValueAC = (text) => ({
    type: UPDATE_SEARCH_DIALOG_VALUE,
    text: text,
});

export default dialogsPageReducer;
