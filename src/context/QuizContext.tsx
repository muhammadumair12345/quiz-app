import React,{createContext,useState,useEffect} from 'react'

export const QuizContext=createContext({});

type Question = {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  };

export const QuizProvider:React.FC = ({children}:any) => {
    const [startFlag,setStartFlag]=useState<boolean>(false);
    const [difficultyFlag,setDifficultyFlag]=useState<boolean>(false);
    const [categoryValue, setCategoryValue] = useState<string>('any');
    const [loader,setLoader]=useState<boolean>(false);
    const [difficulty,setDifficulty]=useState<string>('easy');
    const [quizData,setQuizData]=useState<any>([]);
    const [nextCounter,setNextCounter]=useState<number>(0);
    const [score,setScore]=useState<number>(0);

    const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5);

    useEffect(() => {
    async function fetchQuizAPI():Promise<void>{
        try {
            const url:string=categoryValue!=='any'?
            `https://opentdb.com/api.php?amount=10&category=${categoryValue}&difficulty=${difficulty}&type=multiple`:
            `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`;
            const response=await fetch(url);
            const {results}=await response.json();
            setQuizData(results.map((ques:Question)=>{
                const newData={
                    question:ques.question,
                    choice:shuffleArray([ques.correct_answer,...ques.incorrect_answers]),
                    correct_answer:ques.correct_answer,
                    incorrect_answers:ques.incorrect_answers,
                }
                return newData;
            }));
            setLoader(true);
        } catch (error) {
            console.log(error)
        }
     }   
     fetchQuizAPI();
    }, [startFlag])

    return (
        <QuizContext.Provider value={{startFlag,setStartFlag,
        difficultyFlag,setDifficultyFlag,
        categoryValue,setCategoryValue,
        loader,setLoader,setDifficulty,quizData,
        nextCounter,setNextCounter,
        score,setScore}}>
           {children} 
        </QuizContext.Provider>
    )
}
