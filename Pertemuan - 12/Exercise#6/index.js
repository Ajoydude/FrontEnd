import helloWorld from "./helloWorld.js";

const messages = async () => {
    let msg = await helloWorld()
    console.log(msg);
};

messages();

import ambilDataUser from './ambilDataUser.js';

ambilDataUser();

import ambilDataUserAsync from './ambilDataUserAsync.js';

const main  = async () => {
    try {
        const userData = await ambilDataUserAsync();
        console.log('Data user:', userData);
    } catch (error) {
        console.log('Failed to acquire');
    }
}

main();