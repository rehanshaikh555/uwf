const records = [
  {
    name: "John Smith",
    department: "Computer Science",
    status: "Present",
    time: "09:02 AM",
  },
  {
    name: "Emma Watson",
    department: "Mathematics",
    status: "Present",
    time: "08:59 AM",
  },
  {
    name: "Michael Lee",
    department: "Physics",
    status: "Absent",
    time: "--",
  },
];

export default function RecentAttendance() {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
      <h2 className="mb-6 text-lg font-semibold">
        Recent Attendance
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="py-3 text-left">Name</th>
            <th className="text-left">Department</th>
            <th>Status</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          {records.map((item) => (
            <tr
              key={item.name}
              className="border-b"
            >
              <td className="py-4">{item.name}</td>

              <td>{item.department}</td>

              <td>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    item.status === "Present"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.status}
                </span>
              </td>

              <td>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}