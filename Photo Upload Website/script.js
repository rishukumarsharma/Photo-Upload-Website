const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');

fileInput.addEventListener('change', function () {
  const file = this.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', function () {
    preview.style.backgroundImage = `url(${this.result})`;
  });

  reader.readAsDataURL(file);
});
