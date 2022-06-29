import Communication from './Communication';
import config from '../config';
const ContactsService = {

    loadUsers(dispatch) {
        dispatch({
            type: 'LOAD_CONTACTS',
            payload: null
        })
        Communication.getMethod(config.endPoints.users).then(res=>res.json()).then(users => {
            //console.log(users.json())
                dispatch({
                    type: 'GET_CONTACTS',
                    payload: users
                })
            })
            .catch(() => {
                dispatch({
                    type: 'ERROR_CONTACTS',
                    payload: null
                })
            })
            .finally(() => {

            })
    }

}
export default ContactsService;