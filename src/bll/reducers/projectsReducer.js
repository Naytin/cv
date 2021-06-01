import {projectInfo} from "../../common/data/projectsData";
const LOAD_PROJECTS = 'PROJECTS/LOAD_PROJECTS'


const initialState = {
    projects: projectInfo
}

export const projectsReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_PROJECTS:
            return {...state}
        default:
            return state
    }
}

// export const loadProjects = () => ({type:LOAD_PROJECTS})