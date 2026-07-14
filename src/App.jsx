import react, { useEffect, useState } from 'react';
import Home from './components/Home';
import Opening from './components/Opening';

function App(){
    const [isIntro, setIsIntro] = useState(true);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setIsIntro(false);
        },5000)

        return () => clearTimeout(timer);
    },[])
    return(
        <>
        {isIntro && <Opening />}
        <Home />
        </>
    )
}

export default App;