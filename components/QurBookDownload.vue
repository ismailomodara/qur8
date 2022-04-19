<template>
  <div>
    <el-dialog :title='"Download Book"' :visible.sync='setShow' width='45%'>
      <div class='book'>
        <div v-if='book.cover' class='image'>
          <img :src='require(`~/assets/images/books/${book.cover}`)' :alt='book.title' />
        </div>
        <div class='form'>
          <el-form ref='form' :model='form' label-position='top'>
            <el-row type='flex' :gutter='20'>
              <el-col :md='12'>
                <el-form-item
                  label='First name'
                  prop='first_name'
                  :rules="{
                    required: true, message: 'Firstname is required', trigger: 'blur'
                  }">
                  <el-input v-model='form.first_name' type='text' />
                </el-form-item>
              </el-col>
              <el-col :md='12'>
                <el-form-item
                  label='Last name'
                  prop='last_name'
                  :rules="{
                    required: true, message: 'Lastname is required', trigger: 'blur'
                  }">
                  <el-input v-model='form.last_name' type='text' />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row type='flex'>
              <el-col :span='24'>
                <el-form-item
                  label='Email'
                  prop='email'
                  :rules="[
                    { required: true, message: 'Email address is required', trigger: 'blur' },
                    { type: 'email', message: 'Enter a valid email address', trigger: ['blur', 'change'] }
                  ]">
                  <el-input v-model='form.email' type='text' />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <div class='actions'>
            <el-button size='medium' @click="setShow = false">Cancel</el-button>
            <el-button type="primary" size='medium' @click="pay">Download</el-button>
          </div>
        </div>
      </div>
    </el-dialog>
    <pay-stack
      ref='paystack'
      :amount="amount"
      :email='form.email'
      :firstname="form.first_name"
      :lastname="form.last_name"
      :paystackkey="paystackKey"
      :reference="reference"
      :channels="['card']"
      :callback="callback"
      :close="close"
      :embed="false"
    />
  </div>
</template>

<script>
export default {
  name: 'QurBookDownload',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    book: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        email: ""
      },
      paystackKey: "pk_test_23410052635616385dc547e4f1790f59052cf56048",
    }
  },
  computed: {
    setShow: {
      get() {
        return this.show
      },
      set(value) {
        this.$emit("update:show", value);
      }
    },
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
    pay() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$refs.paystack.$el.click()
        } else {
          return false;
        }
      });

    },
    callback (response) {
      if (response.status === 'success') {
        this.setShow = false;
        this.close(true)
      }
    },
    close (successStatus) {
      this.$emit('close', !!successStatus)
    }
  }
}
</script>

<style lang='scss'>
.payButton {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.el-dialog {
  border-radius: 12px;
}

.el-dialog__title {
  color: var(--qur-green);
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1rem;
}

.el-form-item {
  margin-bottom: 15px;
}
.el-form--label-top .el-form-item__label {
  padding-bottom: 0;
}

.book {
  display: flex;

  .image {
    img {
      height: 220px;
      width: auto;
    }
  }

  .form {
    margin-left: 40px;
    width: 100%;
  }
}

.actions {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

@media (max-width: 1024px) {
  .el-dialog {
    width: 70% !important;
  }
}

@media (max-width: 600px) {
  .el-dialog {
    width: 92% !important;
  }

  .book {
    flex-direction: column;

    .image {
      text-align: center;
    }
    .form {
      margin-left: 0;
    }
  }
}
</style>
