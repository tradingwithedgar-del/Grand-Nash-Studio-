/* Grand Nash — inquiry form.
   Submits inline (no page jump) to a form-to-email relay so requests land
   in your inbox. Change ENDPOINT_EMAIL to switch where they go. */
(function () {
  var form = document.getElementById('inquiry');
  if (!form) return;
  var status = document.getElementById('form-status');
  var ENDPOINT_EMAIL = 'hello@grandnashstudio.com';
  var ENDPOINT = 'https://formsubmit.co/ajax/' + ENDPOINT_EMAIL;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (form._honey && form._honey.value) return;            // spam trap
    if (!form.checkValidity()) { form.reportValidity(); return; }

    var btn = form.querySelector('button[type=submit]');
    var original = btn.textContent;
    btn.disabled = true; btn.textContent = 'Sending…';
    status.textContent = ''; status.className = 'form-status';

    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    })
      .then(function (r) { return r.json(); })
      .then(function () {
        form.reset();
        status.textContent = "Got it. I'll get back to you shortly with a demo and next steps.";
        status.className = 'form-status ok';
      })
      .catch(function () {
        status.innerHTML = 'Something went wrong on send. Email me directly at ' +
          '<a href="mailto:' + ENDPOINT_EMAIL + '">' + ENDPOINT_EMAIL + '</a>.';
        status.className = 'form-status err';
      })
      .then(function () { btn.disabled = false; btn.textContent = original; });
  });

  // when a "see a free demo" link is used, drop the cursor into the form
  document.querySelectorAll('a[href="#start"]').forEach(function (a) {
    a.addEventListener('click', function () {
      setTimeout(function () {
        var n = document.getElementById('f-name');
        if (n) n.focus({ preventScroll: true });
      }, 650);
    });
  });
})();
