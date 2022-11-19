<script setup>

import {ref} from 'vue'

const navs=ref([
  {id:'#home', name:'Beranda', linkk:'#home'},
  {id:'#blog', name:'Blog', linkk:'#blog'},
  {id:'#about', name:'Tentang Saya', linkk:'#about'},
  {id:'#clients', name:'Clients', linkk:'#clients'},
  {id:'#contact', name:'Kontak', linkk:'#kontak'},
])

const isActive = ref(false)

function toggle(){
   this.isActive = !this.isActive
}


window.onscroll = scrool

function scrool() {
  const header = document.querySelector('header')
  const fixedNav = header.offsetTop

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  }else{
    header.classList.remove('navbar-fixed');
  }
}

</script>

<template>

  <!-- Header Start -->
  <header class=" absolute top-0 left-0 w-full flex items-center z-10 ">
    <div class="container  mx-auto lg:max-w-6xl">
      <div class="flex items-center justify-between relative">
        <div class="px-4">
          <a href="#home" class="font-bold text-lg text-primary block py-6">Yuda Rizki</a>
        </div>

        <div class="flex items-center px-4">
          <button @click="toggle()" id="hamburger" name="hamburger" type="button"
            class="absolute block right-4 lg:hidden">
            <span class="hamburger-line transition duration-300 ease-in-out origin-top-left "
              :class="{ ' rotate-45': isActive }"></span>
            <span class="hamburger-line transition duration-300 ease-in-out" :class="{ 'scale-0': isActive }"></span>
            <span class="hamburger-line transition duration-300 ease-in-out origin-bottom-left"
              :class="{ ' -rotate-45': isActive }"></span>

          </button>
          <nav id="nav-menu"
            class=" transition  duration-500  absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:opacity-100 lg:visible lg:block lg:shadow-none lg:rounded-none lg:static lg:bg-transparent lg:max-w-full"
            :class="isActive ? 'opacity-100 visible ' : 'opacity-0 invisible'">
            <ul class="block lg:flex">
              <li v-for="nav in navs" class="group" :id=nav.id><a
                  class="text-base text-dark py-2 mx-8  flex group-hover:text-primary" :href=nav.linkk>{{ nav.name
                  }}</a></li>
              <!-- <li class="group"><a class="text-base text-dark py-2 mx-8  flex group-hover:text-primary"
                  href="#about">Tentang
                  Saya</a></li>
              <li class="group"><a class="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  href=" #portfolio">Portofolio</a></li>
              <li class="group"><a class="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  href=" #client">Clients</a></li>
              <li class="group"><a class="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  href=" #blog">Blog</a>
              </li>
              <li class="group"><a class="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  href=" #kontak">Kontak</a></li> -->
            </ul>
          </nav>
        </div>

      </div>
    </div>
  </header>
  <!-- Header End -->

  <!-- Hero Section Start -->
  <section id="home" class="pt-36 ">
    <div class="container mx-auto lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
      <div class="flex flex-wrap">

        <div class="w-full self-center px-4 lg:w-1/2 ">
          <h1 class="text-primary text-base font-bold md:text-xl">Halo Semua 👋🏻, Saya <span
              class="block font-bold text-dark text-4xl mt-1 lg:text-5xl">Yuda
              Rizki</span></h1>
          <h2 class="font-medium text-secondary text-lg mb-5 lg:text-2xl">Fresh Graduate & <span class="text-dark"> Web
              Programmer</span></h2>
          <p class="font-medium text-secondary mb-10 leading-relaxed">Belajar web Programming itu mudah dan menyenangkan
            <span class="text-dark font-semibold">Bukan!!!</span>
          </p>
          <a href="#"
            class="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Hubungi
            Saya</a>
        </div>

        <div class="w-full self-end px-4 lg:w-1/2">
          <div class="mt-10 relative lg:mt-0 lg:mr-0">
            <img src="./assets/img/chibi.png" alt="Yuda" class="max-w-full mx-auto">
            <span class="absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
              <svg viewBox="0 0 200 200" width="400" height="400" xmlns="http://www.w3.org/2000/svg">
                <path fill="#14b8a6"
                  d="M39.3,-39.9C53.3,-25.3,68.5,-12.7,69.5,0.9C70.4,14.5,57,29.1,43.1,38.3C29.1,47.5,14.5,51.4,-2,53.4C-18.6,55.5,-37.2,55.6,-48.5,46.4C-59.8,37.2,-63.9,18.6,-65.2,-1.3C-66.4,-21.1,-64.9,-42.2,-53.6,-56.8C-42.2,-71.4,-21.1,-79.4,-4.2,-75.2C12.7,-71,25.3,-54.5,39.3,-39.9Z"
                  transform="translate(100 100) scale(1)" />
              </svg>
            </span>
          </div>
        </div>

      </div>
    </div>
  </section>
  <!-- Hero Section End -->

  <!-- About Section Start -->
  <section id="about" class="pt-36 pb-32">
    <div class="container mx-auto lg:max-w-4xl  xl:max-w-6xl 2xl:max-w-7xl">
      <div class="flex flex-wrap">
        <div class="w-full px-4 mb-10 lg:w-1/2">
          <h4 class="font-bold uppercase text-primary text-lg mb-3">Tentang Saya</h4>
          <h2 class="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl">Yuk Belajar Wed Design bersama saya disni
          </h2>
          <p class="font-medium text-base text-secondary max-w-xl lg:text-lg">Lorem ipsum dolor sit amet consectetur
            adipisicing
            elit.
            Veniam hic consequuntur incidunt vel fugiat, cum
            ut cupiditate nam earum nostrum. Accusamus ea vel possimus vitae assumenda minus dolor, saepe
            exercitationem.</p>
        </div>
        <div class="w-full px-4 mb-10 lg:w-1/2">
          <h3 class="font-semibold text-2xl text-dark mb-4 lg:text-3xl lg:pt-10">Mari Berteman</h3>
          <p class="font-medium text-base text-secondary max-w-xl lg:text-lg">Lorem ipsum, dolor sit amet consectetur
            adipisicing
            elit. Laboriosam eveniet repudiandae laudantium saepe
            beatae. Tempore aliquam reiciendis </p>
          <div class="flex items-center mt-5">
            <!-- Youtube -->
            <a href="https://www.youtube.com/channel/UCGK8pagvqNxHOCFtZeyUxrw" target="_blank"
              class="transition-all w-11 h-11 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white text-slate-400">
              <svg role="img" width="25" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>YouTube</title>
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            <!-- Instagram -->
            <a href="https://www.instagram.com/yuda_san_/" target="_blank"
              class="transition-all w-11 h-11 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white text-slate-400">
              <svg role="img" width="25" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Instagram</title>
                <path
                  d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </a>

            <!-- Dribble -->
            <a href="https://dribbble.com/yuda_San_" target="_blank"
              class="transition-all w-11 h-11 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white text-slate-400">
              <svg role="img" width="25" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Dribbble</title>
                <path
                  d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
              </svg>
            </a>

            <!-- Behance -->
            <a href="https://www.behance.net/muhammarizki2" target="_blank"
              class="transition-all w-11 h-11 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white text-slate-400">
              <svg role="img" width="25" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Behance</title>
                <path
                  d="M0 4.4804V19.243h7.1554c.6613 0 1.3078-.0832 1.9297-.248.6288-.1654 1.1905-.4203 1.6792-.7661.485-.3431.8784-.788 1.1677-1.3369.2862-.542.4294-1.187.4294-1.9354 0-.9232-.219-1.7109-.6675-2.369-.446-.6542-1.1187-1.1139-2.0274-1.3746.6674-.3161 1.1658-.7227 1.506-1.2177.3371-.4967.5058-1.1174.5058-1.8607 0-.6873-.1127-1.2677-.3375-1.7318-.2306-.4709-.552-.8452-.9632-1.1266-.4176-.2808-.912-.4857-1.4912-.6085-.5827-.1261-1.22-.1872-1.9264-.1872zm15.6674.9903v1.4567h5.9844V5.4707zM3.2509 6.9947h3.0407c.2873 0 .5683.0204.8359.0731.2728.0466.508.134.716.2595.2096.1205.3754.293.501.5132.1208.2203.1806.5038.1806.8474 0 .6189-.1811 1.0702-.5551 1.3426-.3778.2775-.8543.4147-1.4304.4147H3.2509zm15.545 1.2564c-.819 0-1.5587.1462-2.2294.436-.6705.2904-1.2463.6875-1.7318 1.1915-.4846.5011-.8535 1.0986-1.12 1.7909-.2612.69-.3942 1.4366-.3942 2.236 0 .8268.1284 1.5891.3835 2.2786.258.6923.6198 1.2822 1.0856 1.781.478.4967 1.046.8784 1.726 1.1497.6806.269 1.4382.4048 2.2803.4048 1.208 0 2.2446-.2771 3.0949-.8326.8599-.5528 1.4902-1.471 1.9058-2.7574h-2.585c-.1.3307-.359.649-.784.9467-.4295.2988-.9417.4492-1.534.4492-.8233 0-1.4588-.2168-1.8985-.6462-.4412-.4294-.7267-1.2289-.7267-2.0742h7.713c.0552-.8291-.0122-1.6218-.2045-2.3797-.1938-.7601-.5033-1.4365-.9393-2.029-.4355-.5931-.9904-1.0667-1.667-1.4165-.6788-.3543-1.4703-.5288-2.3747-.5288zm-.0887 2.217c.7209 0 1.3126.2092 1.6612.5954.3503.389.6065.9432.6766 1.6915h-4.7766c.0136-.2085.058-.4444.1339-.7045.0749-.2668.2039-.5164.3933-.753.1905-.2326.4402-.431.744-.5896.3109-.1608.6986-.2397 1.1676-.2397zM3.251 12.664h3.5334c.6996 0 1.2682.1602 1.6948.4836.4259.328.6405.8685.6405 1.6292 0 .3885-.0632.7094-.1946.9566-.131.2495-.3106.4466-.528.5896-.2172.1491-.4753.2498-.7661.3137-.2862.0639-.5905.092-.9115.092H3.2509z" />
              </svg>
            </a>


          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- About Section End -->

  <!-- Portfolio Section Start -->
  <section id="portfolio" class="pt-36 pb-16 bg-slate-100">
    <div class="container mx-auto lg:max-w-4xl  xl:max-w-6xl 2xl:max-w-7xl">
      <div class="w-full px-4">
        <div class="max-w-xl mx-auto  text-center mb-16">
          <h4 class="font-semibold text-lg text-primary mb-2">Portfolio</h4>
          <h2 class="font-bold text-3xl text-dark mb-4 sm:text-4xl lg:text-5xl">Project Terbaru</h2>
          <p class="font-medium text-base text-secondary md:text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing
            elit.
            Quibusdam reiciendis
            quaerat porro magni tempore
            quas totam? Officiis explicabo porro architecto veritatis tenetur, reprehenderit, cumque ipsum
            necessitatibus aperiam esse illum minus.</p>
        </div>
      </div>


      <div class="w-full px-4 flex flex-wrap justify-center xl:w-11/12 mx-auto">
        <div class="mb-12 p-4 md:w-1/2">
          <div class="rounded-md shadow-md overflow-hidden">
            <img src="./assets/img/p1.png" alt="Port 1" width="w-full">

          </div>
          <h3 class="font-semibold text-xl text-dark mt-5">Portfolio 1</h3>
          <p class="text-base text-secondary font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            molestiae fugit, magnam accusantium et quo
            maiores.</p>
        </div>
        <div class="mb-12 p-4 md:w-1/2">
          <div class="rounded-md shadow-md overflow-hidden">
            <img src="./assets/img/p2.png" alt="Port 1" width="w-full">

          </div>
          <h3 class="font-semibold text-xl text-dark mt-5">Portfolio 2</h3>
          <p class="text-base text-secondary font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            molestiae fugit, magnam accusantium et quo
            maiores.</p>
        </div>
        <div class="mb-12 p-4 md:w-1/2">
          <div class="rounded-md shadow-md overflow-hidden">
            <img src="./assets/img/p3.png" alt="Port 1" width="w-full">

          </div>
          <h3 class="font-semibold text-xl text-dark mt-5">Portfolio 3</h3>
          <p class="text-base text-secondary font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            molestiae fugit, magnam accusantium et quo
            maiores.</p>
        </div>
        <div class="mb-12 p-4 md:w-1/2">
          <div class="rounded-md shadow-md overflow-hidden">
            <img src="./assets/img/p4.png" alt="Port 1" width="w-full">

          </div>
          <h3 class="font-semibold text-xl text-dark mt-5">Portfolio 4</h3>
          <p class="text-base text-secondary font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            molestiae fugit, magnam accusantium et quo
            maiores.</p>
        </div>
      </div>
    </div>
  </section>
  <!-- Portfolio Section End-->

  <!-- Clients section start -->
  <section id="clients" class="pt-36 pb-32 bg-slate-700">
    <div class="container mx-auto lg:max-w-4xl  xl:max-w-6xl 2xl:max-w-7xl">
      <div class=" w-full px-4">
        <div class="  text-center mb-16">
          <h4 class="font-semibold text-lg text-primary mb-2">Clients</h4>
          <h2 class="font-bold text-3xl text-white mb-4 sm:text-4xl lg:text-5xl">Yang pernah bekerja sama</h2>
          <p class="font-medium text-base text-secondary max-w-xl mx-auto md:text-lg">Lorem, ipsum dolor sit amet
            consectetur
            adipisicing adipisicing.</p>
        </div>
      </div>

      <div class="w-10/12 mx-auto px-4  2xl:w-10/12 xl:w-9/12 md:w-7/12">
        <div class="flex flex-wrap justify-center ">
          <a href="#" class="w-1/3 mb-8 "><img src="./assets/clients/google.svg"
              class="md:w-[70px] lg:w-[120px] xl:w-[160px] 2xl:w-[200px] grayscale  mx-auto opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 "
              alt="Google "></a>
          <a href="#" class="w-1/3 mb-8"><img src="./assets/clients/tw.svg"
              class="grayscale md:w-[70px] lg:w-[120px] xl:w-[160px] 2xl:w-[200px] mx-auto opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 "
              alt="Twitter"></a>
          <a href="#" class="w-1/3 mb-8"><img src="./assets/clients/bhn.svg"
              class="grayscale md:w-[70px] lg:w-[120px] xl:w-[160px] 2xl:w-[200px] mx-auto opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 "
              alt="Behance"></a>
          <a href="#" class="w-1/3 mb-8"><img src="./assets/clients/ig.svg"
              class="grayscale md:w-[70px] lg:w-[120px] xl:w-[160px] 2xl:w-[200px] mx-auto opacity-60 transition hover:grayscale-0 hover:opacity-100 duration-500 "
              alt="Instagram"></a>
        </div>
      </div>

    </div>
  </section>
  <!-- Clients section end -->

  <!-- Blog section start -->
  <section id="blog" class="pt-36 pb-32 bg-slate-100">
    <div class="container mx-auto lg:max-w-4xl  xl:max-w-6xl 2xl:max-w-7xl ">
      <div class="w-full px4">
        <div class="max-w-xl mx-auto  text-center mb-16">
          <h4 class="font-semibold text-lg text-primary mb-2">Blog</h4>
          <h2 class="font-bold text-3xl text-dark mb-4 sm:text-4xl lg:text-5xl">Tulisan Terkini</h2>
          <p class="font-medium text-base text-secondary md:text-lg max-w-sm mx-auto">Lorem, ipsum dolor sit amet
            consectetur
            adipisicing
            elit.
            Quibusdam reiciendis
            quaerat porro </p>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full px-8 lg:w-1/2 xl:w-1/3">
          <div class="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
            <img src="https://source.unsplash.com/200x100?programming" alt="programming" class="w-full">
            <div class="py-8 px-6">
              <h3><a href="#" class="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Tips
                  Belajar
                  Programming</a> </h3>
              <p class="text-base text-secondary font-medium mb-6">Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Commodi, eaque.</p>
              <a href="#" class="font-medium text-sm text-white bg-primary py-2 px-4 rounded-md hover:opacity-80">Baca
                Selengkapnya</a>
            </div>
          </div>
        </div>
        <div class="w-full px-8 lg:w-1/2 xl:w-1/3">
          <div class="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
            <img src="https://source.unsplash.com/200x100?laptop" alt="Laptop" class="w-full">
            <div class="py-8 px-6">
              <h3><a href="#" class="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Laptop
                  dengan spek gaming</a> </h3>
              <p class="text-base text-secondary font-medium mb-6">Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Aliquam in officia optio dolore ipsa dignissimos maxime magnam culpa doloremque unde.</p>
              <a href="#" class="font-medium text-sm text-white bg-primary py-2 px-4 rounded-md hover:opacity-80">Baca
                Selengkapnya</a>
            </div>
          </div>
        </div>
        <div class="w-full px-8 lg:w-1/2 xl:w-1/3">
          <div class="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
            <img src="https://source.unsplash.com/200x100?cpu" alt="CPU" class="w-full">
            <div class="py-8 px-6">
              <h3><a href="#" class="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">CPU terkini
                  Programming</a> </h3>
              <p class="text-base text-secondary font-medium mb-6">Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Commodi, eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#" class="font-medium text-sm text-white bg-primary py-2 px-4 rounded-md hover:opacity-80">Baca
                Selengkapnya</a>
            </div>
          </div>
        </div>
        <div class="w-full px-8 lg:w-1/2 xl:w-1/3">
          <div class="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
            <img src="https://source.unsplash.com/200x100?mouse" alt="Mouse" class="w-full">
            <div class="py-8 px-6">
              <h3><a href="#" class="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Mouse
                  Gaming
                  Programming</a> </h3>
              <p class="text-base text-secondary font-medium mb-6">Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Commodi, eaque.</p>
              <a href="#" class="font-medium text-sm text-white bg-primary py-2 px-4 rounded-md hover:opacity-80">Baca
                Selengkapnya</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
  <!-- Blog section end -->


  <!-- Contact section start -->
  <section id="kontak" class="pt-36 pb-32">
    <div class="container max-w-sm mx-auto sm:max-w-xl lg:max-w-4xl  xl:max-w-6xl 2xl:max-w-7xl">
      <div class="w-full px-4">
        <div class="max-w-xl mx-auto  text-center mb-16">
          <h4 class="font-semibold text-lg text-primary mb-2">Contact</h4>
          <h2 class="font-bold text-3xl text-dark mb-4 sm:text-4xl lg:text-5xl">Hubungi Kami</h2>
          <p class="font-medium text-base text-secondary md:text-lg max-w-sm mx-auto">Lorem, ipsum dolor sit amet
            consectetur
            adipisicing
            elit.
            Quibusdam </p>
        </div>
      </div>
      <form>
        <div class="w-full lg:w-2/3 lg:mx-auto">
          <div class="w-full px-4 mb-8">
            <label for="name" class="text-base font-bold text-primary">Nama</label>
            <input type="text" id="name"
              class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary">

          </div>
          <div class="w-full px-4 mb-8">
            <label for="email" class="text-base font-bold text-primary">E-Mail</label>
            <input type="text" id="email"
              class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary">
          </div>
          <div class="w-full px-4 mb-8">
            <label for="pesan" class="text-base font-bold text-primary">Pesan</label>
            <textarea type="text" id="pesan"
              class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"></textarea>
          </div>
          <div class="w-full px-4">
            <button
              class="text-base font-semibold text-white bg-primary w-full rounded-full py-3 hover:opacity-80 hover:shadow-lg transition duration-500">Kirim</button>
          </div>
        </div>
      </form>
    </div>
  </section>
  <!-- Contact section end -->

  <!-- Footer section start -->
  <footer class="bg-dark pt-24 pb-8">
    <div class="container max-w-sm mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-4xl  xl:max-w-6xl 2xl:max-w-7xl">
      <div class="flex flex-wrap">
        <div class=" px-4 mb-12 text-slate-300 font-medium md:w-1/3">
          <div class="md:mx-auto md:w-fit">
            <h2 class="font-bold text-white text-4xl mb-5">Rizki</h2>
            <h3 class="font-bold text-2xl mb-2">Hubungi Kami</h3>
            <p>ryuda1014@gmail.com</p>
            <p>Pematang Siantar</p>
          </div>
        </div>
        <div class="w-full px-4 mb-12 md:w-1/3">
          <div class="md:mx-auto md:w-fit">
            <h3 class="font-semibold text-xl text-white mb-5">Kategori Tulisan</h3>
            <ul class="text-slate-300">
              <li><a href="#" class="block text-base hover:text-primary mb-3">Programming</a></li>
              <li><a href="#" class="block text-base hover:text-primary mb-3">Teknologi</a></li>
              <li><a href="#" class="block text-base hover:text-primary mb-3">Gaya Hidup</a></li>
            </ul>
          </div>
        </div>
        <div class="w-full px-4 mb-12 md:w-1/3">
          <div class="md:mx-auto md:w-fit">
            <h3 class="font-semibold text-xl text-white mb-5">Tautan</h3>
            <ul class="text-slate-300">
              <li><a href="#home" class="block text-base hover:text-primary mb-3">Beranda</a></li>
              <li><a href="#about" class="block text-base hover:text-primary mb-3">Tentang saya</a></li>
              <li><a href="#portfolio" class="block text-base hover:text-primary mb-3">Portfolio</a></li>
              <li><a href="#blog" class="block text-base hover:text-primary mb-3">Blog</a></li>
              <li><a href="#clients" class="block text-base hover:text-primary mb-3">Clients</a></li>
              <li><a href="#kontak" class="block text-base hover:text-primary mb-3">Kontak</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="w-full pt-10 border-t border-slate-800">
        <div class="flex items-center mt-5 justify-center mb-5">
          <!-- Youtube -->
          <a href="https://www.youtube.com/channel/UCGK8pagvqNxHOCFtZeyUxrw" target="_blank"
            class="transition-all w-11 h-11 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white text-slate-400">
            <svg role="img" width="25" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>YouTube</title>
              <path
                d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>

          <!-- Instagram -->
          <a href="https://www.instagram.com/yuda_san_/" target="_blank"
            class="transition-all w-11 h-11 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white text-slate-400">
            <svg role="img" width="25" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Instagram</title>
              <path
                d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
            </svg>
          </a>

          <!-- Dribble -->
          <a href="https://dribbble.com/yuda_San_" target="_blank"
            class="transition-all w-11 h-11 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white text-slate-400">
            <svg role="img" width="25" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Dribbble</title>
              <path
                d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
            </svg>
          </a>

          <!-- Behance -->
          <a href="https://www.behance.net/muhammarizki2" target="_blank"
            class="transition-all w-11 h-11 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white text-slate-400">
            <svg role="img" width="25" class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>Behance</title>
              <path
                d="M0 4.4804V19.243h7.1554c.6613 0 1.3078-.0832 1.9297-.248.6288-.1654 1.1905-.4203 1.6792-.7661.485-.3431.8784-.788 1.1677-1.3369.2862-.542.4294-1.187.4294-1.9354 0-.9232-.219-1.7109-.6675-2.369-.446-.6542-1.1187-1.1139-2.0274-1.3746.6674-.3161 1.1658-.7227 1.506-1.2177.3371-.4967.5058-1.1174.5058-1.8607 0-.6873-.1127-1.2677-.3375-1.7318-.2306-.4709-.552-.8452-.9632-1.1266-.4176-.2808-.912-.4857-1.4912-.6085-.5827-.1261-1.22-.1872-1.9264-.1872zm15.6674.9903v1.4567h5.9844V5.4707zM3.2509 6.9947h3.0407c.2873 0 .5683.0204.8359.0731.2728.0466.508.134.716.2595.2096.1205.3754.293.501.5132.1208.2203.1806.5038.1806.8474 0 .6189-.1811 1.0702-.5551 1.3426-.3778.2775-.8543.4147-1.4304.4147H3.2509zm15.545 1.2564c-.819 0-1.5587.1462-2.2294.436-.6705.2904-1.2463.6875-1.7318 1.1915-.4846.5011-.8535 1.0986-1.12 1.7909-.2612.69-.3942 1.4366-.3942 2.236 0 .8268.1284 1.5891.3835 2.2786.258.6923.6198 1.2822 1.0856 1.781.478.4967 1.046.8784 1.726 1.1497.6806.269 1.4382.4048 2.2803.4048 1.208 0 2.2446-.2771 3.0949-.8326.8599-.5528 1.4902-1.471 1.9058-2.7574h-2.585c-.1.3307-.359.649-.784.9467-.4295.2988-.9417.4492-1.534.4492-.8233 0-1.4588-.2168-1.8985-.6462-.4412-.4294-.7267-1.2289-.7267-2.0742h7.713c.0552-.8291-.0122-1.6218-.2045-2.3797-.1938-.7601-.5033-1.4365-.9393-2.029-.4355-.5931-.9904-1.0667-1.667-1.4165-.6788-.3543-1.4703-.5288-2.3747-.5288zm-.0887 2.217c.7209 0 1.3126.2092 1.6612.5954.3503.389.6065.9432.6766 1.6915h-4.7766c.0136-.2085.058-.4444.1339-.7045.0749-.2668.2039-.5164.3933-.753.1905-.2326.4402-.431.744-.5896.3109-.1608.6986-.2397 1.1676-.2397zM3.251 12.664h3.5334c.6996 0 1.2682.1602 1.6948.4836.4259.328.6405.8685.6405 1.6292 0 .3885-.0632.7094-.1946.9566-.131.2495-.3106.4466-.528.5896-.2172.1491-.4753.2498-.7661.3137-.2862.0639-.5905.092-.9115.092H3.2509z" />
            </svg>
          </a>


        </div>
        <p class="font-medium text-sm text-slate-500 text-center">Dibuat Oleh Muhammad Yuda Rizki using <span>❤️</span>
          Tailwind CSS &
          VueJS3</p>
      </div>

    </div>
  </footer>
  <!-- Footer section end -->

</template>


