import Vue from 'vue';
import Vuex from 'vuex';
import qs from 'qs';

Vue.use(Vuex);

// root state object.
// each Vuex instance is just a single state tree.
const hashObj = qs.parse(location.hash);
const defaultState = {
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
const state = Object.assign({}, defaultState, hashObj);


// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    updateNickname(state, nickname) {
        saveHash();
        state.nickname = nickname;
    },
    updateAtName(state, atName) {
        saveHash();
        state.atName = atName;
    },
    updateContent(state, content) {
        saveHash();
        state.content = content;
    },
    updateAvatar(state, avatar) {
        saveHash();
        state.avatar = avatar;
    },
    updateTime(state, time) {
        saveHash();
        state.time = time;
    },
    updateTimeUnit(state, timeUnit) {
        saveHash();
        state.timeUnit = timeUnit;
    },
    updateReply(state, reply) {
        saveHash();
        state.reply = reply;
    },
    updateRetweet(state, retweet) {
        saveHash();
        state.retweet = retweet;
    },
    updateLike(state, like) {
        saveHash();
        state.like = like;
    },
};

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
    resetState() {
        Object.assign(state, defaultState);
        setTimeout(() => {
            history.pushState(null, null, '/');
        }, (10));
    },
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

function saveHash() {
    const s = qs.stringify(state);
    history.pushState(null, null, `#${s}`);
}
