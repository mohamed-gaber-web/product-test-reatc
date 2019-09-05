import React from 'react';

export const cartItemsWithQuantity = (cartItem) => {
    return cartItem.reduce((acc, item) => {

        const filtredItem = acc.filter(item2 => item2.id === item.id);
        filtredItem !== undefined
        ? filtredItem.quantity++
        : acc.push({...item, quantity: 1})

        return acc

    }, [])
}