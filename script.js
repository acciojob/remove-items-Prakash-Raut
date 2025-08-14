//your JS code here. If required.
const select = document.getElementById('colorSelect');
const btn = document.querySelector('input[type="button"]');

btn.addEventListener('click', () => {
  const selectedIndex = select.selectedIndex;
  if (selectedIndex !== -1) {
    select.remove(selectedIndex);
  }
});