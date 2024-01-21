let teamRepository = (function() {
    // An empty user list
    let team = [];
  
    let modalContainer = document.querySelector('#modal-container');
  
    // REST OF CODE
    function showModal(title, text, img) {
      // Clear all existing modal content
      modalContainer.innerHTML = '';
  
      let modal = document.createElement('div');
      modal.classList.add('modal');
  
      // Add the new modal content
      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'Close';
      closeButtonElement.addEventListener('click', hideModal);
  
      let titleElement = document.createElement('h1');
      titleElement.innerText = title;
  
      let contentElement = document.createElement('p');
      contentElement.innerText = text;
  
      let imageElement = document.createElement("img");
      imageElement.setAttribute("src", img);
      imageElement.setAttribute("width", "304");
      imageElement.setAttribute("height", "228");
      imageElement.setAttribute("alt", "The team logo");
  
      modal.appendChild(closeButtonElement);
      modal.appendChild(titleElement);
      modal.appendChild(contentElement);
      modal.appendChild(imageElement);
      modalContainer.appendChild(modal);
  
      modalContainer.classList.add('is-visible');
    }
  
    function hideModal() {
      modalContainer.classList.remove('is-visible');
    }
  
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();
      }
    });
  
    modalContainer.addEventListener('click', (e) => {
      // Since this is also triggered when clicking INSIDE the modal container,
      // We only want to close if the user clicks directly on the overlay
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });
  
    function add(item) {
      team.push(item);
    }
  
    // return all users
    function getAll() {
      return team;
    }
  
    // add a list of buttons to the array
    function addListItem(item) {
      let teamList = document.querySelector('.team-list');
      let listItem = document.createElement('li');
      let button = document.createElement('button');
      button.innerText = item.name;
      button.classList.add('button-custom');
      listItem.appendChild(button);
      teamList.appendChild(listItem);
  
      button.addEventListener('click', function() {
        showDetails(item);
      });
    }
  
    function showDetails(item) {
      showModal(item.name, item.name + " had played  " + item.points + " games this season, and scored a total of " + item.goals + " goals.", item.logo)
    }
  
    // THE RETURN STATEMENT HERE
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
    };
  
  })();
  
  teamRepository.add({ name: 'Manchester City', points: 93, goals: 99, logo: "img/mc.png" });
  teamRepository.add({ name: 'Liverpool', points: 92, goals: 94, logo: "img/liver.jpg" });
  teamRepository.add({ name: 'Chelsea', points: 74, goals: 76, logo: "img/chelsea.png" });
  teamRepository.add({ name: 'TottenHam Hotspur', points: 71, goals: 69, logo: "img/tt.jpg" });
  teamRepository.add({ name: 'Arsenal', points: 69, goals: 61, logo: "img/arsenal-crest.png" });
  
  teamRepository.getAll().forEach(function(item) {
    teamRepository.addListItem(item);
  })