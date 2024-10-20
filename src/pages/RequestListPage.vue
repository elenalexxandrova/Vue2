<template>
   <div class="request_list_wrapper">
      <div class="request_title">
         <span class="request_text"> Список заявок </span>
      </div>
      <div class="request_table">
         <RequestTable />
      </div>
   </div>
</template>

<script lang="ts">
import RequestTable from '../components/RequestList/RequestTable.vue'
export default {
   name: 'RequestListPage',
   components: {
      RequestTable,
   },
}
</script>

<style lang="scss">
.request_list_wrapper {
   display: flex;
   flex-direction: column;
   gap: 20px;

   .request_title {
      height: 73px;
      padding: 0px 32px;
      display: flex;
      align-items: center;
      .request_text {
         font-size: 20px;
         font-weight: 400;
         line-height: 24px;
         color: $header-text-dark-color;
      }
   }

   .request_table {
      margin: 27px 15px 0px 15px;
   }
}
</style>
