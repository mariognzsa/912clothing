
const template = document.createElement("template");
template.innerHTML =`
<style>
    @import url("js/components/gallery-container/gallery-container-styles.css");
</style>
<div class="gallery-image">
    <div class="img-box">
    <video autoplay muted loop playsinline src="src/img/gallery/1.mp4" class="zoom"></video>
    <div class="transparent-box">
        <div class="caption">
        <p class="logo-number">912</p>
        <p class="opacity-low">Nine twelve</p>
        </div>
    </div> 
    </div>
    <div class="img-box">
    <video autoplay muted loop playsinline src="src/img/gallery/2.mp4"></video>
    <div class="transparent-box">
        <div class="description">
        <p class="logo-number">912</p>
        <p class="opacity-low">Project 912 launch collection</p>
        </div>
    </div> 
    </div>
    <div class="img-box">
    <img src="src/img/gallery/3.gif" alt="" />
    <div class="transparent-box">
        <div class="caption">
        <p class="logo-number">912</p>
        <p class="opacity-low">Nine twelve</p>
        </div>
    </div> 
    </div>
    <div class="img-box">
    <img src="src/img/gallery/4.webp" alt="" />
    <div class="transparent-box">
        <div class="caption">
        <p class="logo-number">912</p>
        <p class="opacity-low">Nine twelve</p>
        </div>
    </div> 
    </div>
    <div class="img-box">
    <img src="src/img/gallery/5.webp" alt="" />
    <div class="transparent-box">
        <div class="description">
            <p class="logo-number">912</p>
            <p class="opacity-low">
                Collection strongly influenced by characteristic elements of New Orleans culture, inspired by urban hip-hop genre where images related to its dark essence prevail. 
                Models like "Forgiving" tell stories about memory and the meaning of forgiveness, gathering images and facets of characters whose pasts have been reflected in tragedy and success. 
                It is the second collection of 3 designs in 912 launched at the beginning of the project, whose style has been vital for the development of the distinctive urban style at Nine Twelve. Available while supplies last.</p>
        </div>
    </div>
    </div>
    <div class="img-box">
    <img src="src/img/gallery/6.webp" alt="" />
    <div class="transparent-box">
        <div class="caption">
            <p class="logo-number">912</p>
            <p class="opacity-low">Nine twelve</p>
        </div>
    </div>
    </div>
    <div class="img-box">
    <img src="src/img/gallery/8.webp" alt="" />
    <div class="transparent-box">
    <div class="caption">
            <p class="logo-number">912</p>
            <p class="opacity-low">Nine twelve</p>
        </div>
    </div> 
    </div>
    <div class="img-box">
    <video autoplay muted loop playsinline src="src/img/gallery/7.mp4" class="zoom"></video>
    <div class="transparent-box">
        <div class="description">
            <p class="logo-number">912</p>
            <p class="opacity-low">
                Third collection launched at the end of the year 2023 where our main inspiration was the essence of sacred images, entirely 
                inspired by mysticism and revelations from the perspective of the quest for faith combined with the already characteristic vision of the project, 
                bringing together strongly influential elements in the general culture along with the religious elements that surround us day by day, 
                all referenced towards urban culture, resulting in our well-known latest clothing line. Available while supplies last.
            </p>
        </div>
    </div> 
    </div>
    <div class="img-box">
    <img src="src/img/gallery/9.webp" class="zoom" alt="" />
    <div class="transparent-box">
        <div class="caption">
            <p class="logo-number">912</p>
            <p class="opacity-low">Nine twelve</p>
        </div>
    </div> 
    </div>
</div>

`;

export default template;
