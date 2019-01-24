import React, {Component} from 'react';

export default (state = null, action) => {
     switch(action.type){
        case 'show nav':
           return  Object.assign({}, state, {
                                              showNav: action.payload,
                                              hideNav:  'off'
                   });
                   break;

        case 'hide nav':
            return Object.assign({}, state, {
                                              showNav: 'off',
                                              hideNav: action.payload
                   });
                   break;
     }

     return {
         showNav: 'showNav',
         hideNav: 'hideNav'
     };
}
