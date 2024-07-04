'use client'
import { useState } from 'react';

import Link from "next/link"
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import firebaseApp from '@/lib/firebaseConfig';

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [words, setWords] = useState([]);

  const db = getFirestore(firebaseApp);

  const searchForWord = async (word) => {
    word = word.toLowerCase();
    //const result = query(collection(db, "words"), where("english", "==", word));

    const createQueryForField = (field) =>
      query(
        collection(db, "words"),
        where(field, ">=", searchKeyword),
        where(field, "<", nextKeyword)
      );
    result = createQueryForField("english")


    const wordsSnapshot = await getDocs(result);
    const words = wordsSnapshot.docs.map((doc) => doc.data());
    setWords(words);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    await searchForWord(searchTerm);
  };

  return (
      <div>
         <header
        className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white py-4 px-6 flex items-center justify-between">
        <h3 className="text-2xl font-bold font-verdana">
          Sander Rasmussen
        </h3>
        <nav className="flex gap-4">
          <Link className="hover:underline font-verdana" href="/">
            Home
          </Link>
          <Link className="hover:underline font-verdana" href="/projects">
            Projects
          </Link>
          <Link className="hover:underline font-verdana" href="/about">
            About
          </Link>
          <Link className="hover:underline font-verdana" href="/contact">
            Contact
          </Link>
        </nav>
      </header>

      <div className="flex justify-center items-center min-h-screen flex-col bg-cover  " 
      style={{
        backgroundImage: `url('/magicstudio-art(1).jpg')`
        }}>
      
          <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white'>Minimalists english-chinese dictionary</h1>
        <form onSubmit={handleSearchSubmit} className="w-full max-w-xs " >
       
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Enter a word"
          />
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded w-full"
          >
            Search
          </button>
        </form>
  
        <ul className="mt-4 w-full max-w-xs">
      {words.length > 0 ? (
        words.map((word, index) => (
          <li key={index} className="bg-slate-800 rounded-lg shadow px-4 py-2 mt-2">
            {word.simplified} {word.pinyin} : {word.english}
          </li>
        ))
      ) : (
        <li className="bg-slate-800 rounded-lg shadow px-4 py-2 mt-2">
          Sorry, either this word is not in the database or the daily database limit is reached.
        </li>
      )}
    </ul>
      </div>
      </div>
    );
  }