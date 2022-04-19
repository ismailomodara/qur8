<template>
  <no-ssr>
    <Paystack
      :amount="amount"
      :firstname="name"
      :paystackkey="paystackKey"
      :reference="reference"
      :channels="['card']"
      :callback="callback"
      :close="close"
      :embed="false"
    />
  </no-ssr>

</template>

<script>
export default {
  name: 'PaystackModal',
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      paystackKey: process.env.VUE_APP_PAYSTACK_KEY,
      name: 'Sheriff'
    }
  },
  computed: {
    amount() {
      return this.book ? this.book.price * 100 : 0;
    },
    reference () {
      const date = new Date()
      const fullDate = `${date.getDate()}${date.getMonth() + 1}${date.getHours()}${date.getMinutes()}`
      return `QUR-8-${fullDate}`
    }
  },
  methods: {
    callback (response) {
      if (response.status === 'success') {
        this.close(true)
      }
    },
    close (successStatus) {
      this.$emit('close', !!successStatus)
    }
  }
}
</script>
