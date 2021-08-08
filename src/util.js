const words = [
    "Great success",
    "User engagement",
    "Kodiak",
    "Huge kudos to X",
    "Suboptimal",
    "Learning experience ",
    "Personalized learning",
    "Super excited ",
    "Funnel",
    "OKRs",
    "Highest company priority ",
    "It’s only a test",
    "Operate like a startup",
    "Keeping the momentum",
    "The results look promising",
    "Initial signals",
    "Can’t wait to share results ",
    "Significant increase ",
    "High quality content",
    "Keep product consistent ",
    "Data driven ",
    "Glorious X team",
    "Allocate resources ",
    "Alignment between X and Y",
    "Happy to announce"
];


// To randomize the Array 
const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// Get A Random Words
export const shuffleData = shuffle(words).reduce(
    (data, value, index) => ({ ...data, [index]: value }),
    {}
);
