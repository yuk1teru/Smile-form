const selectEl1 = document.getElementById('select-1');
const selectBtnEl1 = selectEl1.querySelector('.js-select__button-1');
const selectLabelEl1 = selectEl1.querySelectorAll('.select__label');
const selectEl2 = document.getElementById('select-2');
const selectBtnEl2 = selectEl2.querySelector('.select__button-2');
const selectLabelEl2 = selectEl2.querySelectorAll('.select__label');
const selectEl3 = document.getElementById('select-3');
const selectBtnEl3 = selectEl3.querySelector('.select__button-3');
const selectLabelEl3 = selectEl3.querySelectorAll('.select__label');

const selectLabelAll = document.querySelectorAll('.select__label');

for (let i = 0; i < selectLabelAll.length; i += 1) {
  selectBtnEl1.addEventListener('click', () => {
    selectEl1.classList.toggle('active');
  });

  selectBtnEl2.addEventListener('click', () => {
    selectEl2.classList.toggle('active');
  });

  selectBtnEl3.addEventListener('click', () => {
    selectEl3.classList.toggle('active');
  });
}

for (let i = 0; i < selectLabelEl1.length; i += 1) {
  selectLabelEl1[i].addEventListener('click', evt => {
    const arr = [];
    let needText = evt.currentTarget.textContent;
    arr.push(needText);
    selectBtnEl1.textContent = needText;
    selectEl1.classList.remove('active');
    selectBtnEl1.style.color = '#000';
  });
  selectLabelEl2[i].addEventListener('click', evt => {
    const arr = [];
    let needText = evt.currentTarget.textContent;
    arr.push(needText);
    selectBtnEl2.textContent = needText;
    selectEl2.classList.remove('active');
    selectBtnEl2.style.color = '#000';
  });
  selectLabelEl3[i].addEventListener('click', evt => {
    const arr = [];
    let needText = evt.currentTarget.textContent;
    arr.push(needText);
    selectBtnEl3.textContent = needText;
    selectEl3.classList.remove('active');
    selectBtnEl3.style.color = '#000';
  });
}
