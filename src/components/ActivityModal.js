import React, { useState, useEffect } from 'react';
import './ActivityModal.css';

const ActivityModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('today');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Mock fitness data
  const fitnessData = {
    today: {
      steps: 12458,
      stepGoal: 10000,
      calories: 1842,
      calorieGoal: 2200,
      distance: 8.7,
      distanceGoal: 10,
      activeMinutes: 124,
      activeGoal: 150,
      heartRate: {
        current: 72,
        resting: 65,
        max: 142,
        zones: {
          fat: 45,
          cardio: 32,
          peak: 15
        }
      },
      workouts: [
        { time: '06:30 AM', activity: 'Morning Run', duration: '45 min', calories: 420 },
        { time: '02:15 PM', activity: 'Gym Session', duration: '60 min', calories: 380 },
        { time: '07:00 PM', activity: 'Yoga', duration: '30 min', calories: 150 }
      ],
      sleepData: {
        duration: '7h 42m',
        quality: 85,
        bedtime: '10:45 PM',
        wakeup: '6:27 AM',
        phases: {
          deep: 142,
          light: 285,
          rem: 95
        }
      }
    },
    weekly: {
      steps: [8500, 12400, 9800, 11200, 10800, 12458, 13200],
      calories: [1620, 1840, 1580, 1750, 1680, 1842, 1920],
      workouts: 12,
      avgHeartRate: 74,
      totalDistance: 58.4
    }
  };

  const getStepProgress = () => {
    const progress = (fitnessData.today.steps / fitnessData.today.stepGoal) * 100;
    return Math.min(progress, 100);
  };

  const getCalorieProgress = () => {
    const progress = (fitnessData.today.calories / fitnessData.today.calorieGoal) * 100;
    return Math.min(progress, 100);
  };

  const renderProgressRing = (progress, color) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = `${(progress / 100) * circumference} ${circumference}`;

    return (
      <svg className="progress-ring" width="100" height="100">
        <circle
          className="progress-ring-background"
          stroke="#e6e6e6"
          strokeWidth="6"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
        />
        <circle
          className="progress-ring-progress"
          stroke={color}
          strokeWidth="6"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
          strokeDasharray={strokeDasharray}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />
      </svg>
    );
  };

  return (
    <div className="activity-modal-overlay" onClick={onClose}>
      <div className="activity-modal" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div className="header-info">
            <h2>Activity Dashboard</h2>
            <div className="current-time">
              <i className="fas fa-clock"></i>
              <span>{currentTime.toLocaleTimeString()}</span>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button 
            className={`tab-btn ${activeTab === 'today' ? 'active' : ''}`}
            onClick={() => setActiveTab('today')}
          >
            <i className="fas fa-calendar-day"></i>
            Today
          </button>
          <button 
            className={`tab-btn ${activeTab === 'weekly' ? 'active' : ''}`}
            onClick={() => setActiveTab('weekly')}
          >
            <i className="fas fa-chart-bar"></i>
            This Week
          </button>
        </div>

        {/* Content */}
        <div className="modal-content">
          {activeTab === 'today' && (
            <>
              {/* Main Metrics */}
              <div className="metrics-grid">
                <div className="metric-card steps">
                  <div className="metric-header">
                    <i className="fas fa-walking"></i>
                    <span>Steps</span>
                  </div>
                  <div className="metric-visual">
                    {renderProgressRing(getStepProgress(), '#4CAF50')}
                    <div className="metric-value">
                      <span className="current">{fitnessData.today.steps.toLocaleString()}</span>
                      <span className="goal">/ {fitnessData.today.stepGoal.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="metric-status">
                    {fitnessData.today.steps >= fitnessData.today.stepGoal ? (
                      <span className="achieved">Goal Achieved! 🎉</span>
                    ) : (
                      <span className="remaining">{(fitnessData.today.stepGoal - fitnessData.today.steps).toLocaleString()} to go</span>
                    )}
                  </div>
                </div>

                <div className="metric-card calories">
                  <div className="metric-header">
                    <i className="fas fa-fire"></i>
                    <span>Calories</span>
                  </div>
                  <div className="metric-visual">
                    {renderProgressRing(getCalorieProgress(), '#FF6B35')}
                    <div className="metric-value">
                      <span className="current">{fitnessData.today.calories}</span>
                      <span className="goal">/ {fitnessData.today.calorieGoal}</span>
                    </div>
                  </div>
                  <div className="metric-status">
                    <span className="remaining">{(fitnessData.today.calorieGoal - fitnessData.today.calories)} to go</span>
                  </div>
                </div>

                <div className="metric-card distance">
                  <div className="metric-header">
                    <i className="fas fa-route"></i>
                    <span>Distance</span>
                  </div>
                  <div className="metric-value large">
                    <span className="current">{fitnessData.today.distance}</span>
                    <span className="unit">km</span>
                  </div>
                  <div className="metric-progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${(fitnessData.today.distance / fitnessData.today.distanceGoal) * 100}%` }}
                    ></div>
                  </div>
                  <span className="goal-text">Goal: {fitnessData.today.distanceGoal} km</span>
                </div>

                <div className="metric-card heart-rate">
                  <div className="metric-header">
                    <i className="fas fa-heartbeat"></i>
                    <span>Heart Rate</span>
                  </div>
                  <div className="heart-rate-display">
                    <div className="current-hr">
                      <span className="value">{fitnessData.today.heartRate.current}</span>
                      <span className="unit">BPM</span>
                      <div className="heart-animation">
                        <i className="fas fa-heart"></i>
                      </div>
                    </div>
                    <div className="hr-zones">
                      <div className="zone fat">
                        <span>Fat Burn</span>
                        <span>{fitnessData.today.heartRate.zones.fat}min</span>
                      </div>
                      <div className="zone cardio">
                        <span>Cardio</span>
                        <span>{fitnessData.today.heartRate.zones.cardio}min</span>
                      </div>
                      <div className="zone peak">
                        <span>Peak</span>
                        <span>{fitnessData.today.heartRate.zones.peak}min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Workouts Section */}
              <div className="section-card workouts">
                <div className="section-header">
                  <i className="fas fa-dumbbell"></i>
                  <h3>Today's Workouts</h3>
                </div>
                <div className="workouts-list">
                  {fitnessData.today.workouts.map((workout, index) => (
                    <div key={index} className="workout-item">
                      <div className="workout-time">{workout.time}</div>
                      <div className="workout-details">
                        <div className="workout-name">{workout.activity}</div>
                        <div className="workout-stats">
                          <span><i className="fas fa-clock"></i> {workout.duration}</span>
                          <span><i className="fas fa-fire"></i> {workout.calories} cal</span>
                        </div>
                      </div>
                      <div className="workout-status">
                        <i className="fas fa-check-circle"></i>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sleep Section */}
              <div className="section-card sleep">
                <div className="section-header">
                  <i className="fas fa-moon"></i>
                  <h3>Last Night's Sleep</h3>
                </div>
                <div className="sleep-overview">
                  <div className="sleep-duration">
                    <span className="duration">{fitnessData.today.sleepData.duration}</span>
                    <span className="quality">Quality: {fitnessData.today.sleepData.quality}%</span>
                  </div>
                  <div className="sleep-times">
                    <div className="sleep-time">
                      <span>Bedtime</span>
                      <span>{fitnessData.today.sleepData.bedtime}</span>
                    </div>
                    <div className="sleep-time">
                      <span>Wake up</span>
                      <span>{fitnessData.today.sleepData.wakeup}</span>
                    </div>
                  </div>
                </div>
                <div className="sleep-phases">
                  <div className="phase deep">
                    <span>Deep</span>
                    <span>{fitnessData.today.sleepData.phases.deep}m</span>
                  </div>
                  <div className="phase light">
                    <span>Light</span>
                    <span>{fitnessData.today.sleepData.phases.light}m</span>
                  </div>
                  <div className="phase rem">
                    <span>REM</span>
                    <span>{fitnessData.today.sleepData.phases.rem}m</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'weekly' && (
            <div className="weekly-overview">
              <div className="weekly-stats">
                <div className="stat-card">
                  <i className="fas fa-walking"></i>
                  <div className="stat-value">
                    <span>{fitnessData.weekly.steps.reduce((a, b) => a + b, 0).toLocaleString()}</span>
                    <span>Total Steps</span>
                  </div>
                </div>
                <div className="stat-card">
                  <i className="fas fa-dumbbell"></i>
                  <div className="stat-value">
                    <span>{fitnessData.weekly.workouts}</span>
                    <span>Workouts</span>
                  </div>
                </div>
                <div className="stat-card">
                  <i className="fas fa-route"></i>
                  <div className="stat-value">
                    <span>{fitnessData.weekly.totalDistance}</span>
                    <span>Total km</span>
                  </div>
                </div>
                <div className="stat-card">
                  <i className="fas fa-heartbeat"></i>
                  <div className="stat-value">
                    <span>{fitnessData.weekly.avgHeartRate}</span>
                    <span>Avg BPM</span>
                  </div>
                </div>
              </div>
              
              <div className="chart-placeholder">
                <h3>Weekly Activity Trends</h3>
                <div className="simple-chart">
                  {fitnessData.weekly.steps.map((steps, index) => (
                    <div key={index} className="chart-bar">
                      <div 
                        className="bar-fill" 
                        style={{ height: `${(steps / Math.max(...fitnessData.weekly.steps)) * 100}%` }}
                      ></div>
                      <span className="bar-label">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <div className="sync-status">
            <i className="fas fa-sync-alt"></i>
            <span>Last synced: 2 minutes ago</span>
          </div>
          <div className="device-info">
            <i className="fas fa-watch"></i>
            <span>Fitbit Versa 4 - 89% battery</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityModal; 