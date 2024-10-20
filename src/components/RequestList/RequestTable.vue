<template>
   <div class="request_table_wrapper">
      <Button class="create_button"> СОЗДАТЬ </Button>
      <div class="search_n_select">
         <RequestSearchInput />
         <RequestSelect />
      </div>
      <table
         v-if="!isLoading && Array.isArray(appealsList) && appealsList.length"
      >
         <tr class="table_head">
            <th style="width: 100px">№</th>
            <th style="width: 150px">Создана</th>
            <th style="width: 200px">Адрес</th>
            <th style="width: 200px">Заявитель</th>
            <th style="width: 260px">Описание</th>
            <th style="width: 150px">Срок</th>
            <th style="width: 150px">Статус</th>
         </tr>
         <tr v-for="appeal in appealsList" :key="appeal.id" class="table_body">
            <td>
               <Button class="table_button"> {{ appeal.number }}</Button>
            </td>
            <td>{{ formatDate(appeal.created_at) }}</td>
            <td>
               {{ appeal.premise?.address }}, {{ appeal.apartment?.label }}
            </td>
            <td>
               {{
                  formatFIO(
                     appeal.applicant.first_name,
                     appeal.applicant.last_name,
                     appeal.applicant.patronymic_name,
                  )
               }}
            </td>
            <td>{{ appeal.description }}</td>
            <td>{{ formatDateTime(appeal.due_date) }}</td>
            <td>{{ appeal.status.name }}</td>
         </tr>
      </table>
      <div v-else-if="isLoading">Загрузка...</div>
      <div v-else>Нет данных по вашему запросу</div>
      <div class="pagination"></div>
   </div>
</template>

<script lang="ts">
import Button from '../../shared/ui/Button/ui/Button.vue'
import RequestSearchInput from './RequestSearchInput.vue'
import RequestSelect from './RequestSelect.vue'
import { mapState } from 'vuex'
import moment from 'moment'
import { formatFIO } from '../../shared/lib/formatFIO'

export default {
   name: 'RequestTable',
   components: {
      Button,
      RequestSearchInput,
      RequestSelect,
   },
   data() {
      return {
         page_size: 10,
         page: 1,
      }
   },
   computed: {
      ...mapState(['appealsList', 'isLoading']),
   },
   methods: {
      formatDate(date: string ): string {
         return date ? moment(date).format('DD.MM.YYYY') : ''
      },
      formatDateTime(datetime: string ) {
         return datetime ? moment(datetime).format('DD.MM.YYYY hh:mm') : ''
      },
      formatFIO,
   },
   created() {
      this.$store.commit('SET_LOADING', true)
      this.$store
         .dispatch('FETCH_ALL_APPEALS', {
            page_size: this.page_size,
            page: this.page,
         })
         .then(() => {
            this.$store.commit('SET_LOADING', false)
         })
   },
}
</script>

<style lang="scss">
.request_table_wrapper {
   display: flex;
   flex-direction: column;
   gap: 32px;
   padding: 10px 20px;
   border-radius: 8px;
   background-color: #fff;

   .create_button {
      margin-left: auto;
      height: 26px;
      border-radius: 2px;
      padding: 10px 16px 10px 16px;

      .button_text {
         font-size: 10px;
         font-weight: 400;
         line-height: 11.72px;
      }
   }

   .search_n_select {
      display: flex;
      gap: 15px;
   }

   table {
      width: 100%;
      table-layout: fixed;
      border-collapse: collapse;
      .table_head {
         height: 44px;
         th {
            border-bottom: 1px solid $border-table-grey-color;
            font-weight: 400;
            padding: 12px 8px 12px 8px;
            text-align: start;
            color: $green-main-color;
         }
      }
      .table_body {
         height: 58px;
         td {
            border-bottom: 1px solid $border-table-grey-color;
            padding: 19px 0 19px 8px;
         }
         td:first-child {
            padding: 15px 0px 15px 4px;
         }
         .table_button {
            height: 28px;
            padding: 4px 14.5px;
         }
      }
      th,
      td {
         box-sizing: border-box;
         white-space: nowrap;
         overflow: hidden;
         text-overflow: ellipsis;
      }
   }

   .pagination {
   }
}
</style>
