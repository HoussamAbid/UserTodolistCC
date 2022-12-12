import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function DetailUser() {
    const { id } = useParams()
    const { data } = useSelector(state => state.user)
    const selectedUser = data.users.filter(user => user.id === id)
    return (
        <div>
            {
                selectedUser.map(user => <div  key={user.id}>
                    <div >
                        <img src={user.image} alt={user.firstName}/>
                    </div>
                    <div>
                        <div >
                            <label>Full Name: </label>
                            <span>{`${user.firstName} ${user.lastName}`}</span>
                        </div>
                        <div >
                            <label>Age: </label>
                            <span>{user.age}</span>
                        </div>
                        <div >
                            <label>Gender: </label>
                            <span>{user.gender}</span>
                        </div>
                        <div >
                            <label>Email: </label>
                            <span>{user.email}</span>
                        </div>
                        <div >
                            <label>Phone number: </label>
                            <span>{user.phone}</span>
                        </div>
                        <div >
                            <label>Weight: </label>
                            <span>{user.weight}</span>
                        </div>
                        <div >
                            <label>Height: </label>
                            <span>{user.height}</span>
                        </div>
                        <div >
                            <label>Birth Date: </label>
                            <span>{user.birthDate}</span>
                        </div>
                        <div >
                            <label>Blood Group: </label>
                            <span>{user.bloodGroup}</span>
                        </div>
                        <div >
                            <label>Eye Color: </label>
                            <span>{user.eyeColor}</span>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}