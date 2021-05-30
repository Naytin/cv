import images from './image-imports'

export const projectInfo = [
    {
        id: 1,
        title: 'Social-network',
        endpoint: '/PortfolioInfo/Social-network',
        type: 'Social-network',
        date: ' - in progress',
        des: '',
        technologies: ['React','Redux','Thunk','axios', 'Rest API'],
        images: images.default,
        url: "https://github.com/Naytin/social-network"
    },
    {
        id: 2,
        title: 'Medical',
        endpoint: '/PortfolioInfo/Medical',
        type: 'Medical',
        date: '31.03.2020',
        des: '',
        technologies: ['HTML', 'CSS/SCSS', 'JavaScript'],
        images: images.medical,
        url: "https://naytin.github.io/Medical/"
    },
    {
        id: 3,
        title: 'photographer',
        endpoint: '/PortfolioInfo/photographer',
        type: 'Portfolio for Photographer',
        date: '19.04.2020',
        des: '\n' +
            'portfolio for photographer',
        technologies: ['HTML', 'CSS/SCSS', 'JavaScript', ],
        images: images.photographer,
        url: "https://naytin.github.io/Portfolio/"
    },
    {
        id: 4,
        title: 'weatherAPI',
        endpoint: '/PortfolioInfo/weatherAPI',
        type: 'weather App',
        date: '17.09.2020',
        des: 'simple APP for show you a weather in your city. \n' +
            'you can choose any city from the selection or write in the input ',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Rest API'],
        images: images.weatherApp,
        url: "https://naytin.github.io/weather-app/"
    },
    {
        id: 5,
        title: 'TODO',
        endpoint: '/PortfolioInfo/TODO',
        type: 'TODO',
        date: ' - in progress',
        des: '',
        technologies: ['React','Redux','Thunk','axios', 'Rest API', 'hooks'],
        images: images.default,
        url: "https://naytin.github.io/todolist"
    }
]