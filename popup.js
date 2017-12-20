$(document).ready(function () {
  $('#user-login').on('submit', function(e) {
    e.preventDefault();
    var email = $('#email').val();
    var password = $('#password').val();

    chrome.storage.sync.set({
      'email': email,
      'password': password
    }, function() {
      $('#user-login').hide();
      $('#container').append(`
          <h1>
            Your settings have been saved!
          </h1>
        `)
    })

  chrome.storage.local.get(null, function(items){
    if (items === undefined){
      alert("no local data");
    }
    else {
      chrome.tabs.create({
        'url': 'https://upassbc.translink.ca/'
      });
    }
  });

  })
})
