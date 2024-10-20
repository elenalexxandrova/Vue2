<template>
   <div class="select_wrapper">
      <div class="select_n_icon_wrapper">
         <select
            v-model="selected_premise_id"
            class="select_element"
            placeholder="Поиск (№ заявки, название)"
         >
            <option class="select_placeholder" disabled value="">Дом</option>
            <option
               v-for="premise in user_premises"
               :key="premise.id"
               :value="premise.id"
            >
               {{ premise.title }}
            </option>
         </select>
         <div class="icon_wrapper">
            <DownSelectIcon class="icon" />
         </div>
      </div>
      <div class="divider"></div>
   </div>
</template>

<script lang="ts">
import DownSelectIcon from '../../shared/assets/icons/DownSelectIcon.vue'
import { appeals } from '../../services/api'
import _ from 'lodash'

export default {
   name: 'RequestSelect',
   components: {
      DownSelectIcon,
   },
   data() {
      return {
         page_size: 10,
         page: 1,
         user_premises: [],
         selected_premise_id: '',
      }
   },
   created() {
      appeals.fetchUserPremises().then(({ data }) => {
         this.user_premises = data.results
      })
   },
   watch: {
      selected_premise_id: {
         handler: 'searchByPremiseAppeals',
      },
   },
   methods: {
      searchByPremiseAppeals: _.debounce(function () {
         this.$store.commit('SET_LOADING', true)

         this.$store
            .dispatch('FETCH_BY_PREMISE_APPEALS', {
               page_size: this.page_size,
               page: this.page,
               premise_id: this.selected_premise_id,
            })
            .finally(() => {
               this.$store.commit('SET_LOADING', false)
            })
      }, 300),
   },
}
</script>

<style lang="scss">
.select_wrapper {
   padding: 8px 0px;
   width: 100%;

   .select_n_icon_wrapper {
      display: flex;
      padding-right: 12px;

      .select_element {
         padding: 10px 0 10px 0;
         width: 100%;
         border: none;
         outline: none;
         appearance: none;

         option {
            font-family: 'Roboto';
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
         }

         //  option:disabled {
         //     color: $text-grey-color;
         //  }
      }

      .icon_wrapper {
         height: 40px;
         .icon {
            padding: 8px 0px;
         }
      }
   }

   .divider {
      margin-top: 7px;
      height: 1px;
      width: 100%;
      background-color: $border-light-grey-color;
   }
}
</style>
