<template lang="pug">
header.header
  Logo
</template>

<style lang="scss">
  .header {
    display: flex;
    justify-content: center;
    padding: 2.5rem 0;
    margin-bottom: 3rem;

    @include sm-block() {
      margin-bottom: 1rem;
    }

    @include xs-block() {
      margin-bottom: 0;
    }
  }
</style>