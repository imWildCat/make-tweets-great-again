<template>
    <div>
        <div id="container">
            <h1>Make tweets great again!</h1>
            <p><a href="http://make-tweets-great-again.catlab.me">http://make-tweets-great-again.catlab.me</a>
                <p>
                    <div class="preview" ref="container">
                        <tweet ref="tweet" />
                    </div>
                    <data-form />
                    <el-button icon="delete" v-on:click="reset">Reset</el-button>
                    <el-button type="primary" icon="document" v-on:click="save">Save as image</el-button>
        </div>
    </div>
</template>

<script>
    import Canvas2Image from 'canvas-to-image-node';
    import html2canvas from 'html2canvas';
    import Tweet from './Tweet.vue';
    import DataForm from './DataForm.vue';

    export default {

        components: {
            Tweet,
            DataForm,
        },

        mounted() {

        },

        methods: {
            save() {
                html2canvas(this.$refs.container, {
                    onrendered: (canvas) => {
                        console.log(canvas);
                        Canvas2Image.saveAsPNG(canvas);
                    }
                });
            },
            reset() {
                this.$store.dispatch('resetState')
            }
        },
    }


</script>

<style>
    body {
        background-color: #F5F8FA;
        padding: 0;
        margin: 0;
    }
    .message {
      color: blue;
    }
    .preview {
        max-width: 550px;
        min-width: 300px;
        padding: 10px 5px 10px 5px;
    }
    #container {
        max-width: 600px;
        margin: 0 auto;
    }
    h1 {
        text-align: center;
    }
    p {
        text-align: center;
    }
</style>