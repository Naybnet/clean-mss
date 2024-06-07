<template>
  <div class="fr-grid-row fr-grid-row--gutters fr-grid-row--center">
    <div class="fr-col-12 fr-col-lg-5">
      <img
        src="~/assets/landing/fonctionnalites.svg"
        class="fr-responsive-img"
        alt=""
      >
    </div>

    <div class="fr-col-12 fr-col-lg-5">
      <h2 class="fr-h1">
        Mon Suivi Social
      </h2>

      <ul class="fr-mb-5v">
        <li class="fr-icon-success-fill">
          Aides légales et facultatives
        </li>
        <li class="fr-icon-success-fill">
          Statistiques
        </li>
        <li class="fr-icon-success-fill">
          Rappel des tâches
        </li>
        <li class="fr-icon-success-fill">
          Notifications entre agents
        </li>
        <li class="fr-icon-success-fill">
          Historique bénéficiaires
        </li>
        <li class="fr-icon-success-fill">
          Budget
        </li>
      </ul>

      <NuxtLink
        class="fr-btn"
        to="/register"
      >
        Enregistrer sa structure
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
ul {
    --li-bottom: 1rem;

    width: max-content;

    li {
      display: block;
      font-weight: normal;
    }

    li::before {
      color: var(--text-title-blue-france);
      margin-right: 0.5rem;
    }
  }
</style>
