import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

const Home = () => {

    const [startDate, setStartDate] = useState<Date | null>(new Date());

    return (
        <div className="page">
            <div className="pageBox">
                <input type="text" name="name" placeholder="name"/>
                <input type="text" name="phone" placeholder="phone"/>
                <textarea name="description" id="description" placeholder="note"></textarea>
                <input type="checkbox"/><p className="inline">Напомнить о встрече с клиентом</p>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    showTimeSelect
                    dateFormat="Pp"
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    locale="ru"
                />
                <button>Add client</button>
            </div>
        </div>
    )
}
export default Home