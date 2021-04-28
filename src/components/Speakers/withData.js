const withData = (maxSpeakersToShow) => (Component) => {
    const speakers = [
        { imageSrc: 'speaker-component-1124', name: 'Douglas Crockford'},
        { imageSrc: 'speaker-component-1530', name: 'Tamara Baker'},
        { imageSrc: 'speaker-component-10803', name: 'Eugene Chuvyrov'}
    ];

    return function() {
        const limitSpeakers = speakers.slice(0, maxSpeakersToShow);
        return <Component speakers={limitSpeakers} />;
    };
};

export default withData;

//Doing this as alternative to lambda example above
// function withData(maxSpeakersToShow){
//     return function (Component) {

//         const speakers = [
//             { imageSrc: 'speaker-component-1124', name: 'Douglas Crockford'},
//             { imageSrc: 'speaker-component-1530', name: 'Tamara Baker'},
//             { imageSrc: 'speaker-component-10803', name: 'Eugene Chuvyrov'}
//         ];
    
//         return function() {
//             const limitSpeakers = speakers.slice(0, maxSpeakersToShow);
//             return <Component speakers={limitSpeakers} />;
//         };
//     }
// }

// export default withData;