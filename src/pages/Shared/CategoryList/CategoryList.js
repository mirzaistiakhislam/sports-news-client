import React, { useEffect, useState } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const CategoryList = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/news-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2>Categories: {categories.length}</h2>
            <div>
                {
                    categories.map(category => <ListGroup key={category.id}>
                        <ListGroupItem action variant="dark">
                            <Link to={`/news-category/${category.id}`}>{category.name}</Link>
                        </ListGroupItem>
                    </ListGroup>)
                }
            </div>
        </div>
    );
};

export default CategoryList;