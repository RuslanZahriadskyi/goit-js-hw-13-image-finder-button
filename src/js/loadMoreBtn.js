import refs from './refs';

export default {
  enable() {
    refs.btnViewMoreRef.disable = false;
    refs.labelViewMore.textContent = 'See more';
    refs.spinerViewMore.classList.add('is-hidden');
  },

  disable() {
    refs.btnViewMoreRef.disable = true;
    refs.labelViewMore.textContent = 'Loading...';
    refs.spinerViewMore.classList.remove('is-hidden');
  },
  show() {
    refs.btnViewMoreRef.classList.remove('is-hidden');
  },
};
