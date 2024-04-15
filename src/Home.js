import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const [year, setYear] = useState('');
    const navigate = useNavigate();

    const handleSumbit = (e) => {
        e.preventDefault();
        if (year.length === 4 && !isNaN(year)) {
            navigate(`/nobel/${year}`)
        } else {
            alert('please enter a 4 digit year')
        }
    }

    return (
        <div>
            <form onSubmit={handleSumbit}>
                <label>
                    Enter Year (YYYY):
                </label>
                <input
                    type='text'
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder='Enter year'
                    maxLength={4}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Home 