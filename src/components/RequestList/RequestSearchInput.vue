<template>
   <div class="search_wrapper">
      <div class="search_input_wrapper">
         <input
            v-model="search"
            @input="searchAppeals"
            class="search_input"
            placeholder="Поиск (№ заявки, название)"
         />
         <div class="icon_wrapper">
            <SearchIcon class="icon" />
         </div>
      </div>
      <div class="divider"></div>
   </div>
</template>

<script lang="ts">
import SearchIcon from '../../shared/assets/icons/SearchIcon.vue'
import _ from 'lodash'

export default {
   name: 'RequestSearchInput',
   components: {
      SearchIcon,
   },
   data() {
      return {
         search: '',
      }
   },
   methods: {
      searchAppeals: _.debounce(function () {
         this.$store.commit('SET_LOADING', true)
         this.$store
            .dispatch('FETCH_FROM_SEARCH_APPEALS', this.search)
            .finally(() => {
               this.$store.commit('SET_LOADING', false)
            })
      }, 1000),
   },
}
</script>

<style lang="scss">
.search_wrapper {
   padding: 8px 0;
   width: 100%;

   .search_input_wrapper {
      display: flex;
      padding-right: 12px;

      .search_input {
         padding: 10px 0 10px 0;
         width: 100%;
         font-family: 'Roboto';
         font-size: 14px;
         font-weight: 400;
         line-height: 20px;
         border: none;
         color: $text-darkest-color;
         outline: none;
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
