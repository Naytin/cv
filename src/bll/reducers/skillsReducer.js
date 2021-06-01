import {skillsImages} from "../../common/data/images-import";
const LOAD_SKILLS = 'SKILLS/LOAD_SKILLS'


const initialState = {
    skills: [
        {skill: 'React', description: ['React/Redux','Thunk','Hooks'], icon: skillsImages.react},
        {skill: 'JavaScript', description: ['JavaScript','ES5/ES6'], icon: skillsImages.js},
        {skill: 'TypeScript', description: ['TypeScript'], icon: skillsImages.ts},
        {skill: 'HTML', description: ['HTML, I work with semantic tag and provide modern feature'], icon: skillsImages.html},
        {skill: 'CSS', description: ['CSS/SCSS'], icon: skillsImages.css},
        {skill: 'Git', description: ['GIT'], icon: skillsImages.git},
    ]
}

export const skillsReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_SKILLS:
            return {...state}
        default:
            return state
    }
}

// export const loadSkills = () => ({type:LOAD_SKILLS})