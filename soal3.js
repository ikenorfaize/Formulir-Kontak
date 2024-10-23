document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir

    // Mengambil nilai dari input
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Menghapus pesan kesalahan sebelumnya
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('messageError').textContent = '';

    let isValid = true;

    // Validasi nama
    if (name === '') {
        document.getElementById('nameError').textContent = 'Nama harus diisi.';
        isValid = false;
    }

    // Validasi email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Email tidak valid.';
        isValid = false;
    }

    // Validasi nomor telepon
    if (phone === '') {
        document.getElementById('phoneError').textContent = 'Nomor telepon harus diisi.';
        isValid = false;
    }

    // Validasi pesan
    if (message === '') {
        document.getElementById('messageError').textContent = 'Pesan harus diisi.';
        isValid = false;
    }

    // Jika semua validasi berhasil, kirim formulir
    if (isValid) {
        alert('Formulir berhasil dikirim!');
    }
});
