import React from "react";
import { Text } from 'react-native';

interface IProduct{
    route: {
        params: {
            product: {
                id: number;
                title: string;
                cover_path: string;
                author: string;
                publisher: string;
                format_type: string;
            }
        }
    }
}

export default function Product({route}: IProduct){
    const { product } = route.params;

    return(
        <Text>{product.title}</Text>
    );
}