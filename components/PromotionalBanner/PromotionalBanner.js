import Image from "next/image"
import posterImg from '../../public/asset/images/poster/poster-03 1.png'

const PromotionalBanner = () => {
  return (
    <section className="mt-28 mb-20 w-9/12 m-auto">
      <div className="">
        <div className="w-full h-80 bg-[#F9F3F0] flex-between py-52 px-20 rounded">
          <div>
            <p>Enhance Your Music Experience</p>
            <h2 className="text-4xl font-bold">Enhance Your Music <div>Experience</div></h2>
            <div className="mt-12">
            <button className="bg-blue-700 py-2 px-4 text-white font-semibold hover:bg-blue-800">Check it Out!</button>
            </div>
          </div>
          <div className="mr-20">
            <Image src={ posterImg} width={300} height={300} alt='poster image' />
          </div>
        </div>
      </div>

    </section>
  )
}
export default PromotionalBanner