const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out.');
  }
};

const deleteUser = async () => {
  const response = await fetch('/api/users/delete', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if(response.ok) {
    document.location.replace('/login');
  }
  else {
    alert('Failed to delete!')
  }
}

document.querySelector('#logout').addEventListener('click', logout);
document.querySelector('#delete').addEventListener('click', deleteUser);
