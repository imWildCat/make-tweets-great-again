import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// root state object.
// each Vuex instance is just a single state tree.
const state = {
    nickname: 'Donald J. Trump',
    atName: 'realDonaldTrump',
    content: 'Make America great again!',
    avatar: 'https://pbs.twimg.com/profile_images/1980294624/DJT_Headshot_V2_400x400.jpg',
    time: getRandomInt(1, 12),
    timeUnit: 'hour',
    reply: getRandomInt(500, 19000),
    retweet: getRandomInt(500, 50000),
    like: getRandomInt(300, 5000),
};

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    updateNickname(state, nickname) {
        state.nickname = nickname;
    },
    updateAtName(state, atName) {
        state.atName = atName;
    },
    updateContent(state, content) {
        state.content = content;
    },
    updateAvatar(state, avatar) {
        state.avatar = avatar;
    },
    updateTime(state, time) {
        state.time = time;
    },
    updateTimeUnit(state, timeUnit) {
        state.timeUnit = timeUnit;
    },
    updateReply(state, reply) {
        state.reply = reply;
    },
    updateLike(state, like) {
        state.like = like;
    },
};

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
};

// getters are functions
const getters = {

};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
