import { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { UseJobs } from '../../contexts/JobsContext';
import { UseShips } from '../../contexts/ShipsContext';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function JobCalendar() {
  const { jobs } = UseJobs();
  const { ships } = UseShips();
  const [selectedView, setSelectedView] = useState('month');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

    const events = jobs.map(job => ({
    id: job.id,
    title: `${job.type || 'Job'} - ${ships.find(ship => ship.id === job.shipId)?.name || 'Unknown Ship'}`,
    start: new Date(job.scheduledDate),
    end: job.dueDate ? new Date(job.dueDate) : new Date(job.scheduledDate),
    status: job.status,
    priority: job.priority,
    allDay: false,
  }));

  const eventStyleGetter = (event) => {
    let backgroundColor = '#3174ad'; 
    let borderColor = '#265985';

    if (event.priority && event.priority.toLowerCase() === 'high') {
      backgroundColor = '#dc3545'; 
      borderColor = '#bd2130';
    } else if (event.priority && event.priority.toLowerCase() === 'medium') {
      backgroundColor = '#ffc107'; 
      borderColor = '#d39e00';
    }

    if (event.status && event.status.toLowerCase() === 'completed') {
      backgroundColor = '#28a745';
      borderColor = '#1e7e34';
    }

    return {
      style: {
        backgroundColor,
        borderColor,
        borderRadius: '3px',
        opacity: 0.8,
        color: 'white',
        border: '0px',
        display: 'block',
      },
    };
  };

  const handleSelectSlot = (slotInfo) => {
    setSelectedDate(slotInfo.start);
  };

  const jobsForSelectedDate = selectedDate
    ? jobs.filter(job => {
        const jobDate = format(new Date(job.scheduledDate), 'yyyy-MM-dd');
        const selected = format(selectedDate, 'yyyy-MM-dd');
        return jobDate === selected;
      })
    : [];

  return (
    <div className="calendar-container" style={{ height: '80vh' }}>
      <div className="calendar-controls">
        <select 
          value={selectedView} 
          onChange={(e) => setSelectedView(e.target.value)}
          className="view-select"
        >
          <option value="month">Month</option>
          <option value="week">Week</option>
          <option value="day">Day</option>
        </select>
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        view={selectedView}
        onView={setSelectedView}
        date={currentDate}
        onNavigate={setCurrentDate}
        eventPropGetter={eventStyleGetter}
        tooltipAccessor={(event) => `${event.title} (${event.priority} priority)`}
        selectable
        onSelectSlot={handleSelectSlot}
      />
      {selectedDate && (
        <div className="jobs-on-date-modal" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: 'white', borderRadius: 8, padding: 24, minWidth: 320, maxWidth: 400 }}>
            <h4>Jobs on {format(selectedDate, 'PPP')}</h4>
            <ul>
              {jobsForSelectedDate.length === 0
                ? <li>No jobs scheduled.</li>
                : jobsForSelectedDate.map(job => (
                    <li key={job.id} style={{ marginBottom: 8 }}>
                      <strong>{job.type || 'Job'}</strong> - {job.status} <br />
                      <span style={{ fontSize: 12, color: '#555' }}>{ships.find(ship => ship.id === job.shipId)?.name || 'Unknown Ship'}</span>
                    </li>
                  ))}
            </ul>
            <button onClick={() => setSelectedDate(null)} style={{ marginTop: 12, padding: '6px 16px', borderRadius: 4, border: 'none', background: '#007bff', color: 'white', cursor: 'pointer' }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobCalendar; 