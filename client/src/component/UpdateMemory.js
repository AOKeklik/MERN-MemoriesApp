import React, { useEffect, useState } from 'react'
import ReactFileBase64 from 'react-file-base64'

import {useParams, useHistory} from 'react-router-dom'
import {fetchMemories, updateMemory} from '../axios/index'

function UpdateMemory() {
    const {id : Params} = useParams()
    const History = useHistory()
    
    const [inputs, setInputs] = useState({title: '', creator: '', content: '', image: ''})
    const handlerOnChange = (e) => setInputs({...inputs, [e.target.name]: e.target.value})

    useEffect(() => {
        (async function () {
            const {data} = await fetchMemories()
            
            if (!data.find(n => n._id === Params)) {
                History.push('/')
            }
            const findData = data.find(n => n._id === Params)
            setInputs(findData)
        })()
    }, [Params, History])

    const handlerOnSubmit = async (e) => {
        e.preventDefault()
        const updateItem = await updateMemory(Params, inputs)
        alert(updateItem.data.message)
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
                        placeholder="Pleace Enter Your Title"
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="creator" className="form-label">Creator</label>
                    <input
                        onChange={handlerOnChange}
                        value={inputs.creator}
                        name="creator"
                        id="creator"
                        placeholder="Pleace Enter Creator Name"
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Content</label>
                    <textarea
                        onChange={handlerOnChange}
                        value={inputs.content}
                        name="content"
                        id="content"
                        placeholder="Pleace Enter Your Content"
                        className="form-control"
                        rows="3"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="form-label d-block">Image</label>
                    <div className="border border-2">
                        <ReactFileBase64
                            onDone={({base64}) => setInputs({...inputs, image: base64})}
                            multiple={false}
                            value={inputs.image}
                            name="image"
                            id="image"
                            placeholder="Pleace Enter Creator Name"
                            type="file"
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-dark w-100">Edit</button>
                </div>
            </form>
        </div>
    </div>
}

export default UpdateMemory
