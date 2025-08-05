import ShoeSlider from "../components/banner"
import StylistUI from "../components/header"
import DiscountCoupon from "../components/discountcoupon"
import FeaturedProducts from "../components/featuredproducts"
import DoubleProductBanner from "../components/productbanner"
import LatestProducts from "../components/latestproduct"
import Footer from "../components/footer"

function StylistPage() {
    return (
        <>
        <StylistUI />
        <ShoeSlider />
        <DiscountCoupon />
        <FeaturedProducts />
        <DoubleProductBanner />
        <LatestProducts />
        <Footer />
        </>
    )
}
export default StylistPage