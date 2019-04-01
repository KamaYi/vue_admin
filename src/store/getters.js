export default {
    getToken(state) {
        return state.token;
    },
    getIsShow(state) {
        return state.isShow;
    },
    breadListState(){
        return JSON.parse(sessionStorage.getItem('breadListStorage')) || [];
      }
}