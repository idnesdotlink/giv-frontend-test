<template>
  <select>
    <slot></slot>
  </select>
</template>

<script>
import JQuery from 'jquery'
import 'select2'
let $ = JQuery
export default {
  props: ['options', 'value'],
  mounted: function () {
    var vm = this
    $(this.$el)
      // init select2
      .select2({ data: this.options })
      .val(this.value)
      .trigger('change')
      // emit event on change.
      .on('change', function () {
        vm.$emit('input', this.value)
      })
  },
  watch: {
    value: function (value) {
      // update value
      $(this.$el)
        .val(value)
        .trigger('change')
    },
    options: function (options) {
      // update options
      $(this.$el)
        .empty()
        .select2({ data: options, minimumResultsForSearch: Infinity })
    }
  },
  destroyed: function () {
    $(this.$el)
      .off()
      .select2('destroy')
  }
}
</script>

<style lang="scss">
@charset "utf-8";
@import '~bulma/bulma';

.select2-container {
  box-sizing: border-box;

  display: inline-block;
  margin: 0;
  position: relative;
  vertical-align: middle;

  @import '~select2/src/scss/single';
  @import '~select2/src/scss/multiple';
}

@import '~select2/src/scss/dropdown';

.select2-close-mask {
  border: 0;
  margin: 0;
  padding: 0;
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  min-height: 100%;
  min-width: 100%;
  height: auto;
  width: auto;
  opacity: 0;
  z-index: 99;

  // styles required for IE to work

  background-color: #fff;
  filter: alpha(opacity=0);
}

.select2-hidden-accessible {
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
}

@import '~select2/src/scss/theme/default/layout';
@import '~select2/src/scss/theme/classic/layout';

.select2-container .select2-selection--single {
  height: 32px;
}

.select2-container:focus,
.select2-container--default.select2-container--focus
  .select2-selection--single:focus {
  outline: none;
}

.select2-container--default
  .select2-selection--single
  .select2-selection__rendered {
  line-height: 32px;
}

.select2-container--default .select2-selection--single {
  background-color: white;
  border-color: #dbdbdb;
  border-radius: 4px;
  color: #363636;
}

.select2-container--default.select2-container--focus
  .select2-selection--single {
  border-color: #3273dc;
}

.select2-container--default
  .select2-selection--single
  .select2-selection__arrow {
  height: 30px;
}

.select2-wrapper {
  .select2-container--default {
    .select2-selection-single {
      border-color: #00d1b2;
    }
  }

  .select2-container {
    .select2-selection {
      transition: border-color $speed;
      font-family: $family-sans-serif;
      height: 2.285em;
      line-height: 1.5;
      font-size: 1rem;
      outline: none !important;
      display: inline-flex;
      align-items: center;
      width: 100%;
      border-color: $border;
      border-radius: $radius;
      &:hover {
        border-color: $border-hover;
      }
      .select2-selection__rendered {
        padding-left: 0.75em;
        padding-right: 0.75em;
      }
      .select2-selection__arrow {
        height: 100%;
        top: 0px;
      }
    }

    &.select2-container--open {
      .select2-selection {
        border-color: $primary;
        &:hover {
          border-color: $primary;
        }
      }
    }
  }

  &.is-medium {
    .select2-container {
      .select2-selection {
        font-size: $size-5;
      }
    }
  }
  &.is-large {
    .select2-container {
      .select2-selection {
        font-size: $size-4;
      }
    }
  }
}

.select2-container {
  .select2-dropdown {
    border-color: $primary;

    .select2-search {
      margin: 10px;
      .select2-search__field {
        @extend .input;
        border-radius: $radius !important;
      }
    }

    .select2-results__options {
      max-height: 210px;
      .select2-results__option {
        padding: 0.75em;
        font-family: $family-sans-serif;
        font-size: 1rem;

        &.select2-results__option--highlighted {
          background: $primary;
        }
      }
    }
  }
}

.select2-search {
  display: none;
}
</style>
