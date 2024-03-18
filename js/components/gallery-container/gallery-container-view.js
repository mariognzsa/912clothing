
const template = document.createElement("template");
template.innerHTML =`
<div class="gallery-image">
    <div class="img-box">
    <video autoplay muted loop class="zoom">
        <source src="src/img/gallery/gallery1.mp4" type="video/mp4">
    </video>
    <div class="transparent-box">
        <div class="caption">
        <p class="logo-number">912</p>
        <p class="opacity-low">Nine twelve</p>
        </div>
    </div> 
    </div>
    <div class="img-box">
    <video autoplay muted loop>
        <source src="src/img/gallery/gallery3.mp4" type="video/mp4">
    </video>
    <div class="transparent-box">
        <div class="caption">
        <p class="logo-number">912</p>
        <p class="opacity-low">Nine twelve</p>
        </div>
    </div> 
    </div>
    <div class="img-box">
    <video autoplay muted loop class="zoom">
        <source src="src/img/gallery/gallery2.mp4" type="video/mp4">
    </video>
    <div class="transparent-box">
        <div class="caption">
        <p class="logo-number">912</p>
        <p class="opacity-low">Nine twelve</p>
        </div>
    </div> 
    </div>
    <div class="img-box">
    <img src="src/img/gallery/gallery4.JPG" alt="" />
    <div class="transparent-box">
        <div class="caption">
        <p class="logo-number">912</p>
        <p class="opacity-low">Nine twelve</p>
        </div>
    </div> 
    </div>
    <div class="img-box">
    <img src="src/img/gallery/gallery5.JPG" alt="" />
    <div class="transparent-box">
        <div class="caption">
            <p class="logo-number">912</p>
            <p class="opacity-low">Nine twelve</p>
        </div>
    </div>
    </div>
    <div class="img-box">
    <img src="src/img/gallery/1.webp" alt="" />
    <div class="transparent-box">
        <div class="caption">
            <p class="logo-number">912</p>
            <p class="opacity-low">Nine twelve</p>
        </div>
    </div>
    </div>
    <div class="img-box">
    <img src="src/img/gallery/gallery7.gif" alt="" />
    <div class="transparent-box">
        <div class="caption">
            <p class="logo-number">912</p>
            <p class="opacity-low">Nine twelve</p>
        </div>
    </div> 
    </div>
    <div class="img-box">
    <img src="src/img/gallery/2.webp" alt="" />
    <div class="transparent-box">
        <div class="caption">
            <p class="logo-number">912</p>
            <p class="opacity-low">Nine twelve</p>
        </div>
    </div> 
    </div>
    <div class="img-box">
    <img src="src/img/gallery/gallery8.JPG" alt="" />
    <div class="transparent-box">
        <div class="caption">
            <p class="logo-number">912</p>
            <p class="opacity-low">Nine twelve</p>
        </div>
    </div> 
    </div>
</div>
<style>
    @import url("js/components/gallery-container/gallery-container-styles.css");
</style>
`;

export default template;
