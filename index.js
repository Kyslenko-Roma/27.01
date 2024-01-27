const nameUser = prompt('Enter your name');

if (nameUser === '' && nameUser === null) {
    console.log('Error');
} else {
    console.log(`${nameUser}`);

    const ageUser = prompt('Enter your age');

    if (ageUser >= 1 && ageUser <= 150) {
        console.log(`Your age is ${+ageUser}`)

        const messageUser = prompt('Enter your message');

        if (ageUser < 18 && messageUser === 'fuck') {
            console.log('Не лайся');
        } else if (messageUser !== '' && messageUser !== null) {
            console.log(`Your message is ${messageUser}`);
        } else {
            console.log('error');
        }
    }
}