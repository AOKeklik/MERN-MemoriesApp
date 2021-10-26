import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {FaEdit, FaTrashAlt} from 'react-icons/fa'
//import moment from 'moment'

//import {deleteMemory} from '../axios/index'
import {useDispatch, useSelector} from 'react-redux'
import {actionDeleteMemory} from '../redux/actions/actionMemories'

function Memory({data}) {
    const Dispatch = useDispatch()
    const [user, setUser] = useState()
    const auth = useSelector(state => state.user)

    const handlerDelete = /* async */ (id) => {
            if (!window.confirm('Are you sure you want to delete the Memory?')) return
            //const deleteItem = await deleteMemory(id)
            //alert(deleteItem.data.message)
            Dispatch(actionDeleteMemory(id))
    }

    const fromNow = (date) => {
        var seconds = Math.floor((new Date() - date) / 1000);
        var years = Math.floor(seconds / 31536000);
        var months = Math.floor(seconds / 2592000);
        var days = Math.floor(seconds / 86400);
    
        if (days > 548) {
            return years + ' years ago';
        }
        if (days >= 320 && days <= 547) {
            return 'a year ago';
        }
        if (days >= 45 && days <= 319) {
            return months + ' months ago';
        }
        if (days >= 26 && days <= 45) {
            return 'a month ago';
        }

        var hours = Math.floor(seconds / 3600);

        if (hours >= 36 && days <= 25) {
            return days + ' days ago';
        }
        if (hours >= 22 && hours <= 35) {
            return 'a day ago';
        }
        
        var minutes = Math.floor(seconds / 60);

        if (minutes >= 90 && hours <= 21) {
            return hours + ' hours ago';
        }
        if (minutes >= 45 && minutes <= 89) {
            return 'an hour ago';
        }
        if (seconds >= 90 && minutes <= 44) {
            return minutes + ' minutes ago';
        }
        if (seconds >= 45 && seconds <= 89) {
            return 'a minute ago';
        }
        if (seconds >= 0 && seconds <= 45) {
            return 'a few seconds ago';
        }
    }

    useEffect(() => {
        const storageUser = JSON.parse(localStorage.getItem('user'))
        setUser(storageUser)
    }, [auth])

    console.log(user)

    return <div className="col-lg-4 p-4">
        <div className="card" style={{width: ""}}>
            <div className="card-header">
                <img src={data.image} alt={data.title} className="card-img-top" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.content}</p>
                
            {
                user?._id === data.createrId ? (
                    <div className="bg-dark d-block d-flex justify-content-around py-2" >
                        <Link to={`/update/${data._id}`}><FaEdit size="1.5em" color="white" /></Link>
                        <div role="button" onClick={() => handlerDelete(data._id)}><FaTrashAlt size="1.3em" color="white" /></div>
                    </div>
                ) : (
                    null
                )
            }
            </div>
            <div className="card-footer text-muted">
                <small>{fromNow(new Date(data.createdAt))}</small>
            </div>
        </div>
    </div>
}

export default Memory
