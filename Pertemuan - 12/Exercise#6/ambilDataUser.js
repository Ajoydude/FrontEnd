const ambilDataUser = () => {
    fetch("https://reqres.in/api/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default ambilDataUser;
    