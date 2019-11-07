import images from './images';
import strings from './strings';
import { OptionType, MachineType } from '../components/Page/MachineConfigure/MachineType'

export const jsonRes = {
    categories: [
        {name: strings.categories.configurator, image: images.categories.hekto_logo},
        {name: strings.categories.settings, image: images.categories.settings},
        {name: strings.categories.usedMachines, image: images.categories.usedMachines},
        {name: strings.categories.service, image: images.categories.service},
        {name: strings.categories.mediaLibrary, image: images.categories.mediaLibrary},
        {name: strings.categories.offerManagement, image: images.categories.offerManagement},
        {name: strings.categories.userManagement, image: images.categories.userManagement},
        {name: strings.categories.priceLists, image: images.categories.priceLists}
    ],
    trailers: [
        {name: strings.trailers.dreiseitenkipper, image: images.trailers.dreiseitenkipper},
        {name: strings.trailers.dumptruck, image: images.trailers.dumptruck},
        {name: strings.trailers.hooklift, image: images.trailers.hooklift},
        {name: strings.trailers.pusher, image: images.trailers.pusher},
        {name: strings.trailers.platformtrailer, image: images.trailers.platformtrailer},
        {name: strings.trailers.frontend, image: images.trailers.frontend},
    ],
    suspensions: [
        {name: strings.suspensions.singleAxle, image: images.suspensions.singleAxle},
        {name: strings.suspensions.twoAxles, image: images.suspensions.twoAxles},
        {name: strings.suspensions.threeAxles, image: images.suspensions.threeAxles},
        {name: strings.suspensions.tandem, image: images.suspensions.tandem}
    ]
}

const content = {
    name: 'MainScreen',
    step1: {
        stepNumber: 1,
        title: 'Welche Art von Anhänger interessiert Sie?',
        subtitle: 'Bitte treffen Sie eine Auswahl.',
        design: MachineType,
        data: [
            {
                name: strings.trailers.dreiseitenkipper, 
                image: images.trailers.dreiseitenkipper,
            },
            {
                name: strings.trailers.dumptruck, 
                image: images.trailers.dumptruck,
            },
            {
                name: strings.trailers.hooklift, 
                image: images.trailers.hooklift
            },
            {
                name: strings.trailers.pusher, 
                image: images.trailers.pusher
            },
            {
                name: strings.trailers.platformtrailer, 
                image: images.trailers.platformtrailer
            },
            {
                name: strings.trailers.frontend, 
                image: images.trailers.frontend
            },
        ]
    },
    step2: {
        stepNumber: 2,
        title: 'Welche Art von Fahrwerk benötigen Sie?',
        subtitle: 'Bitte treffen Sie eine Auswahl.',
        design: MachineType,
        data: [
            {
                name: strings.suspensions.singleAxle, 
                image: images.suspensions.singleAxle
            },
            {
                name: strings.suspensions.twoAxles, 
                image: images.suspensions.twoAxles
            },
            {
                name: strings.suspensions.threeAxles, 
                image: images.suspensions.threeAxles
            },
            {
                name: strings.suspensions.tandem,
                image: images.suspensions.tandem
            }
        ]
    },
    step3: {
        stepNumber: 3,
        title: 'Welches zulässiges Gesamtgewicht wird benötigt?',
        subtitle: 'Bitte treffen Sie eine Auswahl.',
        design: OptionType,
        data: [
            {name: '6 Tonnen'},
            {name: '8 Tonnen'},
            {name: '10 Tonnen'},
            {name: '14 Tonnen'},
            {name: '18 Tonnen'}
        ]
    },
    step4: {
        stepNumber: 4,
        title: 'Gibt es besondere Anforderungen an die Abmessungen?',
        subtitle: 'Bitte treffen Sie eine Auswahl.',
        design: OptionType,
        data: [
            {name: 'Ja'},
            {name: 'Nein'}
        ]
    },
    step5: {
        stepNumber: 5,
        title: 'Welches Bordwandhöhe wünschen Sie?',
        subtitle: 'Bitte treffen Sie eine Auswahl.',
        design: OptionType,
        data: [
            {name: '800 mm'},
            {name: '1.000 mm'},
            {name: '1.300 mm'},
            {name: '1.500 mm'},
            {name: '1.800 mm'},
        ],
        design: OptionType
    }
}

export default content;
