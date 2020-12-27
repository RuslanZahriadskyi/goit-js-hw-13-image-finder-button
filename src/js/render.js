import newCard from './apiService';
import refs from './refs';
import markup from './markup';
import loadMoreBtn from './loadMoreBtn';

function render() {
  loadMoreBtn.disable();
  newCard.fetchCard().then(({ hits }) => {
    loadMoreBtn.enable();
    loadMoreBtn.show();
    refs.galleryRef.insertAdjacentHTML('beforeend', markup(hits));
  });
}

export default render;
