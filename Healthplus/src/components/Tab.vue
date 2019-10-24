<template>
    <div>
        <div v-show="isActive" >
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'tab',
    props: {
        name: {required : true},
        selected: {default : false}
    },
    data(){
        return{
            isActive : false,
        }
    },
    computed: {
       href(){
           return "#" + this.name.toLowerCase()
    }
    },
    mounted(){
        this.isActive = this.selected;
    }
    
}
</script>


<style scoped>

</style>