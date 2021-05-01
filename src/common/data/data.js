import images from './imports'

export const projectInfo = [
    {
        id: 1,
        title: 'Social-network',
        endpoint: '/PortfolioInfo/Social-network',
        type: 'Landing Page',
        des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus consectetur ducimus fuga\n' +
            '                        in, nemo saepe. Beatae, doloribus, ea et ex excepturi illum iste maiores modi, nemo quos soluta\n' +
            '                        totam.',
        technologies: ['React - UI','Redux - state management','Framer Motion - library for animation'],
        images: ["https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
            "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
            "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"],
        url: "https://naytin.github.io/Studio/"
    },
    {
        id: 2,
        title: 'Medical',
        endpoint: '/PortfolioInfo/Medical',
        type: 'Medical',
        date: '31.03.2020',
        des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus consectetur ducimus fuga\n' +
            '                        in, nemo saepe. Beatae, doloribus, ea et ex excepturi illum iste maiores modi, nemo quos soluta\n' +
            '                        totam.',
        technologies: ['React - UI','Redux - state man agement','Framer Motion - library for animation'],
        images: images.medical,
        url: "https://naytin.github.io/Medical/"
    },
    {
        id: 3,
        title: 'photographer',
        endpoint: '/PortfolioInfo/photographer',
        type: 'Portfolio for Photographer',
        date: '19.04.2020',
        des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus consectetur ducimus fuga\n' +
            '                        in, nemo saepe. Beatae, doloribus, ea et ex excepturi illum iste maiores modi, nemo quos soluta\n' +
            '                        totam.',
        technologies: ['React - UI','Redux - state management','Framer Motion - library for animation'],
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
        technologies: ['HTML', 'CSS', 'JavaScript'],
        images: images.weatherApp,
        url: "https://naytin.github.io/weather-app/"
    }
]