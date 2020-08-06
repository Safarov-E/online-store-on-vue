export default {
    state: {
        info: [
            {
                name: 'Name',
                value: '',
                pattern: /^[a-zA-Z ]{2,30}$/
            },
            {
                name: 'Phone',
                value: '',
                pattern: /^[0-9]{7,14}$/
            },
            {
                name: 'Email',
                value: '',
                pattern: /.+/
            }
        ],
        controls: [],
        done: 0,
        formSubmited: false,
        loading: false
    },
    getters: {
        info(state) {
            return state.info
        },
        controls(state) {
            return state.controls
        },
        done(state) {
            return state.done
        },
        formSubmited(state) {
            return state.formSubmited
        },
        loading(state) {
            return state.loading
        }
    },
    mutations: {
        doneState(state, dispatch) {
            state.done = dispatch;
        },
        formSubmited(state) {
            state.formSubmited = true;
        },
        orderSend(state) {
            state.loading = true
        }
    },
    actions: {
        sendOrder(store) {
            store.commit('orderSend');
            setTimeout(() => {
                store.commit('formSubmited')
            }, 2000)
        }
    }
}