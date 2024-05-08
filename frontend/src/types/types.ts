
export interface AuthResponseError {
    body: {
        error: string;
    };
}

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}
export type CartItem = {
    id?: number;
    cantidad: number;
    product_id: number;
    user_id: number;
    amount: number;
    };
    export type CartContextType = {
        cartItems: CartItem[],
        dispatch: React.Dispatch<CartActionReducer>
    }
// export type ProductItem = {
//     id: number;
//     name: string;
//     image: string;
//     price: number;
//     description: string;
//     category: string;
//     brand: string;
//     user_id?:number;
//   };

//   export type ProductListProps ={
//     products: ProductItem;
//   }

  export type PayAddress = {
    id: number;
    user_id: number;
    cp: number;
    colonia: string;
    estado: string;
    ciudad: string;
    num_ext: string;
    pais: string;
  }


    export type CartActionReducer = {
        payload: any;
        type: 'ADD' | 'REMOVE' | 'REMOVE-ALL' | 'CLEAR';
    }

