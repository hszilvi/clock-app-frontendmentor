import React from 'react';

function ExpandView({ moreLess, dayOfWeek, timezone, dayOfYear, weekNumber, hour }) {
    return (
        <>
            {!moreLess && (<div className={
                hour >= 17 ? "expand-evening" : "expand-morning"
            }>
                <div>
                    <p>Current timezone</p>
                    <p>{timezone}</p>
                </div>
                <div>
                    <p>Day of the week</p>
                    <p>{dayOfWeek}</p>
                </div>
                <div>
                    <p>Day of the year</p>
                    <p>{dayOfYear}</p>
                </div>
                <div>
                    <p>Week number</p>
                    <p>{weekNumber}</p>
                </div>
            </div>
        
        )}
        </>
    )
}
export default ExpandView;