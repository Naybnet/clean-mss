<template>
  <section>
    <div class="fr-container">
      <h2>Nous contacter</h2>
      <p>
        Vous souhaitez en savoir plus sur Mon Suivi Social ? Envoyez-nous un
        mail à
        <NuxtLink
          to="mailto:monsuivisocial@anct.gouv.fr"
          class="fr-link fr-link--icon-left fr-icon-mail-line"
        >
          monsuivisocial@anct.gouv.fr
        </NuxtLink>.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@gouvfr/dsfr/module/media-query' as dsfr-media-query;

section {
  background-color: var(--background-alt-blue-france);

  > div {
    padding-block: 2.5rem 10rem;

    @include dsfr-media-query.respond-from('xl') {
      padding-block: 2.5rem 2.5rem;
    }

    background-image: url('~/assets/landing/contact.svg');
      background-repeat: no-repeat;
      background-position: bottom right;
  }
}
</style>
