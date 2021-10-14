const pathName = window.location.pathname;
const locationGallery = document.querySelector(".gallery");
let gallerySlide = document.querySelector(".gallery-carousel-slide");
let galleryThumbnails = document.querySelector(".gallery-thumbnails");
let galleryLength;
let gallerySlideInnerHTML;

if (pathName.indexOf("/locations/") !== -1) {
  if (pathName.indexOf("/locations/dominicsIV") !== -1) {
    // console.log("HI IV");

    galleryThumbnails.innerHTML += `
    <img src="/images/videoplayer.png" alt="" class="thumbnail" active="true">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-1.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-2.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-3.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-4.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-5.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-6.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-7.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-8.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-9.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-10.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-11.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-12.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-13.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-14.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-15.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-16.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-18.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-23.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-25.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-26.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-27.jpg" alt="" class="thumbnail" active="false">
    `;

    galleryLength = galleryThumbnails.childElementCount;

    gallerySlideInnerHTML = `
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-26.jpg" alt="" class="gallery-slide lastClone" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-27.jpg" alt="" class="gallery-slide" active="false">
    <video muted preload autoplay controls class="gallery-slide" active="true">
      <source src="/videos/Dominics Pizza 4.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-1.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-2.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-3.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-4.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-5.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-6.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-7.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-8.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-9.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-10.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-11.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-12.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-13.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-14.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-15.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-16.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-18.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-23.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-25.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-26.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIV/DominicsPizzaPastaIV-27.jpg" alt="" class="gallery-slide firstClone" active="false">
    `;

    // set innnerHTML
    gallerySlide.innerHTML = gallerySlideInnerHTML;

    // console.log(gallerySlide);
  } else if (pathName.indexOf("/locations/dominicsIII") !== -1) {
    // console.log("HI III");
    galleryThumbnails.innerHTML += `
    <img src="/images/videoplayer.png" alt="" class="thumbnail" active="true">
    <img src="/images/videoplayer.png" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-1.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-2.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-3.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-4.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-5.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-6.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-7.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-8.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-9.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-14.jpg" alt="" class="thumbnail" active="false">
    `;

    galleryLength = galleryThumbnails.childElementCount;

    gallerySlideInnerHTML = `
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-9.jpg" alt="" class="gallery-slide lastClone" active="false">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-14.jpg" alt="" class="gallery-slide " active="false">
    <video muted preload autoplay controls class="gallery-slide" active="true">
      <source src="/videos/Dominics Pizza 3 second.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <video muted preload controls class="gallery-slide" active="true">
      <source src="/videos/Dominics Pizza 3.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-1.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-2.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-3.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-4.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-5.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-6.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-7.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-8.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-9.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsIII/DominicsPizzaPastaIII-14.jpg" alt="" class="gallery-slide firstClone"  active="false">
    
    `;

    // set innnerHTML
    gallerySlide.innerHTML = gallerySlideInnerHTML;
  } else if (pathName.indexOf("/locations/dominicsII") !== -1) {
    // console.log("HI II");
    galleryThumbnails.innerHTML += `
    <img src="/images/videoplayer.png" alt="" class="thumbnail" active="true">
    <img src="/images/dominicsII/DominicsPizzaPastaII-1.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsII/DominicsPizzaPastaII-2.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsII/DominicsPizzaPastaII-3.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsII/DominicsPizzaPastaII-4.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsII/DominicsPizzaPastaII-5.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsII/DominicsPizzaPastaII-6.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsII/DominicsPizzaPastaII-7.jpg" alt="" class="thumbnail" active="false">
    `;

    galleryLength = galleryThumbnails.childElementCount;

    gallerySlideInnerHTML = `
    <img src="/images/dominicsII/DominicsPizzaPastaII-6.jpg" alt="" class="gallery-slide lastClone" active="false">
    <img src="/images/dominicsII/DominicsPizzaPastaII-7.jpg" alt="" class="gallery-slide" active="false">
    <video muted preload autoplay controls class="gallery-slide" active="true">
    <source src="/videos/Dominics Pizza 2.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <img src="/images/dominicsII/DominicsPizzaPastaII-1.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsII/DominicsPizzaPastaII-2.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsII/DominicsPizzaPastaII-3.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsII/DominicsPizzaPastaII-4.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsII/DominicsPizzaPastaII-5.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsII/DominicsPizzaPastaII-6.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsII/DominicsPizzaPastaII-7.jpg" alt="" class="gallery-slide firstClone" active="false">
    `;

    // set innnerHTML
    gallerySlide.innerHTML = gallerySlideInnerHTML;
  } else if (pathName.indexOf("/locations/dominicsI") !== -1) {
    galleryThumbnails.innerHTML += `
    <img src="/images/videoplayer.png" alt="" class="thumbnail" active="true">
    <img src="/images/dominicsI/DominicsPizzaPastaI-1.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsI/DominicsPizzaPastaI-2.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsI/DominicsPizzaPastaI-3.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsI/DominicsPizzaPastaI-4.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsI/DominicsPizzaPastaI-5.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsI/DominicsPizzaPastaI-6.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsI/DominicsPizzaPastaI-7.jpg" alt="" class="thumbnail" active="false">
    <img src="/images/dominicsI/DominicsPizzaPastaI-8.jpg" alt="" class="thumbnail" active="false">
    `;

    galleryLength = galleryThumbnails.childElementCount;

    gallerySlideInnerHTML = `
    <img src="/images/dominicsI/DominicsPizzaPastaI-7.jpg" alt="" class="gallery-slide lastClone" active="false">
    <img src="/images/dominicsI/DominicsPizzaPastaI-8.jpg" alt="" class="gallery-slide" active="false">
    <video muted preload autoplay controls class="gallery-slide" active="true">
    <source src="/videos/Dominics Pizza 1.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <img src="/images/dominicsI/DominicsPizzaPastaI-1.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsI/DominicsPizzaPastaI-2.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsI/DominicsPizzaPastaI-3.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsI/DominicsPizzaPastaI-4.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsI/DominicsPizzaPastaI-5.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsI/DominicsPizzaPastaI-6.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsI/DominicsPizzaPastaI-7.jpg" alt="" class="gallery-slide" active="false">
    <img src="/images/dominicsI/DominicsPizzaPastaI-8.jpg" alt="" class="gallery-slide firstClone" active="false">
    
    `;

    // set innnerHTML
    gallerySlide.innerHTML = gallerySlideInnerHTML;
  }
}
