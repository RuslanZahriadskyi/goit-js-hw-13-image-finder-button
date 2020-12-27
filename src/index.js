import './styles.css';
import 'material-design-icons/iconfont/material-icons.css';
import newCard from './js/apiService';
import refs from './js/refs';
import onImgClick from './js/getFullSize';
import renderItems from './js/render';
import 'bootstrap/dist/css/bootstrap.min.css';

refs.formRef.addEventListener('submit', galleryOnSubmit);
refs.galleryRef.addEventListener('click', onImgClick);
refs.btnViewMoreRef.addEventListener('click', onPaginationsBtnClick);

function galleryOnSubmit(e) {
  e.preventDefault();

  const form = e.currentTarget;
  newCard.query = form.elements.query.value;

  refs.galleryRef.innerHTML = '';
  form.reset();
  newCard.reset();
  renderItems();
}

function onPaginationsBtnClick() {
  renderItems();
}
