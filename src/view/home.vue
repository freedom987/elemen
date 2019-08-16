<template>
    <main>
        <vheader class="head"></vheader>
        <nav>
            <div>商品</div>
            <div>评论</div>
            <div>商家</div>
        </nav>
        <goods class="goods"></goods>
    </main>
</template>

<script>
import vheader from '../components/vheader'
import goods from '../components/goods.vue'
export default {
    name: 'home',
    data(){
        return{

        }
    },
    components: {
        'vheader': vheader,
        'goods' : goods,
    }
};
</script>

<style lang="less" scoped>
main{
    width:100vw;
    height: 100vh;
    // overflow:hidden;
    display:flex;
    flex-direction: column;
    .head{
        height: 130px;
    }
    nav{
        border-bottom:1px solid #eee;
        font-Size:15px;
        display:flex;
        height:40px;
        div{
        flex:1;
        display:flex;
        justify-content:center;
        align-items:center;
        }
    .goods{
        flex:1;
    }

    }
}
</style>

