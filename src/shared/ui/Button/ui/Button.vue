<template>
    <button class="button_wrapper">
       <span class="button_text">
          <slot />
       </span>
    </button>
 </template>
 
 <style lang="scss">
 .button_wrapper {
    cursor: pointer;
    border: none;
    border-radius: 4px;
    padding: 12px 16px;
    background-color: $green-main-color;
    box-shadow: 0px 4px 4px 0px $green-shadow-color;
    display: flex;
    justify-content: center;
    align-items: center;
 
    .button_text {
       font-family: 'Roboto';
       font-size: 14px;
       font-weight: 400;
       line-height: 20px;
       text-align: center;
       color: #ffffff;
    }
 }
 </style>
 