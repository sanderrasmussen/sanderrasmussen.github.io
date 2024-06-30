'use client'
import { useState } from 'react';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import firebaseApp from '@/lib/firebaseConfig';

export default function Dictionary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [words, setWords] = useState([]);

  const db = getFirestore(firebaseApp);

  const searchForWord = async (word) => {
    const result = query(collection(db, "words"), where("english", "==", word));
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
      // Bruk Tailwind CSS utility-klasser for å sentrere
      <div className="flex justify-center items-center min-h-screen flex-col bg-black">
        <form onSubmit={handleSearchSubmit} className="w-full max-w-xs">
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
            {word.english} : {word.simplified}, {word.pinyin}
          </li>
        ))
      ) : (
        <li className="text-white text-center pt-2 pb-2">
          Sorry, either this word is not in the database or the daily database limit is reached.
        </li>
      )}
    </ul>
      </div>
    );
  }