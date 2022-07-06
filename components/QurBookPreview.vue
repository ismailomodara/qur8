<template>
  <div>
    <el-dialog :title='book.title' :visible.sync='setShow' width='60%'>
      <div class='preview'>
        <el-button icon="el-icon-arrow-left" :disabled='page === 1' circle @click='prev'></el-button>
        <div class='preview-content'>
          <vue-pdf-embed :source="`/samples/${book.id}.pdf`" :height='600' :page='page' @loaded='setPages'/>
        </div>
        <el-button icon="el-icon-arrow-right" :disabled='page === pages' circle @click='next'></el-button>
      </div>
      <div class='actions'>
        <div class='mobile-nav'>
          <el-button icon="el-icon-arrow-left" :disabled='page === 1' circle @click='prev'></el-button>
          <el-button icon="el-icon-arrow-right" :disabled='page === pages' circle @click='next'></el-button>
        </div>
        <el-button type="primary" size='medium' @click="download">Download</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: 'QurBookPreview',
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
      page: 1,
      pages: 1
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
    }
  },
  methods: {
    setPages(e) {
      this.pages = e._pdfInfo.numPages
    },
    prev() {
      this.page = this.page - 1
    },
    next() {
      this.page = this.page + 1
    },
    download() {
      window.open(this.book.download)
    }
  }
}
</script>

<style lang='scss'>
.el-dialog {
  margin-top: 5vh !important;
  border-radius: 12px;
}

.el-dialog__title {
  color: var(--qur-green);
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1rem;
}

.preview {
  display: flex;
  justify-content: center;
  align-items: center;

  &-content {
    margin: 0 20px;
  }
}

.actions {
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 1024px) {
  .el-dialog {
    width: 70% !important;
  }
}

@media (max-width: 600px) {
  .el-dialog {
    width: 98% !important;

    &__body {
      padding: 30px 10px;
    }
  }

  .preview {
    &-content {
      margin: 0;
    }

    .el-button {
      display: none;
    }
  }
  .vue-pdf-embed {
    height: auto !important;
    width: 100% !important;

    canvas {
      height: auto !important;
      width: 100% !important
    }
  }

  .actions {
    justify-content: space-between;
  }
}
</style>
