<template lang="pug">
footer.footer
  .footer__block
    .container
      .row
        .footer__block-wrap
          .footer__info
            Logo.footer__logo
            p.footer__info-text Cтатьи о дизайне и искусстве, которые исследуют
              | #[br] творческие вдохновения и актуальные тенденции,
              | #[br] раскрывая мир эстетики и креативности
          .footer__contacts
            .footer__email
              p.footer__email-title email
              a.footer__email-address(href="mailto:testblogsupport@gmail.com") testblogsupport@gmail.com
            .footer__soc
              a(href="#").footer__soc-item
                img(src="/images/svg/icon-fb.svg").footer__soc-item_fb
              a.footer__soc-item(href="#")
                img(src="/images/svg/icon-vk.svg").footer__soc-item_vk
              a.footer__soc-item(href="#")
                img(src="/images/svg/icon-inst.svg").footer__soc-item_inst
              a.footer__soc-item(href="#")
                img(src="/images/svg/icon-tg.svg").footer__soc-item_tg
  FormSubscribe
</template>

<style lang="scss">
  .footer {
    border-top: .1rem solid $color-grey;

    &__block {
      padding: 5rem 0;

      @include sm-block() {
        padding: 2.5rem 0;
      }

      &-wrap {
        @include col();
        @include size(12);

        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        @include sm-block() {
          flex-direction: column;
          align-items: center;
        }
      }
    }

    &__info {
      @include sm-block() {
        text-align: center;
      }
      &-text {
        font-size: 1.4rem;
        line-height: 2rem;
        color: $color-grey;
        @include xs-block() {
          br {
            display: none;
          }
        }
      }
    }

    &__logo {
      margin-bottom: 2rem;
      @include sm-block() {
        margin-left: auto;
        margin-right: auto;
      }
    }

    &__contacts {
      margin-right: 7.5rem;
      @include md-block() {
        margin-right: 3.5rem;
      }
      @include sm-block() {
        margin-right: 0;
      }
    }

    &__email {
      &-title {
        font-size: 1.4rem;
        color: $color-grey;
        @include sm-block() {
          display: none;
        }
      }
      &-address {
        font-size: 1.8rem;
        line-height: 2.2rem;
        font-weight: $medium;
        transition: all .2s ease-out;

        @include sm-block() {
          display: inline-block;
          margin-top: 1.6rem;
        }

        &:hover {
          color: $color-blue;
        }
      }
    }

    &__soc {
      display: flex;
      margin-top: 2.4rem;
      @include sm-block() {
        margin-top: 1.8rem;
        justify-content: center;
      }
      &-item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: $color-text;
        margin-right: 2rem;
        transition: all .2s ease-out;
        
        &:hover {
          background-color: $color-blue;
        }

        &:last-child {
          margin-right: 0;
        }

        &_fb {
          width: 1.3rem;
          position: relative;
          top: .4rem;
          right: .1rem;
        }
        &_vk {
          width: 1.6rem;
        }
        &_inst {
          width: 1.6rem;
        }
        &_tg {
          width: 1.6rem;
          position: relative;
          right: .1rem;
        }
      }
    }
  }
</style>
<script setup lang="ts">
</script>