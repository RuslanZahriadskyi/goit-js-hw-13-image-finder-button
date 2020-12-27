import 'basiclightbox/dist/basicLightbox.min.css';
import * as basicLightbox from 'basiclightbox';

function onImgClick(event) {
    if(event.target.tagName === "IMG") {
      const fullSizeImg = event.target.dataset.fullsize__img;
      const instance = basicLightbox.create(`
                <img src="${fullSizeImg}" />
              `);
      instance.show();
    }
  
}

export default onImgClick;
