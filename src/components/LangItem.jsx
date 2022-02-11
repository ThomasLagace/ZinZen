import React from 'react'
import { Button, } from 'react-bootstrap'
import { languageSelectionState } from '../store/LanguageSelectionState'
import { useRecoilState } from 'recoil'

export const LangItem = ({ lang }) => {
    const [isLanguageChosen, setIsLanguageChosen] = useRecoilState(languageSelectionState);
    const handleClick = (langId) => {
        setIsLanguageChosen(true);
        //changeLanguage(langId);
        localStorage.setItem("language", JSON.stringify(langId));
    }
       
    return (
        <div className="containerLang">
            {lang.sno % 4 === 1 ? <Button variant="peach" size="lg" className="lang-btn1" onClick={() => { handleClick(lang.langId);}}>
                {lang.title}
            </Button> : lang.sno % 4 === 2 ? <Button variant="dark-pink" size="lg" className="lang-btn1" onClick={() => { handleClick(lang.langId) }}>
                {lang.title}
            </Button> : lang.sno % 4 === 3 ? <Button variant="grey-base" size="lg" className="lang-btn2" onClick={() => { handleClick(lang.langId)}}>
                {lang.title}
            </Button> : <Button variant="pale-blue" size="lg" className="lang-btn2" onClick={() => { handleClick(lang.langId) }}>
                {lang.title}
            </Button>}
        </div>
    )
}

