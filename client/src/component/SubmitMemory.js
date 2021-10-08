import React, { useState } from 'react'

import ReactFileBase64 from 'react-file-base64'
import {useHistory} from 'react-router-dom'

function SubmitMemory() {
    const History = useHistory()
    const [inputs, setInputs] = useState({title: '', creator: '', content: '', image: ''})

    console.log(inputs)
    return <div className="row">
        <div className="col-lg-6 offset-lg-3">
        <form onSubmit={(e) => {
            e.preventDefault()

            History.push('/')
        }}>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
                onChange={(n) => setInputs({...inputs, title: n.target.value})}
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
                onChange={(n) => setInputs({...inputs, creator: n.target.value})}
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
                onChange={(n) => setInputs({...inputs, content: n.target.value})}
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
