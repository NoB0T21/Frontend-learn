var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm_password').value) {
        document.getElementById('password').style.outlineColor = 'green';
        document.getElementById('confirm_password').style.outlineColor = 'green';
        document.getElementById('submit').disabled = false
    } else {
        document.getElementById('password').style.outlineColor = 'red';
        document.getElementById('confirm_password').style.outlineColor = 'red';
        document.getElementById('submit').disabled = true
    }
  }