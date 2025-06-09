import react from "react"

    const ComplaintsStatusSection = () => {
      const complaintStatuses = [
        { status: 'Pending', count: 658, percentage: '23%', color: 'blue' },
        { status: 'In Review', count: 512, percentage: '18%', color: 'yellow' },
        { status: 'In Progress', count: 911, percentage: '32%', color: 'purple' },
        { status: 'Resolved', count: 766, percentage: '27%', color: 'green' },
      ];

      return (
        <div className="bg-white my-4 p-2 shadow-md rounded-lg w-full ">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Complaints by Status</h3>
          <div className="flex justify-between items-center space-x-4">
            {complaintStatuses.map((item) => (
              <div key={item.status} className="flex-1 border-gray-300 border rounded-md p-3 text-center">
                <div className="flex justify-center items-center mb-2">
                  <p className="text-sm text-gray-600 mr-2">{item.status}</p>
                  <span className={`text-xs font-medium bg-${item.color}-100 text-${item.color}-700 px-2 py-1 rounded-full`}>
                    {item.percentage}
                  </span>
                </div>
                <p className={`text-2xl font-bold text-${item.color}-700`}>{item.count}</p>
                <div className="mt-2 bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full`}
                    style={{
                      width: item.percentage,
                      backgroundColor:
                        item.color === 'blue' ? '#3b82f6' :
                        item.color === 'yellow' ? '#f59e0b' :
                        item.color === 'purple' ? '#a855f7' :
                        item.color === 'green' ? '#10b981' : 'gray'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

    export default ComplaintsStatusSection;