import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ListUser from './ListUser';
import DetailUser from './DetailUser';
import ListTodo from './ListTodo';



export default function Accueil() {
    return (
        <div>
            <div>MAIN PAGE OF THE USERS AND BUTTONS</div>
            <Routes>
                <Route exact path="/" element={<ListUser />} />
                <Route path='/DetailUser/:id' element={<DetailUser />} />
                <Route path='/ListTodo/:id' element={<ListTodo/>} />
            </Routes>
        </div>
    )
}