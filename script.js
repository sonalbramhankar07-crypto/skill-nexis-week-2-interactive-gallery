<!DOCTYPE html><html lang="en"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Interactive Image Gallery</title>

<link rel="stylesheet" href="style.css">

</head><body><div class="background-glow glow-1"></div>
<div class="background-glow glow-2"></div>

<header>
    <div class="badge">✦ MY GALLERY</div>

    <h1>Interactive <span>Image Gallery</span></h1>

    <p>Explore the collection • Click any image to view it in full size</p>
</header>


<main class="gallery">

    <div class="gallery-item">
        <img src="https://picsum.photos/id/1015/800/600"
             alt="Mountain Landscape">
        <div class="image-overlay">
            <span>01</span>
        </div>
    </div>

    <div class="gallery-item">
        <img src="https://picsum.photos/id/1016/800/600"
             alt="Beautiful Nature">
        <div class="image-overlay">
            <span>02</span>
        </div>
    </div>

    <div class="gallery-item">
        <img src="https://picsum.photos/id/1025/800/600"
             alt="Cute Dog">
        <div class="image-overlay">
            <span>03</span>
        </div>
    </div>

    <div class="gallery-item">
        <img src="https://picsum.photos/id/1035/800/600"
             alt="River Landscape">
        <div class="image-overlay">
            <span>04</span>
        </div>
    </div>

    <div class="gallery-item">
        <img src="https://picsum.photos/id/1043/800/600"
             alt="Forest">
        <div class="image-overlay">
            <span>05</span>
        </div>
    </div>

    <div class="gallery-item">
        <img src="https://picsum.photos/id/1050/800/600"
             alt="Nature View">
        <div class="image-overlay">
            <span>06</span>
        </div>
    </div>

    <div class="gallery-item">
        <img src="https://picsum.photos/id/1069/800/600"
             alt="Mountain Road">
        <div class="image-overlay">
            <span>07</span>
        </div>
    </div>

    <div class="gallery-item">
        <img src="https://picsum.photos/id/1074/800/600"
             alt="Landscape">
        <div class="image-overlay">
            <span>08</span>
        </div>
    </div>

</main>


<!-- Lightbox -->

<div class="lightbox" id="lightbox">

    <button class="close" id="closeBtn">&times;</button>

    <img id="lightboxImage" src="" alt="Large Image">

</div>


<script src="script.js"></script>

</body>
</html>
