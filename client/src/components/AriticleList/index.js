import React, { useEffect, useState } from 'react';
import Card from '@/components/common/Card';
import { getMyBlog, getBlogByLabel } from '@/services/blogService';

export default function index(props) {
    const [cards, setCards] = useState([]);
    const [count, setCount] = useState(0);
    const cs = [];
    useEffect(async () => {
        const result = await props.onAsync();
        if (result && result.data) {
            setCards(result.data);
        }
        // setCards(result.data.datas);
        // setCount(result.data.count);
        return () => {};
    }, [props.id]);

    return (
        <>
            {cards &&
                cards.map((el, index) => {
                    return <Card {...el} key={el.id} />;
                })}
        </>
    );
}
