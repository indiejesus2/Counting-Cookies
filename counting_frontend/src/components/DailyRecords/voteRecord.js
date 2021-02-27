import React, {useState, useEffect} from 'react'

const Upvote = (props) => {


    const [id] = useState(props.record.id)
    const [user_id] = useState(props.record.user_id)
    const [vote, handleUpvote] = useState(props.record.vote)
    
    useEffect(() => {
        const data = {id, user_id, vote}
        props.addVote(data)
    }, [vote])

    return (
        <>
            <button id={id} onClick={() => handleUpvote(vote + 1) }>+</button>{vote}
        </>
        )

}

export default Upvote