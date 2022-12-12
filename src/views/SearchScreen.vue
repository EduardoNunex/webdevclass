<template>
    <div class="container">
        <HeaderHome/>
        <div class="row">
            <LeftColumn/>
            <MainColumn/>
            <RightColumn/>
        </div>
    </div>


</template>


<script>
import HeaderHome from '@/components/SearchComponents/HeaderSearch.vue'
import LeftColumn from '@/components/SearchComponents/LeftColumn.vue'
import MainColumn from '@/components/SearchComponents/MainColumn.vue'
import RightColumn from '@/components/SearchComponents/RigthColumn.vue'

export default{
    components:{
        HeaderHome,
        LeftColumn,
        MainColumn,
        RightColumn
    }
}
</script>