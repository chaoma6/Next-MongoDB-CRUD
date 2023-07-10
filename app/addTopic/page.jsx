'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddTopic = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert('Title and description are required');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/topics', {
        method: 'POST',
        headers: { contentType: 'application/json' },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push('/');
      } else {
        throw new Error('Failed to add topic');
      }
    } catch (error) {
      console.log('Error adding topic:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
      <input
        type='text'
        className='border boder-slate-500 px-8 py-2'
        placeholder='Topic text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type='text'
        className='border boder-slate-500 px-8 py-2'
        placeholder='Topic Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        type='submit'
        className='bg-green-600 text-white font-bold py-3 px-6 w-fit'
      >
        Add Topic
      </button>
    </form>
  );
};

export default AddTopic;
