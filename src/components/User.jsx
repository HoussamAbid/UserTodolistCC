import React from 'react'

export default function User(props) {
  return (
    <div>
        <img src={props.image} alt={props.firstName} />
        <div>
            <div>{props.nom}</div>
            <button onClick={props.details}>User's datails (DETAIL UTILISATEUR) </button>
            <button onClick={props.listeTaches}>Tasks List (LES LISTES DES TASKS)</button>
        </div>
    </div>
  )
}