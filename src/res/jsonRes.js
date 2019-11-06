import images from './images';
import strings from './strings';

const jsonRes = {
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

export default jsonRes;
