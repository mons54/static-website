<template>
  <section class="container">
    <h1 class="title">Page d'accueil</h1>
  </section>
</template>

<script>
  export default {
    head() {
      return this.$head({
        title: "Home Page",
        meta: [
          { hid: 'description', name: 'description', content: "Home Page description" },
        ],
        __dangerouslyDisableSanitizers: ['script'],
        script: [{
          type: 'application/ld+json', 
          innerHTML: `{
            "@context" : "https://schema.org",
            "@type" : "LocalBusiness",
            "name" : "My Local Business",
            "image" : "http://localhost:3000/logo.png",
            "telephone" : "+33",
            "email" : "@gmail.com",
            "url": "http://localhost:3000",
            "logo": "http://localhost:3000/logo.png",
            "address" : {
                "@type" : "PostalAddress",
                "streetAddress" : "Adresse",
                "addressLocality" : "Ville",
                "postalCode" : "75000"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 0,
                "longitude": 0
            },
            "hasMap": "https://www.google.fr/maps/place/localBusiness",
            "sameAs": [
                "https://www.facebook.com/localBusiness"
            ],
            "openingHoursSpecification": [{
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Lundi",
                    "Mardi",
                    "Mercredi",
                    "Jeudi",
                    "Vendredi"
                ],
                "opens": "08:00",
                "closes": "18:00"
            }]
          }` 
        }]
      })
    }
  };
</script>

<style>
</style>
