import {combineReducers, createStore} from 'redux'
import {skillsReducer} from "./reducers/skillsReducer";
import {projectsReducer} from "./reducers/projectsReducer";
import {loadingReducer} from "./reducers/loadingReducer";

const reducers = combineReducers({
    skills: skillsReducer,
    projects: projectsReducer,
    loading: loadingReducer,
})

export const store = createStore(reducers)