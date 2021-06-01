import {combineReducers, createStore} from 'redux'
import {skillsReducer} from "./reducers/skillsReducer";
import {projectsReducer} from "./reducers/projectsReducer";

const reducers = combineReducers({
    skills: skillsReducer,
    projects: projectsReducer,
})

export const store = createStore(reducers)