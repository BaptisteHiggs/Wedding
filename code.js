window.addEventListener("load", function() {
  const form = document.getElementById('rsvpform');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      window.location.href = 'Received.html';
    })
  });
});
