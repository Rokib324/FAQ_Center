import { useRef } from 'react'
import React from 'react'
import { faqData } from '../data/faqData';


const FAQItem = ({ item, onClick, openId }) => {
  const answerRef = useRef(null)
  return (
    <div className='border-b border-gray-200 dark:border-gray-700 last:border-none transition-colors duration-300 hover:bg-gradient-to-r hover:from-gray-50/50 hover:to-transparent dark:hover:from-gray-800/50 dark:hover:to-transparent' id={`faq-item-${item.id}`}>
      
      <button className='w-full py-5 px-4 flex items-center justify-center text-left focus:outline-none rounded-lg transition-all duration-300 cursor-pointer text-gray-900 dark:text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 dark:hover:from-indigo-400 dark:hover:to-purple-400' onClick={() => onClick(item.id)}>
        <span className='text-lg font-medium pr-6'>{item.questions}</span>
        <div className='flex-shrink-0 flex items-center justify-center w-8 min-w-8 aspect-square rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-300'>
          <i className='bx bx-plus text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white text-xl'></i>
        </div>
      </button>
      <div className='overflow-hidden' id={`answer-${item.id}`} ref={answerRef} style={{maxHeight: openId ? answerRef.current?.scrollHeight : 0, opacity:openId ? 1 : 0}}>

        <div className='p-4 pt-0 pb-5 text-gray-600 dark:text-gray-300'>
          <div className='p-3 rounded-lg overflow-y-auto max-h-[300px]'>{item.answers}</div>
        </div>
      </div>
     </div>
  )
}

export default FAQItem