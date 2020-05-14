import React from "react";

function Calendar() {
  return (
    <div>
      <div className="split left">
        <div className="centered">
          <img src="images/_4REuQH4_400x400.jpg" alt="animalcrossing" className="center"/>
          <h2>Isabelle</h2>
          <p>HAPPY BIRTHDAY!</p>
          <br/>
          <br/>
          <br/>
          <img src="https://i.pinimg.com/originals/0d/69/a9/0d69a941ad981e610ccda6e81f9e52d9.png" alt="animalcrossing" className="center"/>
            <h2>Kotaku</h2>
            <p>Upcoming Birthday</p>
            <br/>
            <br/>
            <br/>
            <img src="https://i.redd.it/8yg17wk81fe41.jpg" alt="animalcrossing" className="center"/>
            <h2>Marina</h2>
            <p>Upcoming Birthday</p>
            <br/>
            <br/>
            <br/>
            <img src="https://i.pinimg.com/originals/f9/0c/64/f90c647e9908e3b30cf316973c903a70.png" alt="animalcrossing" className="center"/>
            <h2>Squeeky</h2>
            <p>Upcoming Birthday</p>
        </div>
      </div>


    <div className="splitr right">
        <div className="centered1">
            <a href="editVillager.html" className="button">Link Button</a>
            <br/>
            <br/>
            <h1>Calendar</h1>

                <div className="month"/>
                    <ul>
                        <li className="prev">&#10094;</li>
                        <li className="next">&#10095;</li>
                        <li>
                            May<br/>
                            <span style="font-size:28px">2020</span>
                        </li>
                    </ul>
                </div>

                <ul className="weekdays">
                    <li>Mo</li>
                    <li>Tu</li>
                    <li>We</li>
                    <li>Th</li>
                    <li>Fr</li>
                    <li>Sa</li>
                    <li>Su</li>
                </ul>

                <ul className="days">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li><span className="active">10</span></li>
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                    <li>14</li>
                    <li>15</li>
                    <li>16</li>
                    <li>17</li>
                    <li>18</li>
                    <li>19</li>
                    <li>20</li>
                    <li>21</li>
                    <li>22</li>
                    <li>23</li>
                    <li>24</li>
                    <li>25</li>
                    <li>26</li>
                    <li>27</li>
                    <li>28</li>
                    <li>29</li>
                    <li>30</li>
                    <li>31</li>
                </ul>
        </div>
    </div>
  );
}

export default Calendar;