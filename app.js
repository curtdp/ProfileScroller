const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingfor: "female",
    location: "Boston MA",
    image: "https://randomuser.me/api/portraits/men/49.jpg"
  },
  {
    name: "Jane Smith",
    age: 26,
    gender: "female",
    lookingfor: "male",
    location: "Miami FL",
    image: "https://randomuser.me/api/portraits/women/49.jpg"
  },
  {
    name: "William Johnson",
    age: 34,
    gender: "male",
    lookingfor: "female",
    location: "Lynn MA",
    image: "https://randomuser.me/api/portraits/men/34.jpg"
  }
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next event

document.getElementById("next").addEventListener("click", nextProfile); //#endregion

// Next profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Gender: ${currentProfile.gender}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
      <li class="list-group-item">Preference: ${currentProfile.gender}</li>
      <li class="list-group-item">Looking For: ${currentProfile.lookingfor}</li>
    </ul>`;
    document.getElementById("imageDisplay").innerHTML = `
    <img src="${currentProfile.image}">`;
  } else {
    // No more profiles
    window.location.reload();
  }
}

function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function() {
      return nextIndex < profiles.length
        ? {
            value: profiles[nextIndex++],
            done: false
          }
        : {
            done: true
          };
    }
  };
}
