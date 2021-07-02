import React, { useEffect, useState } from 'react';
import Card from '@/components/common/Card';
import { getBlogs } from '@/services/blogService';
import Pager from '../../common/Pager';

export default function index() {
    const [cards, setCards] = useState([]);
    const [newCards, setNewCards] = useState([]);
    const [count, setCount] = useState(0);
    const [curPage, setCurPage] = useState(1);
    useEffect(async () => {
        const result = await getBlogs();
        if (result && result.data) {
            setCards(result.data.datas);
            setCount(result.data.count);
            setNewCards(result.data.datas.slice(0, 5));
        }

        return () => {};
    }, []);
    /**
     * 需要传入的参数
     * current 当前页
     * total  总数据量
     * limit 每页放的数据量
     * pannerNumber  页码最多显示几个
     * @returns
     */

    return (
        <>
            {newCards &&
                newCards.map((el, index) => {
                    return <Card {...el} key={el.id} />;
                })}
            {
                (cards.length > 5) && 
                <Pager
                    current={curPage}
                    total={cards && cards.length}
                    limit={5}
                    pannerNumber={5}
                    onPageChange={(newPage) => {
                        setCurPage(newPage);
                        setNewCards(
                            cards.slice((newPage - 1) * 5, newPage * 5)
                        );
                    }}
                />
            }
        </>
    );
}
