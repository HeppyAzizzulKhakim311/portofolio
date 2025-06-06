function sendEmail() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('Mohon lengkapi semua field yang diperlukan!');
    return;
  }

  Email.send({
    SecureToken: "YOUR_SMTP_SECURE_TOKEN", // Ganti dengan token SMTP Anda
    To: 'hazzcode311@gmail.com',
    From: email,
    Subject: `Pesan dari ${name} melalui Portfolio Website`,
    Body: `
      <h3>Pesan Baru dari Portfolio Website</h3>
      <p><strong>Nama:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Pesan:</strong></p>
      <p>${message}</p>
    `
  }).then(
    message => {
      if (message === "OK") {
        alert('Pesan berhasil dikirim!');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
      } else {
        alert('Gagal mengirim pesan. Silakan coba lagi nanti.');
      }
    }
  );
} 