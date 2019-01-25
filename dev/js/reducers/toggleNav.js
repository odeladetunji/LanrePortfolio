import React, {Component} from 'react';

export default (state = null, action) => {
     switch(action.type){
        case 'show nav':
           return  Object.assign({}, state, {
                                              showNav: action.payload,
                                              hideNav:  'off',
                                              showBar: 'off'
                   });
                   break;

        case 'hide nav':
            return Object.assign({}, state, {
                                              showNav: 'off',
                                              hideNav: action.payload,
                                              showBar: 'on'
                   });
                   break;
     }

     return {
         showNav: 'showNav',
         hideNav: 'hideNav'
     };
}
