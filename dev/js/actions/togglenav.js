import React, {Component} from 'react';

export default (param) => {
   if(param == 'show nav'){
      return {
         type: 'show nav',
         payload: 'on'
      }
   }

   if(param == 'hide nav'){
       return {
         type: 'hide nav',
         payload: 'off'
       }
   }
}
