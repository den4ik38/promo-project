
/* eslint-disable global-require */
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// i18n
//     .use(initReactI18next)
//     .init({
//         lng: 'en',
//         fallbackLng: 'en',

//         debug: false,

//         interpolation: {
//             escapeValue: false, // not needed for react!!
//         },

//         resources: { en: { translations: {} } },
//     });

// export default i18n;


import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const ns = ['translation', 'main', 'about', 'profile'];
const supportedLngs = ['ru', 'en'];
const resources = ns.reduce((acc, n) => {
    supportedLngs.forEach((lng) => {
        // @ts-ignore
        if (!acc[lng]) acc[lng] = {};
        // @ts-ignore
        acc[lng] = {
            // @ts-ignore
            ...acc[lng],
            [n]: require(`../../../../public/locales/${lng}/${n}.json`),
        };
    });
    return acc;
}, {});

i18n.use(initReactI18next).init({
    lng: 'ru',
    fallbackLng: 'ru',
    debug: false,
    defaultNS: 'translation',
    ns,

    interpolation: {
        escapeValue: false, // not needed for react!!
    },
    supportedLngs,
    resources,
});

export default i18n;