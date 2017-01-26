<template>
    <div>



        <div id="container">
            <h1>Make tweets great again!</h1>
            <div class="preview" ref="container">
                <tweet ref="tweet" />
            </div>
            <data-form />
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
                console.log(this.$refs.container);
                html2canvas(this.$refs.container, {
                    onrendered: (canvas) => {
                        console.log(canvas);
                        Canvas2Image.saveAsPNG(canvas);
                    }
                });
            },
        },
    }


</script>

<style>
    .message {
      color: blue;
    }
    .preview {
        max-width: 550px;
        min-width: 300px;
        background: white;
        padding: 10px 5px 10px 5px;
    }
    #container {
        max-width: 600px;
        margin: 0 auto;
    }
    h1 {
        text-align: center;
    }
</style>