// simple tab UI
const tabs = Array.from(document.querySelectorAll('.tab'));
tabs.forEach(t => t.addEventListener('click', () => {
  tabs.forEach(x => x.classList.remove('tab--active'));
  t.classList.add('tab--active');
}));
