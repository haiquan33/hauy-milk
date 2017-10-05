import {createStore} from 'redux';

const defaultState={
    bill:null,
    totalCost:0,
    Room:0
};


const reducer =(state=defaultState, action)=>{
      switch (action.type){
          case 'SET_ROOM':
            return {...state, Room:action.Room};
          case 'ADD_ITEM':
            return state;
          default: return state;
      }
};


const store= createStore(reducer);

export default store;
