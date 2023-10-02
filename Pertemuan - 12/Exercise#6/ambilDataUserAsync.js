const ambilDataUserAsync = async () => {
    return new Promise((resolve) => {

      setTimeout(() => {
        const data = { statement: 'May you have a great day.' };
        resolve(data);
      }, 1000); 
    });
  }
  
export default ambilDataUserAsync;