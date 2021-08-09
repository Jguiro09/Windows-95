const save = async () => {
    const body = document.querySelector('#body').value.trim();

    const response = await fetch('/api/note', {
      method: 'PUT',
      body: JSON.stringify({ body }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to save note.');
    }
  };
  
  document.querySelector('#save').addEventListener('click', save);
  