import React, {useState} from 'react'
import "./Schedule.css"

function Schedule() {

  const [show, setShow] = useState("friday")



  return (
    <div className="schedule">
      <h1>Schedule</h1>
      <div className="schedule__container">
        <div className="days">
          <h2 onClick={() => setShow("friday")}>Friday</h2>
          <h2 onClick={() => setShow("saturday")}>Saturday</h2>
          <h2 onClick={() => setShow("sunday")}>Sunday</h2>
        </div>
        <div className="info">
          { show === 'friday' && <div className="friday day" >
              <h3>Friday</h3>
              <ul>
                <p>6:00PM - Doors Open</p>
                <p>7:00PM - First Session</p>
                <p>8:00PM - Second Session</p>
              </ul>
            </div>
          }
          { show === 'saturday' && <div className="saturday day">
            <h3>Saturday</h3>
              <ul>
                <p>9:00AM - Doors Open</p>
                <p>10:00AM - Third Session</p>
                <p>11:00AM - Fourth Session</p>
                <p>12:00AM - Lunch Break</p>
              </ul>

              <ul>
                <p>1:OOPM - Workshop (Evangelism Training)</p>
                <p>1:3OPM - Panel (Evangelism Q&A)</p>
              </ul>

              <ul>
                <p>6:00PM - Doors Open</p>
                <p>7:00PM - Fifth Session</p>
                <p>8:00PM - Sixth Session</p>
                <p>8:45PM - Call for Action</p>
              </ul>
            </div>
          }
          {show === 'sunday' && <div className="sunday day">
              <h3>Sunday</h3>
              <ul>
                <p>10:00AM - Doors Open</p>
                <p>10:30AM - Seventh Session</p>
                <p>10:00AM - Closing</p>
              </ul>
            </div>
          } 
        </div>
      </div>
    </div>
  )
}

export default Schedule
