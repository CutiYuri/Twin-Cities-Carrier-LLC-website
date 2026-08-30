const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  // Honeypot check: real visitors never fill this hidden field in.
  // If it has a value, silently drop the submission like it succeeded.
  if (data['company-website']) {
    statusEl.textContent = 'Message sent!';
    form.reset();
    return;
  }

  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  statusEl.textContent = 'Sending...';

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      statusEl.textContent = 'Thanks — we\'ll be in touch shortly.';
      form.reset();
    } else {
      statusEl.textContent = 'Something went wrong. Please try again or call us directly.';
    }
  } catch (err) {
    statusEl.textContent = 'Something went wrong. Please try again or call us directly.';
  } finally {
    submitBtn.disabled = false;
  }
});
