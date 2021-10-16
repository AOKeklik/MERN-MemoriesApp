import React, { useState } from 'react'
import ReactFileBase64 from 'react-file-base64'

import {useHistory} from 'react-router-dom'
//import {createMemory} from '../axios/index'
import {actionCreateMemory} from '../redux/actions/actionMemories'
import {useDispatch} from 'react-redux'

function SubmitMemory() {
    const History = useHistory()
    const Dispatch = useDispatch()

    const [inputs, setInputs] = useState({title: '', creator: '', content: '', image: ''})
    const handlerOnChange = (e) => setInputs({...inputs, [e.target.name]: e.target.value})

    /* const handlerOnSubmit = async (e) => {
        e.preventDefault()
        const createItem = await createMemory(inputs)
        alert(createItem.data.message)
        History.push('/')
    } */

    const handlerOnSubmit = (e) => {
        e.preventDefault()
        Dispatch(actionCreateMemory(inputs))
        History.push('/')
    }


    return <div className="row">
        <div className="col-lg-6 offset-lg-3">
            <form onSubmit={handlerOnSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        onChange={handlerOnChange}
                        value={inputs.title}
                        name="title"
                        id="title"
                        type="text" 
                        className="form-control" 
                        placeholder="Pleace Enter Your Title" 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="creator" className="form-label">Creator</label>
                    <input 
                        onChange={handlerOnChange}
                        value={inputs.creator}
                        name="creator"
                        id="creator"
                        type="text" 
                        className="form-control" 
                        placeholder="Pleace Enter Creator Name" 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Content</label>
                    <textarea
                        onChange={handlerOnChange}
                        value={inputs.content}
                        name="content"
                        id="content"
                        className="form-control" 
                        placeholder="Pleace Enter Your Content"
                        rows="3"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="form-label d-block">Image</label>
                    <div className="border border-2">
                        <ReactFileBase64
                            onDone={({base64}) => setInputs({...inputs, image: base64})}
                            value={inputs.creator}
                            name="image"
                            multiple={false}
                            type="file" 
                            id="image"
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-dark w-100">Submit</button>
                </div>
            </form>
        </div>
    </div>
}

export default SubmitMemory
