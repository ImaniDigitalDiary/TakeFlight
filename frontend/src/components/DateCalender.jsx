import React, { useState, useRef }  from 'react'

// date input
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

function DateCalender() {
    // Book Date input - useState hook
    const [range, setRange] = useState([
        {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
        }
    ])

    const [showCalendar, setShowCalendar] = useState(false)
    const ref = useRef()

    React.useEffect(() => {
        const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setShowCalendar(false)
        }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
        document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])
    return (
        <div className='relative inline-block'>
            {/* DATE INPUT BOX */}
            <div
                onClick={() => setShowCalendar(!showCalendar)}
                className='cursor-pointer border px-4 py-2 rounded-md shadow-sm text-sm bg-white text-gray-700 w-60'
            >
                {`${format(range[0].startDate, 'MMM dd')} - ${format(range[0].endDate, 'MMM dd')}`}
                
            </div>

            {/* CALENDAR DROPDOWN FOR DATE INPUT*/}
            {showCalendar && (
                <div ref={ref} className='absolute mt-2 z-50 shadow-lg'>
                    <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setRange([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={range}
                    locale={enUS}
                    months={2}
                    direction='horizontal'
                    />
                </div>
            )}
        </div>
    )
}

export default DateCalender
