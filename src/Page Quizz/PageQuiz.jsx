import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons'

function PageQuiz() {
  const [page,setPage] = useState(1)

  const [answerQuestion, setAnswerQuestion] = useState([])
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
   },
   {
    questions: 'Apa Warna Bendera Indonesia',
    answer: ['Merah Putih','Putih Merah', 'Biru Merah Putih', 'Coklat'],
    correctAnswer: 0,
    page:3
   },
   {
    questions: 'Siapa Presiden Rusia',
    answer: ['Puting', 'Trump', 'Putin', 'Mulyono'],
    correctAnswer: 2,
    page:4
   },
   {
    questions: 'Apa Nama Ibukota Jepang',
    answer: ['Jakarta', 'Jawa', 'Sunda', 'Tokyo'],
    correctAnswer: 3,
    page:5
   }

 ]
 const currentQuestion = question[page - 1]
 function nextPage(){
  if(page === question.length)return
  setPage(page+1)

}
function previousPage(){
  if(page ===1)return
  setPage(page-1)

  
 }
 function handleClick(index){
   setAnswer(answer+1)
 
   const alreadyAnswerPage = answerQuestion.includes(page)
   if(alreadyAnswerPage) return

   if(index===currentQuestion.correctAnswer){
     setAnswerQuestion([...answerQuestion, page])
     
     setPoints(points+1)
    }
}
console.log('Points', points)

console.log('jumlah Jawabb', answer)
console.log('Halaman Yang Sudah Dijawab', answerQuestion)
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
          <p onCopy={(e)=> e.preventDefault()} style={{userSelect: 'none'}} onCut={(e)=>e.preventDefault()}>{currentQuestion.page}.{currentQuestion.questions}</p>
          <h1>{currentQuestion.answer.map((answer,index)=>(
            <button  
              key={index}
              onClick={()=>handleClick(index)}
            >
              {answer}
            </button>
          ))}</h1>
        </div>
          {page ===question.length&&(
            <button className='btnSubmitAnswer'>Kirim</button>
          )}


      
    </div>
  )
}

export default PageQuiz