<template>
    <div>
        <div>
        <div  class="tabs">
             <ul>
                <li  v-for="tab in tabs" :key="tab" :class="{ 'is-active' : tab.isActive}"> 
                    <a :href="tab.href" @click="selectTab(tab)" > {{tab.name}} </a> 
                </li>
             </ul>
        </div>
        <div class="tab-details">
            <slot></slot>
        </div> 
    </div>
    </div>
</template>

<script>
export default {
    name:'tabs',
    data(){
        return {tabs : [],
        
        };
    },
    created(){
        this.tabs = this.$children
    },
    methods:{
        selectTab(selectedTab){
            this.tabs.forEach(tab => {
                tab.isActive = (  tab.name == selectedTab.name  )
            })
        }
    }
    
}
</script>


<style scoped>
.tabs ul {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom-color: white;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: space-around;
}
.tabs li.is-active a {
    border-bottom-color: red;
    color: #2dc4b6;
    border-bottom-width: unset;
    width: 100%;
}
.tabs a {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom-color: #dbdbdb;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    color: #2dc4b6;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-bottom: -1px;
    padding: 5px 3pc;
    vertical-align: top;
}
</style>