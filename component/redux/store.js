import { createStore } from 'redux';

const defaultState = {
  bill: null,
  totalCost: 0,
  Room: 0,
  ItemList:
  [
    {
      id: 1,
      name: 'SỮA ĐẬU NÀNH ',
      price: 5000,
      des: 'thom ngon bo duong',
      is_none_sugar_choiced: true,
      none_sugar_quantity: 0,
      have_sugar_quantity: 0,
    },
    {
      id: 2,
      name: 'SỮA ĐẬU XANH',
      price: 5000,
      des: 'thom ngon bo duong',
      is_none_sugar_choiced: false,
      none_sugar_quantity: 0,
      have_sugar_quantity: 10,
    },
    {
      id: 3,
      name: 'SỮA MÈ ĐEN',
      price: 5000,
      des: 'thom ngon bo duong',
      is_none_sugar_choiced: true,
      none_sugar_quantity: 0,
      have_sugar_quantity: 0,
    },
    {
      id: 4,
      name: 'SỮA BẮP',
      price: 5000,
      des: 'thom ngon bo duong',
      is_none_sugar_choiced: true,
      none_sugar_quantity: 0,
      have_sugar_quantity: 0,
    },
    {
      id: 5,
      name: 'SỮA GẠO',
      price: 5000,
      des: 'thom ngon bo duong',
      is_none_sugar_choiced: true,
      none_sugar_quantity: 0,
      have_sugar_quantity: 0,
    },
  ]

};


const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_ROOM':
      return { ...state, Room: action.Room };
    case 'ADD_ITEM':
      return state;
    case 'TOOGLE_NONE_SUGAR':
      return {
        ...state,
        ItemList: state.ItemList.map(e => {
          if (e.id !== action.id) return e;
          return { ...e, is_none_sugar_choiced: true };
        })
      }
    case 'TOOGLE_SUGAR':
      return {
        ...state,
        ItemList: state.ItemList.map(e => {
          if (e.id !== action.id) return e;
          return { ...e, is_none_sugar_choiced: false };
        })
      }
    case 'ADD_QUANTITY':
      return {
        ...state,
        ItemList:
        state.ItemList.map(e => {
          if (e.id != action.id) return e;
          if (e.is_none_sugar_choiced === true)
            return { ...e, none_sugar_quantity: e.none_sugar_quantity + 1 };
          else return { ...e, have_sugar_quantity: e.have_sugar_quantity + 1 };

        })
      }
    case 'DEC_QUANTITY':
      return {
        ...state,
        ItemList:
        state.ItemList.map(e => {
          if (e.id != action.id) return e;
          if (e.is_none_sugar_choiced === true) {
            if (e.none_sugar_quantity > 0) {
              return { ...e, none_sugar_quantity: e.none_sugar_quantity - 1 };
            }
            else return e;
          }

          else {
            if (e.have_sugar_quantity > 0) {
              return { ...e, have_sugar_quantity: e.have_sugar_quantity - 1 };
            }
            else return e;
          }

        })
      }
    default: return state;
  }
};


const store = createStore(reducer);

export default store;
