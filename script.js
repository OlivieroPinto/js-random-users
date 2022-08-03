const addBtn = document.getElementById('add');
addBtn.addEventListener('click', addPerson);

function addPersomn() {
    console.log('Creazione di una persona');
    axios
      .get('https://randomuser.me/api')
      .then(function (results) {
        console.log(results);
        const imgUrl = results.picture.medium;
        const title = results.name.title;
        const name = results.name.first;
        const surname = results.name.last;
        createNomeCompleto(title, name, surname);
        createImg(imgUrl);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  function createImg(url) {
    let image = document.createElement('img'); // <img>
    image.src = url;
    image.className = 'img-fluid';
    let div = document.createElement('div');
    div.className = 'col-4';
    div.appendChild(image);
    document.getElementById('gallery').appendChild(div);
  }

  function createNomeCompleto(title, name, surname){
    
  }