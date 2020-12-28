import newCard from './apiService';
import refs from './refs';
import markup from './markup';
import loadMoreBtn from './loadMoreBtn';

function render() {
  loadMoreBtn.disable();
  newCard.fetchCard().then(({ hits, totalHits }) => {
    if (totalHits + newCard.perPage < newCard.page * newCard.perPage) {
      refs.btnViewMoreRef.style.display = 'none';
    }
    loadMoreBtn.enable();
    loadMoreBtn.show();
    refs.galleryRef.insertAdjacentHTML('beforeend', markup(hits));
    window.scrollTo(0, newCard.scrollPerPage);
  });
}

export default render;
