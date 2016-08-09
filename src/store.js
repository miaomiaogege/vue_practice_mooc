const STORAGE = 'todolist';
export default {
    setDate: function (items) {
        window.localStorage.setItem(STORAGE,JSON.stringify(items)||"[]");
    },
    getDate: function() {
        return JSON.parse(window.localStorage.getItem(STORAGE));
    }
}