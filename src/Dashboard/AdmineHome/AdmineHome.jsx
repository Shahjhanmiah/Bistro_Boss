import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useAuth from "../useAuth";


const AdmineHome = () => {
    const { user } = useAuth()
    const [axisoSecure] = useAxiosSecure()

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axisoSecure('/admin-stats')

            return res.data
        }
    })


    return (
        <div className="w-full m-4">
            <h1 className="text-5xl text-center text-orange-500  ">Well Come Back,{user.displayName}</h1>
            <div className="stats shadow m-8  ">

                <div className="stat">
                    <div className="stat-figure text-secondary ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="stat-title font-bold text-3xl text-blue-700">Revenue</div>
                    <div className="stat-value">${stats.revenue}</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

            </div>
            {/*  2 and */}
            <div className="stats shadow m-8 bg-yellow-200">

                <div className="stat ">
                    <div className="stat-figure text-secondary ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-title font-bold text-3xl text-blue-700">New User</div>
                    <div className="stat-value">{stats.users}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

            </div>
            {/* 3 Thrad */}
            <div className="stats shadow m-8 bg-red-300">

                <div className="stat">
                    <div className="stat-figure text-secondary ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-title font-bold text-3xl text-blue-700">Menu Items</div>
                    <div className="stat-value">{stats.products}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

            </div>
            {/*  4 th */}

            <div className="stats shadow m-8  btn-info">

                <div className="stat">
                    <div className="stat-figure text-secondary ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title font-bold text-3xl text-blue-700">Ourders</div>
                    <div className="stat-value">{stats.orders}</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>

            <div className="flex">
                <div className="w-1/2">

                </div>
            </div>

        </div>
    );
};

export default AdmineHome;