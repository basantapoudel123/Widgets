// AIzaSyCHUmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, {useState} from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert';

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: "Spanish",
        value: 'es'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Dutch',
        value: 'nl'
    },
    {
        label: 'Russian',
        value: 'ru'
    },
    {
        label: 'Thai',
        value: 'th'   
    },
    {
        label: 'Romanian',
        value: 'ro'
    },
    {
        label: 'Tamil',
        value: 'ta'
    },
    {
        label: 'Telugu',
        value: 'te'
    },
    {
        label: 'Ukrainian',
        value: 'uk'
    },
    {
        label: 'Chinese(Taiwan)',
        value: 'zh-TW'
    },
    {
        label: 'Portuguese',
        value: 'pt-PT'
    },
    {
        label: 'Korean',
        value: 'ko'
    },
    {
        label: 'Japanese',
        value: 'ja'
    },
    {
        label: 'Bengali',
        value: 'bn'
    }, 
    {
        label: 'German',
        value: 'de'
    },
    {
        label: 'French',
        value: 'fr'
    },
    {
        label: 'Filipino',
        value: 'fi'
    },
    {
        label: "English(UK)",
        value: 'en-GB'
    },
    {
        label: 'English(US)',
        value: 'en'
    }
]


const Translate = () => {
    const[language, setLanguage] = useState(options[0]);
    const[text, setText] = useState('');

    return (
        <div>
            <div className='ui form'>
                <div className="field">
                    <label>Enter Text</label>
                    <input 
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
             </div>
            <Dropdown 
                label="Select a Language"
                selected={language}
                onSelectedChange={setLanguage}
                options={options}
            />
            <hr />
            <h3 className='ui header'>Output</h3>
            <Convert text={text} language={language}/>
        </div>
    )
};

export default Translate;