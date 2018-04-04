<template>
  <nav class="navbar navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll="100" id="sectionsNav">
    <div class="container">
      <div class="navbar-translate">
        <a class="navbar-brand" href="#">
          <i class="logo"></i>
          <strong>App</strong> Static
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Lien 1
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Lien 2
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Lien 3
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Lien 4
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="tel:+33">
              <i class="material-icons">call</i>06 12 34 56 78
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link--text-mobile" href="#">
              <i class="material-icons">email</i> 
              <span class="nav-text">Contact</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link--text-mobile" href="#">
              <i class="material-icons">place</i> 
              <span class="nav-text">Adresse</span>
            </a>
          </li>
            <li class="nav-item">
              <a class="nav-link nav-link--text-mobile" href="https://www.facebook.com/" target="_blank" rel="noopener">
                <svg class="material-icons svg-icons" viewBox="0 0 24 24">
                  <path fill="#555555" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z"/>
                </svg>
                <span class="nav-text">Facebook</span>
              </a>
            </li>
        </ul>
      </div>
    </div>
  </nav>
</template>