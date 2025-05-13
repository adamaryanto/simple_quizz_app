import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons'

function PageQuiz() {
  const [page,setPage] = useState(1)
  const [isAnswer,setIsAnswer]= useState(false)
  const [points,setPoints]= useState(0)
  const [answer,setAnswer] = useState(0)
 const question = [
   {
    questions: 'Apa Ibukota Indonesia',
    answer: ['Bandung', 'Jakarta', 'Surabaya', 'Bekasi'],
    correctAnswer: 1,
    page:1
   },
   {
    questions: 'Siapa Presiden Pertama Indonesia',
    answer: ['sukarno', 'mulyono', 'ahok', 'fufufafa'],
    correctAnswer: 0,
    page:2
   }

 ]
 const currentQuestion = question[page - 1]
 function nextPage(){
  if(page === question.length)return
  setPage(page+1)
  setIsAnswer(false)
 }
 function previousPage(){
  if(page ===1)return
  setPage(page-1)
 }
 function handleClick(index){
   setAnswer(answer+1)
   if(index!==currentQuestion.correctAnswer&& points === currentQuestion.page){
     setPoints(points-1)
     setIsAnswer(false)

   }
   if(isAnswer ) return
  if(index===currentQuestion.correctAnswer){
    setIsAnswer(true)
    setPoints(points+1)
  }
}
console.log('Points', points)
console.log(isAnswer)
console.log('jumlah Jawabb', answer)
  return (
    <div className='wrapperHalamanQuiz'>
        <nav className='navQuizPage'>
        <FontAwesomeIcon icon={faArrowLeft} onClick={previousPage} style={{cursor: 'pointer'}} />
            <div className='wrapperTimer'>
                <p>20 :</p>
                <p>10</p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} onClick={nextPage} style={{cursor: 'pointer'}}/>
        </nav>
        <div className='wrapperContent'>
          <p>{currentQuestion.page}.{currentQuestion.questions}</p>
          <h1>{currentQuestion.answer.map((answer,index)=>(
            <button  
              key={index}
              onClick={()=>handleClick(index)}
            >
              {answer}
            </button>
          ))}</h1>
        </div>


      
    </div>
  )
}

export default PageQuiz