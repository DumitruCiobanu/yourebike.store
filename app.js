function openModal(event) {
    event.preventDefault();
    var modal = new bootstrap.Modal(document.getElementById("consultModal4"));
    modal.show();
  }

  document.getElementById("contactUsLink").addEventListener("click", openModal);
  document.getElementById("contactUsLink2").addEventListener("click", openModal);

