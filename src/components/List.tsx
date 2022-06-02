import React, {FC} from 'react';

interface ListProps <T>{
    items: T[];
    renderItem: (item: T) => JSX.Element;
}
export  default function List <T> (props: ListProps<T>) {
    return (
        <div style={{marginTop:"20px"}}>
            {
                props.items.map(props.renderItem)
            }
        </div>)
}