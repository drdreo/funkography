<template>
  <header class="navbar">
    <div class="navbar__brand">
      Funky Funkwalter
    </div>
    <nav class="navbar__links">
      <a class="navbar__links-entry">Work</a>
      <a class="navbar__links-entry">About</a>
      <a class="navbar__links-entry">Contact</a>
      <a class="navbar__links-entry">Insta</a>
    </nav>

  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="scss">
.navbar {

  width: 100%;
  display: flex;
  justify-content: space-between;

  padding: var(--spacing-md);
  font-size: var(--navbar-font-size);

  &__brand {
    font-size: var(--navbar-brand-font-size);
  }

  &__links {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    align-items: center;

    &-entry {
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }

      &:not(:last-child) {
        margin-right: var(--spacing-sm);
      }
    }

  }
}


</style>
