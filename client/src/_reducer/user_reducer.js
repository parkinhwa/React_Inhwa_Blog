import {
	LOGIN_USER,
	REGISTER_USER,
	AUTH_USER,
	ADD_POSTING, 
	DELETE_POSTING
} from '../_actions/types'

const initialState = [
    {
        id: 1,
        title: ' This is First Post',
        description: '포스팅 1',
    }
]

export default function (state = initialState, action){
	switch(action.type){
		case LOGIN_USER:
			return {
				...state,
				loginSuccess: action.payload,
			}
		case REGISTER_USER:
			return {
				...state,
				register: action.payload
			}
		case AUTH_USER:
				return {
					...state,
					userData: action.payload
				}
		case ADD_POSTING:
			return state.concat(action.post);
		case DELETE_POSTING:
			return state.filter(post => post.id !== action.id)	
		default:
			return {
				...state,
				action: false,
			}
	}
}