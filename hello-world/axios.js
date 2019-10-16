axios.get('https://api.github.com/users/diegoeg')
minhaPromise()
  .then(function(response) {
     console.log(response); 
  })
  .catch(function(error) {
     console.warn(error) 
  });