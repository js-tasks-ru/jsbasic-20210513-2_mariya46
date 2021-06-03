function makeFriendsList(friends) {
  let list = document.createElement('ul');
  
  let listChild = friends
    .map((friends) => {
      return `<li>${friends.firstName}` + ` ${friends.lastName}</li>`;
    })
    .join('');
  
  list.innerHTML = listChild;

  return list;
}
