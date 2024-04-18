import Nav from "./components/Nav"
import {
    CustomerReviews,
    Footer,
    Hero,
    PopularProducts,
    Services,
    SpecialOfferts,
    Subscribe,
    SuperQuality
} from "./sections/index"
const NikeWeb = () => {
    return (
        <main className="relative">
            <Nav />
            <section className="xl:padding-1 wide:padding-r padding-b">
                <Hero></Hero>
            </section>
            <section className="padding">
                <PopularProducts></PopularProducts>
            </section>
            <section className="padding">
                <SuperQuality></SuperQuality>
            </section>
            <section className="padding-x py-10">
                <Services></Services>
            </section>
            <section className="padding">
                <SpecialOfferts></SpecialOfferts>
            </section>
            <section className="padding bg-pale-blue">
                <CustomerReviews></CustomerReviews>
            </section>
            <section className="padding-x sm:py-32 py-16 w-full">
                <Subscribe></Subscribe>
            </section>
            <section className="padding-x bg-black padding-t pb-8">
                <Footer></Footer>
            </section>
        </main>
    )
}

export default NikeWeb
