import React from 'react'

function FeedbackForm() {
    return (
        <div className='h-screen w-screen flex justify-center place-items-center'>
            <form className='bg-blue-800 rounded-md flex flex-col gap-5 p-10 h-fit w-1/2'>
                <label htmlFor="emailfield" className="font-semibold text-pretty">Email 📧</label>
                <input type="email" name="emailfield" id="email" className="outline" />
                <label htmlFor="feedbacks" className="font-semibold text-pretty">Feedbacks 💌</label>
                <textarea name="feddbacks" id="feedback" cols={20} rows={10} className="outline"></textarea>
            </form>
        </div>
    )
}

export default FeedbackForm