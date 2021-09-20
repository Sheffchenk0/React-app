import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { postId: 0, postText: "New Message!" },
        { postId: 1, postText: "1" },
        { postId: 2, postText: " Message!" },
        { postId: 3, postText: "New 546gd!" },
        { postId: 4, postText: "23!" },
        { postId: 5, postText: "12321 Message!" },
        { postId: 6, postText: "New fsafse!" },
        { postId: 7, postText: "New Message!" },
        { postId: 8, postText: "sefeee Message!" },
        { postId: 9, postText: "New 32423!" },
      ],
      textareaValue: "111111111111111111111111111111111111",
    },
    dialogsPage: {
      dialogs: [
        { userId: 1, fullname: "Ivan Shevchenko" },
        { userId: 2, fullname: "1 2" },
        { userId: 3, fullname: "Nikita Sh111evchenko" },
      ],
      messages: [
        {
          dialogId: 0,
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
      searchDialogValue:'',
      inputValue: "",
      currentDialogId:0,
    },
  },
  _rerender() {
    console.log();
  },
  // _addPost() {
  //   let newPost = {
  //     postId: 5,
  //     postText: this.state.profilePage.textareaValue,
  //   };
  //   this.state.profilePage.posts.push(newPost);
  //   this.state.profilePage.textareaValue = "";
  //   this.rerender(this);
  // },
  // _updateTextareaValue(text) {
  //   this.state.profilePage.textareaValue = text;
  //   this.rerender(this);
  // },
  // _addMessage() {
  //   let newMessage = {
  //     messageId: 0,
  //     isOwn: 1,
  //     messageText: this.state.dialogsPage.inputValue,
  //   };
  //   this.state.dialogsPage.messages[this.state.dialogsPage.currentDialogId].messages.push(newMessage);
  //   this.state.dialogsPage.inputValue = "";
  //   this.rerender(this);
  // },
  // _updateInputValue(text) {
  //   this.state.dialogsPage.inputValue = text;
  //   this.rerender(this);
  // },
  // _updateCurrentDialogId(id) {
  //   this.state.dialogsPage.currentDialogId = id;
  //   this.rerender(this);
  // },
  // _updateSearchDialogValue(text) {
  //   this.state.dialogsPage.searchDialogValue = text;
  //   this.rerender(this);
  // },

  subscribe(func) {
    this._rerender = func;
  },
  dispatch(action) {
    profilePageReducer(this._state.profilePage, action);
    dialogsPageReducer(this._state.dialogsPage, action);
    
    this._rerender(this);
    // if (action.type === ADD_POST) {
    //   return this._addPost();
    // }
    // if (action.type === UPDATE_TEXTAREA_VALUE) {
    //   return this._updateTextareaValue(action.text);
    // }
    // if (action.type === ADD_MESSAGE) {
    //   return this._addMessage();
    // }
    // if (action.type === UPDATE_INPUT_VALUE) {
    //   return this._updateInputValue(action.text);
    // }
    // if (action.type === UPDATE_CURRENT_DIALOG_ID) {
    //     return this._updateCurrentDialogId(action.id);
    // }
    // if (action.type === UPDATE_SEARCH_DIALOG_VALUE) {
    //     return this._updateSearchDialogValue(action.text);
    // }
  },

  get state() {
    return this._state;
  },
};

export default store;
