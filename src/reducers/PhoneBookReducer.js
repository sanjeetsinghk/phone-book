const initialState = {
    contactList : [],
    loading : true,
    error: false,
  };

function PhoneBookReducer(state = initialState, action) {
     
    switch (action.type) {
        case 'LOAD_CONTACTS':
            return { ...state, contactList:[], error: false, loading: true }
        case 'GET_CONTACTS':
          return { ...state, contactList: action.payload, error: false, loading: false }
        case 'SAVE_CONTACTS':
            return { ...state, contactList:[...state.contactList, action.payload], error: false, loading: false }
        case 'ERROR_CONTACTS':
          return { ...state, contactList: [], error: true, loading: false }
          default:          
        return state;
    }
  };
  export default PhoneBookReducer;
  export const AddContactFormData=(data)=>({
      type:"SAVE_CONTACTS",payload:data
  })