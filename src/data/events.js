import child from '../images/childSupport.png';
import refuge from '../images/refuseShelter.png';
import food from '../images/foodCharity.png';
import cloth from '../images/clothSwap.png';
import water from '../images/cleanWater.png';
import education from '../images/goodEducation.png';
import books from '../images/newBooks.png';
import study from '../images/studyGroup.png';
import birdhouse from '../images/birdHouse.png';
import library from '../images/libraryBooks.png';
import seminar from '../images/driveSafety.png';
import music from '../images/musicLessons.png';
import vote from '../images/voteRegister.png';
import park from '../images/clearnPark.png';
import ithelp from '../images/ITHelp.png';
import shelter from '../images/animalShelter.png';
import babysit from '../images/babySit.png';
import stuffed from '../images/stuffedAnimals.png';
import supplies from '../images/schoolSuffiles.png';

const events = [
    {
        name: 'Child Support',
        image: child
    },
    {
        name: 'Refuge Shelter',
        image: refuge
    },
    {
        name: 'Food Charity',
        image: food
    },
    {
        name: 'Host a clothing swap',
        image: cloth
    },
    {
        name: 'Host a river clean-up',
        image: child
    },
    {
        name: 'Clean water for children',
        image: water
    },
    {
        name: 'Good education',
        image: education
    },
    {
        name: 'New books for children',
        image: books
    },
    {
        name: 'Host a study group',
        image: study
    },
    {
        name: 'Build birdhouses for your neighbors',
        image: birdhouse
    },
    {
        name: 'Organize books at the library',
        image: library
    },
    {
        name: 'Give a seminar on driving safety',
        image: seminar
    },
    {
        name: 'Give free music lessons',
        image: music
    },
    {
        name: 'Teach people how to register to vote',
        image: vote
    },
    {
        name: 'Clean up your local park.',
        image: park
    },
    {
        name: 'Give IT help to local adults',
        image: ithelp
    },
    {
        name: 'Foster a shelter animal',
        image: shelter
    },
    {
        name: 'Babysit during PTA meetings',
        image: babysit
    },
    {
        name: 'Collect stuffed animals',
        image: stuffed
    },
    {
        name: 'Collect school supplies',
        image: supplies
    }
];

const colors = ['FFBD3E', 'FF7044', '3F90FC', '421FCF'];

let eventsData = []

events.map(event => {
    const tempEvent = event;
    const randomNum = Math.floor(Math.random() * 10)
    tempEvent.id = events.indexOf(event);
    if (randomNum < 3) tempEvent.color = colors[0];
    else if (randomNum < 5) tempEvent.color = colors[1];
    else if (randomNum < 8) tempEvent.color = colors[2];
    else tempEvent.color = colors[3];
    eventsData.push(tempEvent);
    return 0;
})

    for (let i = eventsData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = eventsData[i];
        eventsData[i] = eventsData[j];
        eventsData[j] = temp;
    }

export default eventsData;