import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useAuth from "../useAuth";
import { Helmet } from "react-helmet-async";

const UserHome = () => {

    const { user } = useAuth()
    const [axisoSecure] = useAxiosSecure()

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axisoSecure('/user-stats')

            return res.data
        }
    })
    return (
        <div>

            <div className="w-full m-4  ">
                <h1 className="text-5xl text-center text-orange-500  ">Well Come Back,{user.name}</h1>
                  <Helmet> Dashbord || UserHome</Helmet>
                <div>
                    <div className="stats shadow m-8 py-10 ">

                        <div className="stat">
                            <div className="stat-figure text-secondary ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div className="stat-title font-bold text-3xl text-blue-700">Payment</div>
                            <div className="stat-value">${stats.payment}</div>
                            <div className="stat-desc">Jan 1st - Feb 1st</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                            </div>
                            <div className="stat-title font-bold text-3xl text-blue-700">Booking</div>
                            <div className="stat-value">{stats.booking}</div>
                            <div className="stat-desc">↗︎ 400 (22%)</div>
                        </div>



                    </div>

                </div>
            </div>
        </div>
    );
};

export default UserHome;