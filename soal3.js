document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('messageError').textContent = '';

    let isValid = true;

    if (name === '') {
        document.getElementById('nameError').textContent = 'Nama harus diisi.';
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Email tidak valid.';
        isValid = false;
    }

    if (phone === '') {
        document.getElementById('phoneError').textContent = 'Nomor telepon harus diisi.';
        isValid = false;
    }

    if (message === '') {
        document.getElementById('messageError').textContent = 'Pesan harus diisi.';
        isValid = false;
    }

    if (isValid) {
        alert('Formulir berhasil dikirim!');
    }
});
