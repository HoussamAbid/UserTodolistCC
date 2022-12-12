import React from 'react'
import { MdSignalWifiStatusbar4Bar } from "react-icons/md"
import { MdSignalWifiOff } from "react-icons/md"
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ListTodo() {
    const { id } = useParams()
    console.log(id)
    const userListe = useSelector(state => state.user.data)
    const todoListe = useSelector(state => state.todoList.data)
    const selectedUser = userListe.users.filter(user => user.id === id)
    const selectedToDos = todoListe.todos.filter(todo => todo.id === id)
    return (
        <div>
            <h1>{`${(selectedUser[0].firstName)} ${(selectedUser[0].lastName)}`}The todo list : </h1>
            <div>
                <table>
                    <thead><tr>
                            <td>Description</td>
                            <td>The State</td>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedToDos.map(todo => <tr key={todo.id}>
                            <td>
                                {todo.todo}
                            </td>
                            <td>
                                {todo.completed === true ? <MdSignalWifiStatusbar4Bar /> : <MdSignalWifiOff />}
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}