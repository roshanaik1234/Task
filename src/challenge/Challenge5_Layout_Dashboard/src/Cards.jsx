import React from 'react'

function Cards() {
  return (
    <>
      <style>{`
        .cccontainer {        
          padding:15px 6px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .card {
          background: white;
          border-radius: 10px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          padding: 10px;
          max-width: 500px;
          width: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
        }

        .card-header {
          border-bottom: 3px solid #667eea;
          padding-bottom: 5px;
          margin-bottom: 5px;
        }

        .card-title {
          font-size: 16px;
          font-weight: bold;
          color: #333;
          margin: 0;
        }

        .card-body {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .info-row {
          display: flex;
          align-items: flex-start;
          padding: 5px;
          background: #f8f9fa;
          border-radius: 10px;
          border-left: 4px solid #667eea;
          transition: background 0.2s ease;
        }

        .info-row:hover {
          background: #e9ecef;
        }

        .info-label {
          font-weight: 600;
          color: #667eea;
          min-width: 100px;
          font-size: 14px;
        }

        .info-value {
          color: #495057;
          font-size: 14px;
          flex: 1;
        }

        .card-footer {
          margin-top: 10px;
          padding-top: 5px;
          border-top: 2px solid #e9ecef;
        }

        .btn {
          width: 100%;
          padding: 10px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .btn:hover {
          transform: scale(1.02);
          box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
        }

        .btn:active {
          transform: scale(0.98);
        }
      `}</style>

      <div className="cccontainer">
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Profile Card</h2>
          </div>
          
          <div className="card-body">
            <div className="info-row">
              <span className="info-label">Name:</span>
              <span className="info-value">Roshan Sharad Naik</span>
            </div>
            
            <div className="info-row">
              <span className="info-label">ID Number:</span>
              <span className="info-value">error404</span>
            </div>
            
            <div className="info-row">
              <span className="info-label">Address:</span>
              <span className="info-value">Pune, Maharashtra</span>
            </div>
          </div>
          
          <div className="card-footer">
            <button className="btn">View Details</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards