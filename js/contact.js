function contact(email) {
  var fname = document.getElementById("funame").value;
  var message = document.getElementById("ibox").value;
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (fname == null || fname == "" || fname.length < 3) {
    alert("Please enter your name");
    return false;
  }

  if (!regex.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  confirm("feed back noted");
}