
const QuestionCard = () =>{
    const [curIndex, setCurIndex] = useState(0)
    const [selected,setSelected] = useState('')
    const [score, setScore] = useState(0)

    const HandleClick = (opt)=>{
        if(selected)
            return
        setSelected(opt)

        if(opt === questions[curIndex].answer){
            setScore((prev) => prev+1)
        }

        setTimeout(()=>{
            setSelected("")
            setCurIndex((prev) => prev+1)
        },1500)
        
    }

    const getClassName = (opt)=>{
        if(selected){
        if(selected === opt){
            return (questions[curIndex].answer === opt) ? "option correct" : "option wrong"
        }
        return 'option disabled'
    }
        return "option"
    }

    return(
        <>
        <div className="card">
            <h1>React Quiz</h1>
            { curIndex <questions.length ? ( 
                <>
                <h2>{questions[curIndex].question}</h2>
            <ul>
                {questions[curIndex].options.map((opt) =>{
                    return <li key={opt} className={getClassName(opt)} onClick={()=>HandleClick(opt)}>{opt}</li>
                })

                }
                
            </ul>
            </>
           ): (
                <ScoreCard score={score} total={questions.length}/>
           )
}
        </div>
        </>
    )
}

export default QuestionCard
