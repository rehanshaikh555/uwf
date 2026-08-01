"use client";

import {
Users,
UserCheck,
UserX,
Clock
} from "lucide-react";

export default function AttendanceStats(){

return(

<div className="grid grid-cols-4 gap-6">

<div className="rounded-2xl bg-white p-6 shadow">

<Users className="mb-4 h-8 w-8 text-blue-600"/>

<h2 className="text-3xl font-bold">

250

</h2>

<p>Total Employees</p>

</div>

<div className="rounded-2xl bg-white p-6 shadow">

<UserCheck className="mb-4 h-8 w-8 text-green-600"/>

<h2 className="text-3xl font-bold">

240

</h2>

<p>Present</p>

</div>

<div className="rounded-2xl bg-white p-6 shadow">

<UserX className="mb-4 h-8 w-8 text-red-600"/>

<h2 className="text-3xl font-bold">

10

</h2>

<p>Absent</p>

</div>

<div className="rounded-2xl bg-white p-6 shadow">

<Clock className="mb-4 h-8 w-8 text-orange-600"/>

<h2 className="text-3xl font-bold">

96%

</h2>

<p>Attendance</p>

</div>

</div>

)

}