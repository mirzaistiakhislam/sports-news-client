import React from 'react';
import { FaShareAlt, FaRegBookmark } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsSummaryCard = ({ news }) => {

    const { category_id, author, details, image_url, title } = news;

    return (
        <div>
            <Card>
                <Card>
                    <div className='px-3 py-2 d-flex justify-content-between border-2px solid'>
                        <div className='d-flex flex-row align-items-center'>
                            <div>
                                <img
                                    className='rounded-circle my-auto d-block'
                                    width={50}
                                    height={50}
                                    src={author.img}
                                    alt=''
                                />
                            </div>
                            <div className='ms-2'>
                                <b>{author.name}</b> <br />
                                {author.published_date}
                            </div>
                        </div>
                        <div className='my-auto d-block'>
                            <FaShareAlt className='me-1'></FaShareAlt>
                            <FaRegBookmark></FaRegBookmark>
                        </div>
                    </div>
                </Card>
                <Card.Body>
                    <Card.Title className='text-center'>{title}</Card.Title>
                    <Image src={image_url} className='w-100 mb-2' />
                    {
                        details.length > 250 ?
                            <p>{details.slice(0, 250)}... <Link>read more</Link></p>
                            :
                            <p>{details}</p>
                    }
                </Card.Body>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;