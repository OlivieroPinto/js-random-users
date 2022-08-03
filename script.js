const addBtn = document.getElementById('add');
addBtn.addEventListener('click', addPerson);

function addPerson() {
    console.log('Creazione di una persona');
    axios
      .get('https://randomuser.me/api')
      .then(function (response) {
        console.log(response);
        createImg(response.data.results[0]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  function createImg(user) {
    let image = document.createElement('img'); // <img>
    image.src = user.picture.medium;
    image.className = 'img-fluid';
    let div = document.createElement('div');
    div.className = 'col-4 text-center';
    div.appendChild(image);

    let divUser = document.createElement('div');
    divUser.innerHTML = createNomeCompleto(user);
    div.appendChild(divUser);

    document.getElementById('gallery').appendChild(div);
  }

  function createNomeCompleto(user){
    return user.name.title + " " + user.name.first + " " + user.name.last; 
  }