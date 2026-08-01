"use client";

import{
Search,
Download,
Clock
}from"lucide-react";

export default function AttendanceToolbar(){

return(

<div className="rounded-2xl bg-white p-6 shadow flex justify-between">

<div className="relative w-96">

<Search className="absolute left-3 top-3 h-5 w-5 text-slate-400"/>

<input

placeholder="Search Employee"

className="w-full rounded-xl border py-3 pl-10"

/>

</div>

<div className="flex gap-3">

<button className="rounded-xl border px-5 py-3">

Export

</button>

<button className="rounded-xl bg-green-600 px-5 py-3 text-white flex items-center gap-2">

<Clock className="h-5 w-5"/>

Check In

</button>

</div>

</div>

)

}