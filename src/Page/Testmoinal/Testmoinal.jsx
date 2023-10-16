import { useEffect, useState } from "react";
import SectionTile from "../Section/SectionTile";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { SwiperSlide,Swiper } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testmoinal = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <section className="my-20">
                <SectionTile
                    subHeading="What Our Client Say"
                    heading={'Testimonials'}
                ></SectionTile>

                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center mx-24 my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="py-8">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
                    </Swiper>
            </section>
        </div>
    );
};

export default Testmoinal;