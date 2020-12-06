<template>
  <div @click.stop="">
    <div class="w-full h-full" ref="trigger">
      <slot name="trigger" :hide="hide" :show="show" :open="open" />
    </div>
    <div class="w-full h-full mt-1" ref="content" @click="clickActions">
      <slot name="content" :hide="hide" :show="show" :open="open" />
    </div>
  </div>
</template>

<script>
import tippy from 'tippy.js'

export default {
  props: {
    position: {
      type: String,
      default: 'bottom-end',
    },
    maxWidth: [Number, String],
    zIndex: {
      type: Number,
      default: 10,
    },
    minWidth: Number,
    fullWidth: {
      type: Boolean,
      default: true,
    },
    trigger: {
      type: String,
      default: 'click',
    },
    offset: {
      type: Array,
      default: () => [0, 0],
    },
    popperOptions: {
      type: Object,
      default: null,
    },
    popperStrategy: {
      type: String,
      default: 'fixed',
    },
    autoClose: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      open: false,
      drop: null,
    }
  },

  computed: {
    internalPopperOptions() {
      return {
        strategy: this.popperStrategy,
        modifiers: [
          {
            name: 'flip',
            phase: 'main',
            options: {
              fallbackPlacements: ['top'],
            },
          },
          {
            name: 'sameWidth',
            enabled: this.fullWidth,
            fn: ({ state }) => {
              state.styles.popper.minWidth = this.minWidth
                ? `${this.minWidth}px`
                : `${state.rects.reference.width}px`
            },
            phase: 'beforeWrite',
            requires: ['computeStyles'],
            effect: ({ state }) => {
              state.elements.popper.style.minWidth = this.minWidth
                ? `${this.minWidth}px`
                : `${state.elements.reference.clientWidth}px`
            },
          },
        ],
      }
    },
  },

  mounted() {
    const that = this
    this.drop = tippy(this.$refs.trigger, {
      placement: this.position,
      interactive: true,
      content: this.$refs.content,
      trigger: this.trigger,
      maxWidth: this.maxWidth,
      zIndex: this.zIndex,
      offset: this.offset,
      popperOptions: this.popperOptions || this.internalPopperOptions,
      onMount(i) {
        that.onOpen(i)
      },
      onHide(i) {
        that.onHide(i)
      },
    })
  },

  methods: {
    onOpen(i) {
      this.$emit('open', i)
      this.open = true
    },

    onHide(i) {
      this.$emit('close', i)
      this.open = false
    },

    hide() {
      this.drop ? this.drop.hide() : null
    },

    show() {
      this.drop ? this.drop.show() : null
    },

    async clickActions() {
      await this.$nextTick()
      if (this.autoClose && this.drop) {
        this.drop.hide()
      }
    },
  },
}
</script>
