import React from "react";

import AudioBookCard from "../AudioBookCard";

import {AudioBooksContainer} from './styles';

interface IProduct{
    id: number;
    title: string;
    cover_path: string;
    author: string;
    publisher: string;
    format_type: string;
}

interface ICategories{
    id: number;
    title: string;
    products: IProduct[];
}

interface IAudioBookContainer{
    category: ICategories;
}

export default function AudioBookContainer({ category }: IAudioBookContainer){
    return(
        <AudioBooksContainer horizontal showsHorizontalScrollIndicator={false}>
            {category.products.map(product => (
                <AudioBookCard key={product.id} product={product}/>
            ))}
        </AudioBooksContainer>
    );
}