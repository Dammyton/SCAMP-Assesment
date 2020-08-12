<template>
    <div class="container">
         <b-breadcrumb :items="items"></b-breadcrumb>
    </div>
</template>

<script>
export default {
    name:'mhbreadcrumb',
    data() {
        return {
            items: [
                {
                    text: 'Dashboard',
                    href: '/'
                },
                {
                    text: 'Statistics',
                    active: true
                }
            ],
        }
    }
}
</script>

<style scoped>
a:hover{
    text-decoration: none;
}
</style>