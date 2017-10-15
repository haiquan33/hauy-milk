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
      des: 'Trong sữa đậu nành chứa hàm lượng cao Genistein – đây là một chất có khả năng kéo dài quá trình lão hóa của các tế bào trong cơ thể. Việc uống sữa đậu nành điều độ sẽ mang tới làn da trắng và tươi trẻ cho các chị em và chống lão hóa lâu dài',
      is_none_sugar_choiced: true,
      current_quantity: 0,
      none_sugar_quantity: 0,
      have_sugar_quantity: 0,
    },
    {
      id: 2,
      name: 'SỮA ĐẬU XANH',
      price: 5000,
      des: 'thom ngon bo duong',
      is_none_sugar_choiced: false,
      current_quantity: 0,
      none_sugar_quantity: 0,
      have_sugar_quantity: 0,
    },
    {
      id: 3,
      name: 'SỮA MÈ ĐEN',
      price: 5000,
      des: 'thom ngon bo duong',
      is_none_sugar_choiced: true,
      current_quantity: 0,
      none_sugar_quantity: 0,
      have_sugar_quantity: 0,
    },
    {
      id: 4,
      name: 'SỮA BẮP',
      price: 5000,
      des: 'thom ngon bo duong',
      is_none_sugar_choiced: true,
      current_quantity: 0,
      none_sugar_quantity: 0,
      have_sugar_quantity: 0,
    },
    {
      id: 5,
      name: 'SỮA GẠO',
      price: 5000,
      des: 'thom ngon bo duong',
      is_none_sugar_choiced: true,
      current_quantity: 0,
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
          return { ...e, current_quantity: e.current_quantity + 1 };


        })
      }
    case 'DEC_QUANTITY':
      return {
        ...state,
        ItemList:
        state.ItemList.map(e => {
          if (e.id != action.id) return e;
          if (e.current_quantity > 0) {
            return { ...e, current_quantity: e.current_quantity - 1 };
          }
          else return e;


        })
      }

    case 'ADD_QUANTITY_ON_BILL':
      return {
        ...state,
        ItemList:
        state.ItemList.map(e => {
          if (e.id != action.id) return e;
          if (action.is_none_sugar)
            return { ...e, none_sugar_quantity: e.none_sugar_quantity + 1 };
          else return { ...e, have_sugar_quantity: e.have_sugar_quantity + 1 };


        })
      }

    //dec quantity on bill item 
    case 'DEC_QUANTITY_ON_BILL':
      return {
        ...state,
        ItemList:
        state.ItemList.map(e => {
          if (e.id != action.id) return e;
          if (action.is_none_sugar) {
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

    case 'SET_QUANTITY_ON_BILL':
      return {
        ...state,
        ItemList:
        state.ItemList.map(e => {
          if (e.id != action.id) return e;
          if (action.is_none_sugar==true)
          {
           
            return { ...e, none_sugar_quantity: action.quantity };
          }
          else return { ...e, have_sugar_quantity: action.quantity };


        })
      } 
    case 'ADD_TO_CART':
      return {
        ...state,
        ItemList:
        state.ItemList.map(e => {
          if (e.id != action.id) return e;
          if (e.is_none_sugar_choiced === true)
            return { ...e, none_sugar_quantity: e.none_sugar_quantity + e.current_quantity, current_quantity: 0 }
          else
            return { ...e, have_sugar_quantity: e.have_sugar_quantity + e.current_quantity, current_quantity: 0 }
        })
      }
    default: return state;
  }
};


const store = createStore(reducer);

export default store;
