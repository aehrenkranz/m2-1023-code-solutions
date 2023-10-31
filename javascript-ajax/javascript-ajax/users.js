const userList = document.querySelector('#user-list');
function getUserInfo() {
  const xhr1 = new XMLHttpRequest();
  xhr1.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr1.responseType = 'json';
  xhr1.addEventListener('load', () => {
    console.log(xhr1.status);
    console.log(xhr1.response);
    xhr1.response.forEach((element) => {
      const li = document.createElement('li');
      li.textContent = element.name;
      userList.appendChild(li);
    });
  });
  xhr1.send();
}

getUserInfo();
