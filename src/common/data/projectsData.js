import {projectImages} from './images-import'

export const projectInfo = [
    {
        id: 1,
        title: 'TODO',
        endpoint: '/PortfolioInfo/TODO',
        type: 'TODO',
        date: ' - in progress',
        des: '',
        technologies: ['React','Redux','Thunk','axios', 'Rest API', 'hooks'],
        images: projectImages.default,
        url: "https://naytin.github.io/todolist"
    },
    {
        id: 2,
        title: 'photographer',
        endpoint: '/PortfolioInfo/photographer',
        type: 'Portfolio for Photographer',
        date: '19.04.2020',
        des: '\n' +
            'portfolio for photographer',
        technologies: ['HTML', 'CSS/SCSS', 'JavaScript', ],
        images: projectImages.photographer,
        url: "https://naytin.github.io/Portfolio/"
    },
    {
        id: 3,
        title: 'weatherAPI',
        endpoint: '/PortfolioInfo/weatherAPI',
        type: 'weather App',
        date: '17.09.2020',
        des: 'simple APP for show you a weather in your city. \n' +
            'you can choose any city from the selection or write in the input ',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Rest API'],
        images: projectImages.weatherApp,
        url: "https://naytin.github.io/weather-app/"
    },
    {
        id: 4,
        title: 'Social-network',
        endpoint: '/PortfolioInfo/Social-network',
        type: 'Social-network',
        date: ' - in progress',
        des: '',
        technologies: ['React','Redux','Thunk','axios', 'Rest API'],
        images: projectImages.default,
        url: "https://github.com/Naytin/social-network"
    },
    {
        id: 5,
        title: 'Medical',
        endpoint: '/PortfolioInfo/Medical',
        type: 'Medical',
        date: '31.03.2020',
        des: '',
        technologies: ['HTML', 'CSS/SCSS', 'JavaScript'],
        images: projectImages.medical,
        url: "https://naytin.github.io/Medical/"
    },
    {
        id: 6,
        title: 'LOOM - landing page',
        endpoint: '/PortfolioInfo/landing',
        type: 'landing',
        date: '15.03.2020',
        des: '',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        images: projectImages.loom,
        url: "https://naytin.github.io/Studio"
    }
]