import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const NewsCategory = () => {

    const newsCategory = useLoaderData();

    return (
        <div>
            <h2>Number of News: {newsCategory.length}</h2>
            {
                newsCategory.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default NewsCategory;