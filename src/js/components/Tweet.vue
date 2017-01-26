<template>
    <div class="tweet">
        <img class="avatar" ref="avatar" alt="avatar">
        <input type="hidden" v-model="avatar" />
        <div class="right-column">
            <strong>{{nickname}}</strong>
            <span class="meta"><s>@</s><b>{{atName}}</b> 
                <small class="time"><span>{{time}}{{timeUnit}}</span></small>
            </span>
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
            <div class="content">
                {{content}}
            </div>
            <div class="buttons">
                <span class="item"><i class="fa fa-reply" aria-hidden="true"></i><span class="count">{{reply}}</span></span>
                <span class="item"><i class="fa fa-retweet" aria-hidden="true"></i><span class="count">{{retweet}}</span></span>
                <span class="item"><i class="fa fa-heart" aria-hidden="true"></i><span class="count">{{like}}</span></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return { avatarURL: '' };
        },
        methods: {
            getState() {
                return this.$store.state;
            },
            updateAvatar() {
                const url = this.avatarURL;
                function toDataUrl(url, callback) {
                    var xhr = new XMLHttpRequest();
                    xhr.responseType = 'blob';
                    xhr.onload = function () {
                        var reader = new FileReader();
                        reader.onloadend = function () {
                            callback(reader.result);
                        }
                        reader.readAsDataURL(xhr.response);
                    };
                    xhr.open('GET', url);
                    xhr.send();
                }
                const self = this;
                toDataUrl(url, function (base64Img) {
                    self.$refs.avatar.setAttribute('src', base64Img);
                });
            },
            simplifyNumber(num) {
                const n = Number(num);
                if (n >= 1000) {
                    return (n / 1000).toFixed(1) + 'K';
                } else {
                    return n;
                }
            }
        },
        computed: {
            nickname() { return this.getState().nickname },
            atName() { return this.getState().atName },
            content() { return this.getState().content },
            avatar() {
                const avatar = this.getState().avatar;
                this.avatarURL = avatar;
                this.updateAvatar();
                return avatar;
            },
            time() { return this.getState().time },
            timeUnit() { return this.getState().timeUnit.substr(0, 1); },
            reply() { return this.simplifyNumber(this.getState().reply); },
            retweet() { return this.simplifyNumber(this.getState().retweet); },
            like() { return this.simplifyNumber(this.getState().like); },
        }
    }
</script>

<style>
    .tweet {
        border: 1px solid rgb(225, 232, 237);
        padding: 9px 12px 9px 12px;
        overflow: hidden;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        color: #292f33;
        background-color: white;
        margin: 10px;
    }
    .tweet:hover {
        background-color: #f5f8fa;
    }
    @media (max-width: 435px) {
        .tweet {
            margin: 0 -50px;
            width: 450px;
            transform: scale(0.60, 0.60);
        }
    }
    @media (max-width: 400px) {
        .tweet {
            margin: 0 -75px;
        }
    }
    .avatar {
        width: 48px;
        height: 48px;
        border-radius: 5px;
        float: left;
    }
    .right-column {
        margin-left: 58px;
    }

    strong {
        font-size: 14px;
    }

    .meta {
        font-size: 13px;
        color: #8899a6;
    }
    s {
        text-decoration: none;
    }

    b {
        font-weight: normal;
    }

    .time:before {
        content: "\00b7";
    }

    .time span {
        padding-left: 5px;
        font-size: 13px;
    }

    .time span:hover {
        text-decoration: underline;
    }

    .content {
        font-size: 16px;
        line-height: 22px;
        font-weight: 400;
    }

    .fa {    
        color: #aab8c2;
    }
    .fa:hover {
        color: #0D5B73 !important;
    }
    .fa.fa-chevron-down {
        font-size: 12px;
        float: right;
    }

    .buttons {
        margin-top: 10px;
        font-size: 16px;
        margin-bottom: 2px;
    }

    .buttons .item {
        width: 80px;
        display: inline-block;
    }
    .buttons .fa {
        font-weight: bold;
    }
    .buttons .fa.fa-heart {
        font-weight: normal;
    }
    .buttons .count {
        color: #aab8c2;
        font-size: 12px;
        margin-left: 10px;
        display: inline-block;
        position: relative;
        bottom: 1px;
        line-height: 12px;
        font-weight: bold;
    }

</style>