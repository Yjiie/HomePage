document.getElementById('bg-white').addEventListener('click', () => {
    document.body.style.backgroundColor = 'white';
});

document.getElementById('bg-purple').addEventListener('click', () => {
    document.body.style.backgroundColor = '#ea10e6ff';
});

// 2. Идущие часы в заголовке (title)
setInterval(() => {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  document.title = `${hh}:${mm}:${ss} — Мой хоумпейдж`;
}, 1000);

// 3. Показ текущей даты в pop-up по нажатию кнопки
document.getElementById('show-date').addEventListener('click', () => {
  alert(new Date().toLocaleString());
});
