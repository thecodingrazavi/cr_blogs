import React, { useEffect, useState } from 'react'
import { getComments } from '@/services';
import moment from 'moment';
import parse  from 'html-react-parser';
import { Comment } from 'postcss';

const Comments = ({ slug }) => {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug)
      .then((result) => setComments(result))
  }, []);
  

  return (
    <>
      {Comment.length > 0 && (
        <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
          <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
            {comments.length}
            {' '}
            Comments
          </h3>
          {comments.map((comment) => (
            <div key={comment.createdAt} className='mb-4 pb-4 border-b border-gray-100'>
              <p className='mb-4'>
                <span className='font-semibold'>{comment.name}</span>
                {' '}
                on
                {' '}
                {moment(comment.createdAt).format('MMM DD, YYYY')}
              </p>
              <p className='w-full whitespace-pre-line text-gray-600'>
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comments