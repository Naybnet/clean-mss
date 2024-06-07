<script setup lang="ts">
definePageMeta({
  layout: 'landing',
})

useHead({ title: 'Page d’accueil - Gabarit de démarrage VueDsfr' })
</script>

<template>
  <section class="fr-container fr-mb-5w">
    <LandingHero />
  </section>

  <section class="fr-container fr-mb-5w">
    <LandingPropositionValeur />
  </section>

  <section class="fr-container fr-mb-5w">
    <LandingFonctionnalites />
  </section>

  <section class="fr-container fr-mb-5w">
    <LandingTemoignages />
  </section>

  <section>
    <LandingContact />
  </section>
</template>
