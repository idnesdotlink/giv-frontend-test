<template>
  <div class="task">
    <vue-markdown
      ref="wow"
      :source="md"
      lang-prefix="language-"
    ></vue-markdown>
  </div>
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/components/prism-json'
import 'prismjs/themes/prism-tomorrow.css'
import VueMarkdown from '../components/markdown2'
import prettier from 'prettier/standalone'
import parserMarkdown from 'prettier/parser-markdown'
import Vue from 'vue'

export default {
  name: 'task',
  components: {
    'vue-markdown': VueMarkdown
  },
  mounted () {
    const md = async function () {
      let md = (await import('@/assets/task.md')).default
      let schemajson = (await import('@/assets/schema.example.json')).default
      let outputjson = (await import('@/assets/output.example.json')).default
      let img = (await import('@/assets/form.png')).default
      console.log(img)
      md = md
        .replace('{{ schemajson }}', JSON.stringify(schemajson, null, 2))
        .replace('{{ outputjson }}', JSON.stringify(outputjson, null, 2))
        .replace('{{ formpng }}', img)
      let prettyMD = prettier.format(md, {
        parser: 'markdown',
        plugins: [parserMarkdown]
      })
      return prettyMD
    }
    md().then(pmd => {
      this.md = pmd
      Vue.nextTick(() => {
        const code = this.$refs.wow.$el.querySelectorAll('code')
        let i
        for (i = 0; i < code.length; ++i) {
          console.log(code[i])
          Prism.highlightElement(code[i])
        }
      })
    })
  },
  data () {
    return {
      md: ''
    }
  }
}
</script>

<style lang="scss">
.task {
  // color: blue;
  h1 {
    font-weight: bold;
    text-align: center;
  }
  padding: 10px;
  pre {
    background-color: #282c34;
    color: white;
    padding: 10px;
    margin: 10px;
  }
  ul {
    list-style-type: disc;
    margin: 10px;
    padding: 10px;
  }
  ol {
    margin: 10px;
    padding: 10px;
  }
}
</style>
