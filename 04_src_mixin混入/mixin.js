export const mixin={
    methods: {
        showName() {
            alert(this.name)
        }
    },
    // 如果school里面也有mounted，不会出现要求以谁为主的现象。因为生命周期钩子是两个都要，但循序是school里的在前
    mounted() {
        console.log('你好啊');
    },
}
export const mixin2 = {
    data() {
        return {
            x:100,
            y:200
        }
    },
}