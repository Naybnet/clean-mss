<script setup lang="ts">
const route = useRoute()

const serviceTitle = 'Mon suivi social'
const serviceDescription = ''
const logoText = ['République', 'Française']

const quickLinks = [
  {
    label: 'Créer un espace',
    to: '/register',
    icon: 'ri-add-line',
  },
  {
    label: 'Se connecter à son espace',
    to: '/auth/login',
    icon: 'ri-add-line',
  },
]

const skipLinks = [
  {
    id: 'content',
    text: 'Accéder au contenu',
  },
  {
    id: 'footer',
    text: 'Accéder au pied de page',
  },
]
</script>

<template>
  <DsfrSkipLinks :links="skipLinks" />
  <DsfrHeader
    :service-title="serviceTitle"
    :service-description="serviceDescription"
    :logo-text="logoText"
    :quick-links="quickLinks"
  />
  <main
    id="content"
    role="main"
    tabindex="0"
    :class="route.name || ''"
  >
    <slot />
  </main>
  <DsfrFooter
    id="footer"
    tabindex="0"
  />
</template>

<style scoped>
main {
  &.index {
  background-image: url('~/assets/landing/oval.svg');
  }

  &.register {
  background-image: url('~/assets/landing/oval-variant.svg');
  }

  background-repeat: no-repeat;
    background-position: top -20% right;
    background-size: 50%, 100%;
}
</style>
