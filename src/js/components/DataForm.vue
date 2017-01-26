<template>

    <div class="form-wrapper">
        <el-form :inline="false" class="demo-form-inline" label-width="100px">
            <el-form-item label="Nickname">
                <el-input v-model="nickname" placeholder="Donald J. Trump"></el-input>
            </el-form-item>
            <el-form-item label="@">
                <el-input v-model="atName" placeholder="realDonaldTrump"></el-input>
            </el-form-item>
            <el-form-item label="Avatar URL">
                <el-input v-model="avatar" placeholder="avatar url"></el-input>
            </el-form-item>
            <el-form-item label="Time">
                <el-col :span="14">
                    <el-input v-model="time" placeholder="realDonaldTrump"></el-input>
                </el-col>
                <el-col class="second" :span="9">
                    <el-select v-model="timeUnit" placeholder="Unit">
                        <el-option label="minute" value="m"></el-option>
                        <el-option label="hour" value="h"></el-option>
                        <el-option label="day" value="d"></el-option>
                    </el-select>
                </el-col>
            </el-form-item>
            <el-form-item label="Content">
                <el-input type="textarea" v-model="content" placeholder="Make America great again!"></el-input>
            </el-form-item>
            <el-form-item label="Reply">
                <el-input v-model="reply" placeholder="0"></el-input>
            </el-form-item>
            <el-form-item label="Retweet">
                <el-input v-model="retweet" placeholder="0"></el-input>
            </el-form-item>
            <el-form-item label="Like">
                <el-input v-model="like" placeholder="0"></el-input>
            </el-form-item>
        </el-form>
    </div>

</template>

<script>
    export default {
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            },
            getState() {
                return this.$store.state;
            }
        },
        computed: {
            nickname: {
                get() {
                    return this.getState().nickname;
                },
                set(value) {
                    this.$store.commit('updateNickname', value);
                }
            },
            atName: {
                get() {
                    return this.getState().atName;
                },
                set(value) {
                    this.$store.commit('updateAtName', value);
                }
            },
            content: {
                get() {
                    return this.getState().content;
                },
                set(value) {
                    this.$store.commit('updateContent', value);
                }
            },
            avatar: {
                get() {
                    return this.getState().avatar;
                },
                set(value) {
                    this.$store.commit('updateAvatar', value);
                }
            },
            time: {
                get() {
                    return this.getState().time;
                },
                set(value) {
                    this.$store.commit('updateTime', value);
                }
            },
            timeUnit: {
                get() {
                    return this.getState().timeUnit;
                },
                set(value) {
                    this.$store.commit('updateTimeUnit', value);
                }
            },
            reply: {
                get() {
                    return this.getState().reply;
                },
                set(value) {
                    this.$store.commit('updateReply', value);
                }
            },
            retweet: {
                get() {
                    return this.getState().retweet;
                },
                set(value) {
                    this.$store.commit('updateRetweet', value);
                }
            },
            like: {
                get() {
                    return this.getState().like;
                },
                set(value) {
                    this.$store.commit('updateLike', value);
                }
            },
        }
    }
</script>

<style>
    .demo::before {
        content: '@'
    }
    .demo {
        margin-left: 5px;
    }
    .form-wrapper {
        max-width: 350px;
        font-family: Helvetica, Tahoma, Arial, STXihei, "华文细黑", "Microsoft YaHei", "微软雅黑", SimSun, "宋体", Heiti, "黑体", sans-serif;
    }
    label {
        font-weight: bold;
    }
    .second {
        margin-left: 10px;
    }

</style>