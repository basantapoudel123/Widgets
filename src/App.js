import React ,{useState} from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'


const items = [
    {
        title: 'What is React?',
        content:'React is a front end js framework'
    },
    {
        title:'Why use React?',
        content:'React is a favorite JS library'
    },
    {
        title:'How to use it?',
        content:'We use it by creating components'
    }
];

const options = [
    {
        label: 'The Color Red',
        value:'red'
    },
    {
        label:'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
];


export default () => {
    const [selected, setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <Header />
            {/* <button 
                onClick={() => setShowDropdown(!showDropdown)}>
                                Toggle Dropdown
            </button>
            {showDropdown ?
                <Dropdown 
                selected={selected}
                onSelectedChange={setSelected}
                options={options}/>
                : null 
            }*/}
            
        <Route path = '/'>
            <Accordion items={items} />
        </Route>
        <Route path='/list'>
            <Search/>
        </Route>
        <Route path='/dropdown'>
            <Dropdown
                label='Select a Color'
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
                />
        </Route>
        <Route path='/translate'>
            <Translate/>
        </Route>
        </div>
    );
}