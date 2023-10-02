// ambilDataUserAsync.js

async function ambilDataUserAsync() {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        const data = { username: 'johnDoe', email: 'johndoe@example.com' };
        resolve(data);
      }, 1000); 
    });
  }
  
  export default ambilDataUserAsync;
  