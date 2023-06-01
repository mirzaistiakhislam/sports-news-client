import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';

const NewsDetails = () => {

    const newsDetails = useLoaderData();
    const { author, title, details, image_url } = newsDetails;

    return (
        <div>
            <Card>
                <Card.Header className="text-muted">
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
                </Card.Header>
                <Card.Body>
                    <Card.Title className="text-center">{title}</Card.Title>
                    <Image src={image_url} className='w-100 mb-2' />
                    <Card.Text>{details}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default NewsDetails;