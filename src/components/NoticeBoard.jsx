import React, { useEffect, useRef, useState } from 'react';
import './NoticeBoard.css';

const notices = [
  { id: 1, type: 'text', content: 'Welcome back! Classes begin on September 1st.', date: '2025-08-10' },
  { id: 2, type: 'link', content: 'Download the academic calendar.', href: 'https://college.edu/calendar.pdf', date: '2025-08-12' },
  { id: 3, type: 'image', content: 'Annual Tech Fest Poster', src: 'https://placehold.co/600x300?text=Tech+Fest+2025', date: '2025-08-15' },
  { id: 4, type: 'text', content: 'Library will be closed on August 25th.', date: '2025-08-16' },
  { id: 5, type: 'link', content: 'Submit your assignments online.', href: 'https://college.edu/assignments', date: '2025-08-17' },
];

export default function NoticeBoard() {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const today = new Date();

  useEffect(() => {
    const container = containerRef.current;
    let scrollInterval;

    function startAutoScroll() {
      scrollInterval = setInterval(() => {
        if (!container || isPaused) return;
        if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
          container.scrollTop = 0;
        } else {
          container.scrollTop += 1;
        }
      }, 50);
    }
    startAutoScroll();
    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  // Calendar generation
  const year = today.getFullYear();
  const month = today.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) calendarDays.push(null);
  for (let d = 1; d <= daysInMonth; d++) calendarDays.push(d);

  return (
    <div className="board-calendar-container" id="notice">
      {/* Notice Board */}
      <div className="notice-board">
        <h2>📢 College Notice Board</h2>
        <div
          className="scroll-container"
          ref={containerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="scroll-content">
            {notices.map((notice, index) => (
              <div key={notice.id} className="notice-card">
                <div className="notice-number">{index + 1}.</div>
                <div className="notice-content">
                  {notice.type === 'text' && <p>{notice.content}</p>}
                  {notice.type === 'link' && (
                    <p>
                      <a href={notice.href} target="_blank" rel="noopener noreferrer">
                        {notice.content}
                      </a>
                    </p>
                  )}
                  {notice.type === 'image' && (
                    <div className="image-notice">
                      <p>{notice.content}</p>
                      <img src={notice.src} alt={notice.content} />
                    </div>
                  )}
                </div>
                <div className="notice-date">{notice.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="calendar">
        <h2>📅 {today.toLocaleString('default', { month: 'long' })} {year}</h2>
        <div className="calendar-grid">
          {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(day => (
            <div key={day} className="calendar-day-header">{day}</div>
          ))}
          {calendarDays.map((day, idx) => (
            <div
              key={idx}
              className={`calendar-day ${day === today.getDate() ? 'today' : ''} ${day ? '' : 'empty'}`}
            >
              {day || ''}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
